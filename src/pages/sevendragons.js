import styled from "styled-components";
import ProjectNavbar from "../components/projectNavbar/ProjectNavbar";

import { useEffect, useState } from "react";

import { useMagicSchoolSteps } from "../contexts/MagicSchoolStepsContext";
import { useNFTs } from "../contexts/NftsContext";
import { useAuth } from "../contexts/AuthContext";

import DragonsSection from "../sections/sevenDragonsSections/DragonsSection";
import SamplersComponent from "../components/sevenDragonsComps/SamplersComponent";


const SevenDragons = () => {
  const { user } = useAuth();
  const { projects, getSamplers, SelectedRarity, Samplers } = useNFTs();
  const { stepsSamplers, setStepsSamplers } = useMagicSchoolSteps();

  useEffect(() => {
    if (user) getSamplers(user?.addr);
  }, [user]);

  return (
    <Wrapper>
      <ProjectNavbar 
      projectUrl="/sevendragons"
      logoProjectLink="logoSevenDragon.png"
      projectName="SEVEN DRAGONS"
      projectDataLoginPage={stepsSamplers}
      setProjectDataLoginPage={setStepsSamplers}
      />
      <main>
        <SamplersComponent />
        <DragonsSection />
      </main>
    </Wrapper>
  );
};

export default SevenDragons;

  const Wrapper = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    padding: 0;
    background-color: black;

    main {
      max-width: 70%;
      width: 100%;
      background: white;
      border-radius: 9px;
      margin-bottom: 2em;
      margin: 50px;
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20%;
    }
  `;