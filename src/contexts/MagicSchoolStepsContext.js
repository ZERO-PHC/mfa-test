import React, { useState, useContext } from "react";

import { OrbiesLoginPageDataSamplers } from "../data/magicSchoolCode/Orbies/loginPageData";
import {OrbiesMintPageDataSamplers} from "../data/magicSchoolCode/Orbies/mintPageData";
import { OrbiesCadencePageData } from "../data/magicSchoolCode/Orbies/cadenceConfigData";
import { OrbiesCadenceScriptsTransactions } from "../data/magicSchoolCode/Orbies/cadenceScriptsTransactions";

export const MagicSchoolStepsContext = React.createContext("");
export const useMagicSchoolSteps = () => useContext(MagicSchoolStepsContext);

export const StepsProvider = ({ children }) => {
  const [stepsSamplers, setStepsSamplers] = useState(OrbiesLoginPageDataSamplers);
  const [stepsMintSamplers, setStepsMintSamplers] = useState(OrbiesMintPageDataSamplers);
  const [stepsCadence, setStepsCadence] = useState(OrbiesCadencePageData);
  const [orbiesScriptsTransactions, setOrbiesScriptsTransactions] = useState(OrbiesCadenceScriptsTransactions);
  const [deployerAddress, setDeployerAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const value = { stepsSamplers, setStepsSamplers, stepsMintSamplers, setStepsMintSamplers, orbiesScriptsTransactions, setOrbiesScriptsTransactions, stepsCadence, setStepsCadence, deployerAddress, setDeployerAddress, privateKey, setPrivateKey };

  return (
    <MagicSchoolStepsContext.Provider value={value}> {children} </MagicSchoolStepsContext.Provider>
  );
};