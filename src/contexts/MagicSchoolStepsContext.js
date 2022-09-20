import React, { useState, useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
  getDocs,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { OrbiesCadencePageData } from "../data/magicSchoolCode/Orbies/cadenceConfigData";
export const MagicSchoolStepsContext = React.createContext("");
export const useMagicSchoolSteps = () => useContext(MagicSchoolStepsContext);

export const StepsProvider = ({ children }) => {
  const { GoogleUser, getUserData, CurrentLesson, CurrentStep } = useAuth();

  useEffect(() => {
    // getOrbiesData();
    // createSteps();
  }, []);

  const handleAddLesson = (state, payload) => {
    return [...state, payload];
  };

  const [OrbiesLessons, dispatch] = useReducer((state, action) => {
    const getNewLessons = (prevState) => {
      const newLessons = prevState.map((lesson, i) => {
        if (i === CurrentLesson - 1) {
          const newLesson = getNewLesson(lesson);
          return newLesson;
        }

        return lesson;
      });

      return newLessons;
    };

    const getNewLesson = (lesson) => {
      const guideline = action.payload.line;
      const userValue = action.payload.e.target.value;
      const splitedUserValue = userValue.split("");
      const splitedLine = guideline.code.split("");
      let length = splitedUserValue.length;

      const newSteps = lesson.map((step) => {
        if (step.id === CurrentStep.toString()) {
          const newCodeSnippet = step.codeSnippet;
          const actualLine = getActualLine(newCodeSnippet, guideline);
          const isMatched = checkMatch(splitedUserValue, splitedLine, length);
          actualLine.match = isMatched;
          actualLine.percent = getPercent(splitedLine, length);
          // const isCompleted = checkCompletion(splitedUserValue, splitedLine, isMatched);
          return { ...step, codeSnippet: newCodeSnippet, completed: checkCompletion(splitedUserValue, splitedLine, isMatched) };
        }

        return step;
      });

      return newSteps;
    };

    const getPercent = (splitedLine, length) => {
      return length / splitedLine.length;
    };

    const getActualLine = (codelines, guideline) => {
      const actualLine = codelines.find((line) => line.code === guideline.code);
      console.log("actualLine", actualLine);
      return actualLine;
    };

    const checkMatch = (splitedUserValue, splitedLine, length) => {
      let passed = true;

      for (let i = 0; i < length; i++) {
        if (splitedUserValue[i] != splitedLine[i]) {
          passed = false;
        }
      }

      return passed;
    };

    const checkCompletion = (splitedUserValue, splitedLine, isMatched) => {
      let completed = false;

      if (splitedUserValue.length === splitedLine.length && isMatched) {
        completed = true;
      }

      return completed;
    };

    switch (action.type) {
      case "ADD_LESSON":
        return handleAddLesson(state, action.payload);
      case "REMOVE_LESSON":
        return state.filter((lesson) => lesson.id !== action.payload);
      case "UPDATE_LESSON":
        return getNewLessons(state, action.payload);

      default:
        return state;
    }
  }, []);

  const [deployerAddress, setDeployerAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const getOrbiesData = () => {
    const collections = [
      "orbies_auth",
      "orbies_cadence",
      "orbies_mint",
      "orbies_interactions",
    ];

    collections.forEach(async (col) => {
      const stepsRef = collection(db, "lessons", col, "steps");
      const stepsSnapshot = await getDocs(stepsRef);
      // order docs by id

      const stepsDocs = stepsSnapshot.docs;

      const steps = stepsDocs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        .sort((a, b) => a.id - b.id);

      console.log("steps", steps);

      await dispatch({ type: "ADD_LESSON", payload: steps });
    });
  };

  function createSteps() {
    // const collections = [
    //   "orbies_auth",
    //   "orbies_cadence",
    //   "orbies_mint",
    //   "orbies_interactions",
    // ];

    // ref of the orbies_auth document on the lessons collection

    // create steps
    OrbiesCadencePageData.forEach(async (step) => {
      // add the step with the id of the step to the lesson collection
      await setDoc(doc(db, "lessons", "orbies_cadence", "steps", step.id), step)
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          console.log("step added");
        });
    });

    // const stepsSnapshot = await getDocs(stepsRef);
  }

  const completeStep = async () => {
    // update the steps in the database of the user
    console.log("user", GoogleUser.uid);
    const docRef = doc(db, "users", GoogleUser.uid);
    await updateDoc(docRef, {
      currentStep: CurrentStep + 1,
      currentLine: 0,
      // currentStep: CurrentStep,
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(() => {
        console.log("Document successfully written!");
      });
  };

  const handleLessonCompletion = async () => {
    // update the steps in the database of the user
    console.log("user", GoogleUser.uid);
    const docRef = doc(db, "users", GoogleUser.uid);
    await updateDoc(docRef, {
      currentLesson: CurrentLesson + 1,
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(() => {
        console.log("Completed successfully written!");
        resetCurrentStep();
      });
  };

  const resetCurrentStep = async () => {
    // update the steps in the database of the user
    console.log("user", GoogleUser.uid);
    const docRef = doc(db, "users", GoogleUser.uid);
    await updateDoc(docRef, {
      currentStep: 1,
    })
      .catch((error) => {
        console.error("Error resetting document: ", error);
      })
      .then(() => {
        console.log("Completed reset written!");
      });
  };

  const value = {
    dispatch,
    getOrbiesData,
    handleLessonCompletion,
    completeStep,
    OrbiesLessons,
    deployerAddress,
    setDeployerAddress,
    privateKey,
    setPrivateKey,
  };

  return (
    <MagicSchoolStepsContext.Provider value={value}>
      {children}
    </MagicSchoolStepsContext.Provider>
  );
};
