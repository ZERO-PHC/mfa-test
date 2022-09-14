import React, { useState, useContext, useEffect, useCallback } from "react";

import { LoginPageDataSamplers } from "../data/magicSchoolCode/SamplersApp/loginPageData";
import { MintPageDataSamplers } from "../data/magicSchoolCode/SamplersApp/mintPageData";
import { CadencePageData } from "../data/magicSchoolCode/SamplersApp/cadenceConfigData";

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
  const [stepsSamplers, setStepsSamplers] = useState(LoginPageDataSamplers);
  const [stepsMintSamplers, setStepsMintSamplers] = useState(
    MintPageDataSamplers
  );
  const [stepsCadence, setStepsCadence] = useState(CadencePageData);
  const { user } = useAuth();

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

  const value = {
    completeStep,
    stepsSamplers,
    setStepsSamplers,
    stepsMintSamplers,
    setStepsMintSamplers,
    stepsCadence,
    setStepsCadence,
  };

  return (
    <MagicSchoolStepsContext.Provider value={value}>
      {" "}
      {children}{" "}
    </MagicSchoolStepsContext.Provider>
  );
};
