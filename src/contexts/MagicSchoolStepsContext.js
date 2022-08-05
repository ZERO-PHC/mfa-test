import React, { useState, useContext, useEffect, useCallback } from "react";

import { LoginPageDataSamplers } from "../data/magicSchoolCode/SamplersApp/loginPageData";
import {MintPageDataSamplers} from "../data/magicSchoolCode/SamplersApp/mintPageData";
import { CadencePageData } from "../data/magicSchoolCode/SamplersApp/cadenceConfigData";

export const MagicSchoolStepsContext = React.createContext("");
export const useMagicSchoolSteps = () => useContext(MagicSchoolStepsContext);

export const StepsProvider = ({ children }) => {
  const [stepsSamplers, setStepsSamplers] = useState(LoginPageDataSamplers);
  const [stepsMintSamplers, setStepsMintSamplers] = useState(MintPageDataSamplers);
  const [stepsCadence, setStepsCadence] = useState(CadencePageData);


  const value = { stepsSamplers, setStepsSamplers, stepsMintSamplers, setStepsMintSamplers, stepsCadence, setStepsCadence };

  return (
    <MagicSchoolStepsContext.Provider value={value}> {children} </MagicSchoolStepsContext.Provider>
  );
};
