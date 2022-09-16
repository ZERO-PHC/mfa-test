import React, { useState, useContext, useEffect } from "react";
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
  const [stepsSamplers, setStepsSamplers] = useState(null);
  const [stepsMintSamplers, setStepsMintSamplers] = useState(null);
  const [stepsCadence, setStepsCadence] = useState(null);
  const [orbiesScriptsTransactions, setOrbiesScriptsTransactions] = useState(
    null
  );
  const [deployerAddress, setDeployerAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const { GoogleUser, getUserData, CurrentLesson, CurrentStep } = useAuth();
  

  useEffect(() => {
    getOrbiesData();
    // createLessons();
  }, []);

  const getOrbiesData = async () => {
    const collections = [
      "orbies_auth",
      "orbies_cadence",
      "orbies_mint",
      "orbies_interactions",
    ];

    collections.forEach(async (col) => {
      const stepsRef = collection(db, "lessons", col, "steps");
      const stepsSnapshot = await getDocs(stepsRef);
      const stepsDocs = stepsSnapshot.docs;

      const steps = stepsDocs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      handleSetSteps(col, steps);
    });
  };

  const handleSetSteps = (collection, steps) => {
    console.log("stepsData", steps);

    switch (collection) {
      case "orbies_auth":
        setStepsSamplers(steps);
        break;
      case "orbies_cadence":
        setStepsCadence(steps);
        break;
      case "orbies_interactions":
        setOrbiesScriptsTransactions(steps);
        break;
      case "orbies_mint":
        setStepsMintSamplers(steps);
        break;
      default:
        break;
    }
  };

  function createLessons() {

    OrbiesCadencePageData.forEach((step, i) => {
      const docRef = doc(db, "lessons", "orbies_cadence", "steps", `${i}`);

      setDoc(docRef, step).catch((error) => {
        console.error("Error adding document: ", error);
      }
    ).then(() => {
      console.log("Document successfully written!");

    });
    });
  }

  const completeStep = async () => {
    // update the steps in the database of the user
    console.log("user", GoogleUser.uid);
    const docRef = doc(db, "users", GoogleUser.uid);
    await updateDoc(docRef, {
      currentStep: CurrentStep + 1,
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
    getOrbiesData,
    handleLessonCompletion,
    completeStep,
    stepsSamplers,
    setStepsSamplers,
    stepsMintSamplers,
    setStepsMintSamplers,
    orbiesScriptsTransactions,
    setOrbiesScriptsTransactions,
    stepsCadence,
    setStepsCadence,
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
