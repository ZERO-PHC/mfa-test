import { useState, useEffect } from "react";

import ProjectNavbar from "../../components/projectNavbar/ProjectNavbar";
import Tabs from "../../sections/samplersSections/Tabs";
import SamplerContent from "../../sections/samplersSections/SamplerContent";
import MySamplers from "../../sections/samplersSections/MySamplers";

import { useAuth } from "../../contexts/AuthContext";
import { useSamplersNFTs } from "../../contexts/Samplers/SamplersNftsContext";

import { rarities } from "../../sections/samplersSections/rarities";
import { useMagicSchoolSteps } from "../../contexts/MagicSchoolStepsContext";

import styled from "styled-components";
import VerticallyCenter from "../../sections/samplersSections/allMySamplers/AllMySamplersModal";

let gradient1 = "89.11deg, #0e0d0d 25.47%, #3f8e76 99.28%";
let gradient2 = "89.11deg, #0e0d0d 25.47%, #413F77 99.28%";
let gradient3 = "89.11deg, #0e0d0d 25.47%, #B2BE21 121.65%";

const Samplers = () => {
    const { stepsSamplers, setStepsSamplers, stepsMintSamplers, setStepsMintSamplers, stepsCadence, setStepsCadence, orbiesScriptsTransactions, setOrbiesScriptsTransactions } = useMagicSchoolSteps();  
    const { user } = useAuth();
    const { getSamplers, SelectedRarity, Samplers } = useSamplersNFTs();

  useEffect(() => {
    if (user) getSamplers(user?.addr);
  }, [user]);
  
  let bgColor;

  switch (SelectedRarity) {
    case "common":
      bgColor = gradient1;
      break;
    case "rare":
      bgColor = gradient2;
      break;
    case "legendary":
      bgColor = gradient3;
      break;

    default:
      break;
  }

  let filtered = ""
  if(Samplers.length > 10){
    filtered = Samplers.slice(0,20)
  }

  return (
    <Wrapper
    style={{
      background: `linear-gradient(${bgColor})`,
    }}
    >
      <ProjectNavbar
      projectUrl="/samplers"
      logoProjectLink="logoSamplers.png"
      projectName="SAMPLERS"
      projectDataLoginPage={stepsSamplers}
      setProjectDataLoginPage={setStepsSamplers}
      projectDataMintPage={stepsMintSamplers}
      setProjectDataMintPage={setStepsMintSamplers}
      stepsCadence={stepsCadence}
      setStepsCadence={setStepsCadence}
      cadenceScriptsTransaction={orbiesScriptsTransactions}
      setCadenceScriptsTransaction={setOrbiesScriptsTransactions}
        />
      <main className="indexMain">
        <Tabs rarities={rarities} />
        <SamplerContent />
        <footer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "black",
              width: "80%",
              minWidth: "785px",
              height: "50%",
            }}
          >
            {(Samplers.length > 0 && Samplers.length <= 20)
            ?
            (<MySamplers samplers={Samplers} />)
            :
            (
            <div className="samplersAndButton">
            <MySamplers samplers={filtered}/>
            {Samplers.length > 0 && <VerticallyCenter samplers={Samplers} />}
            </div>
            )
          }
          </div>
        </footer>
      </main>
    </Wrapper>
  )
}

export default Samplers;

const Wrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    .indexMain {
      max-width: 70%;
      width: 100%;
      background: white;
      height: 80%;
      border-radius: 9px;
      margin-bottom: 2em;
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20%;
    }

    .samplersAndButton{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `;