import React, { useState, useContext, useEffect, useCallback } from "react";
import * as fcl from "@onflow/fcl";

import { LoginPageData } from "../data/magicSchoolCode/loginPageData";

export const MagicSchoolStepsContext = React.createContext("");
export const useMagicSchoolSteps = () => useContext(MagicSchoolStepsContext);

export const StepsProvider = ({ children }) => {
  const [steps, setSteps] = useState(LoginPageData);

  const updateSteps = useCallback(
    (newSteps) => {
      setSteps(newSteps);
    }
  , []);

  //useEffect(() => {
    // checkSteps2()
  //}, []);


  // const checkSteps2 = useCallback(() => {  
  //   steps.map(step => {
  //     console.log("STEP", step)
  //     if(step.codeSnippet == undefined) {
  //       step.complete = true;
  //     } else {
  //       let complete = true
  //       step.codeSnippet.map(snippet => {
  //         if (snippet.percent != 1 ){
  //           complete = false
  //         }
  //       })
  //       step.complete = complete
  //     }
  //   })
  // }
  // , [steps]);


  // const checkSteps = () => {
  //   steps.map(step => {
  //     if(step.codeSnippet.length < 1){
  //       step.complete = true;
  //     } else {
  //       let complete = true
  //       step.codeSnippet.forEach(snippet => {
  //         if (snippet.percent != 1 ){
  //           complete = false
  //         }
  //       })
  //       step.complete = complete
  //     }
  //   })
  // }
  

  const value = { steps, setSteps, updateSteps };

  return (
    <MagicSchoolStepsContext.Provider value={value}> {children} </MagicSchoolStepsContext.Provider>
  );
};
