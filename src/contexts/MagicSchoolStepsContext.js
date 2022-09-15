import React, { useState, useContext } from "react";

import { OrbiesLoginPageDataSamplers } from "../data/magicSchoolCode/Orbies/loginPageData";
import {OrbiesMintPageDataSamplers} from "../data/magicSchoolCode/Orbies/mintPageData";
import { OrbiesCadencePageData } from "../data/magicSchoolCode/Orbies/cadenceConfigData";
import { OrbiesCadenceScriptsTransactions } from "../data/magicSchoolCode/Orbies/cadenceScriptsTransactions";

export const MagicSchoolStepsContext = React.createContext("");
export const useMagicSchoolSteps = () => useContext(MagicSchoolStepsContext);

// import addDoc from firebase/firestore

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

export const StepsProvider = ({ children }) => {
  const [stepsSamplers, setStepsSamplers] = useState(OrbiesLoginPageDataSamplers);
  const [stepsMintSamplers, setStepsMintSamplers] = useState(OrbiesMintPageDataSamplers);
  const [stepsCadence, setStepsCadence] = useState(OrbiesCadencePageData);
  const [orbiesScriptsTransactions, setOrbiesScriptsTransactions] = useState(OrbiesCadenceScriptsTransactions);
  const [deployerAddress, setDeployerAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const { user } = useAuth();

  // useEffect that calls createLessons function
  useEffect(() => {
    createLessons();
  }, []);


  function createLessons() {
    
    LoginPageDataSamplers.forEach((step, i) => {
      const docRef = doc(db, "lessons", "auth", "steps", `${i}`);

      setDoc(docRef, step).catch((error) => {
        console.error("Error adding document: ", error);
      }
    ).then(() => {
      console.log("Document successfully written!");

    });
    });
  }

  // create a function to update the steps from the user
  const completeStep = async (n) => {
    // update the steps in the database of the user
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      currentAuthStep: n,
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(() => {
        console.log("Document successfully written!");
      });
  };

 

  const value = {    completeStep,
    stepsSamplers, setStepsSamplers, stepsMintSamplers, setStepsMintSamplers, orbiesScriptsTransactions, setOrbiesScriptsTransactions, stepsCadence, setStepsCadence, deployerAddress, setDeployerAddress, privateKey, setPrivateKey };

  return (
    <MagicSchoolStepsContext.Provider value={value}>
      {children}
    </MagicSchoolStepsContext.Provider>
  );
};