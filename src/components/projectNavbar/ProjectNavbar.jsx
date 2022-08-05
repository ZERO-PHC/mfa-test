import React from "react";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import MagicSchoolPopover from "../magicAcademy/magicSchoolPopover/MagicSchoolPopover";

import styled from "styled-components";
import { Icon } from "@iconify/react";
import AddressComp from "./addressComp/AddressComp";

const ProjectNavbar = ({
  projectUrl,
  projectName,
  logoProjectLink,
  projectDataLoginPage,
  setProjectDataLoginPage,
  projectDataMintPage,
  setProjectDataMintPage,
  stepsCadence,
  setStepsCadence
}) => {
  const { logIn, logOut, user, flow } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.loggedIn) {
      router.push(projectUrl, undefined, { shallow: true });
    }
  }, [projectUrl, router, user]);


  return (
    <HeaderWrapper>
      <div>
        <Link href={projectUrl}>
          <Image
            className="logo"
            width={50}
            height={50}
            src={`/project/logos/${logoProjectLink}`}
            alt='Project Logo'
          />
        </Link>
        <h2>{projectName}</h2>
      </div>
      {user?.addr ? (
        <section>
          <MagicSchoolPopover
            magicSchoolData={projectDataMintPage}
            setMagicSchoolData={setProjectDataMintPage}
            projectToCheck={`${projectName} Login Page`}
            name={`${projectName} Mint Page`}
            professor={"/zeroAvatar.png"}
          />
          <AddressComp flow={flow} user={user} />
          <div style={{ width: "1rem" }}></div>
          <div className="addressBox" onClick={logOut}>
            <Icon icon="majesticons:logout" height={"2em"} />
          </div>
        </section>
      ) : (
        <div className="buttons">
          <MagicSchoolPopover
            title={"Explore the dapp and click this icon after that to learn how to deploy the Orbies Contract"}
            magicSchoolData={stepsCadence}
            setMagicSchoolData={setStepsCadence}
            name={`${projectName} Cadence Page`}
            professor={"/frlabsAvatar.png"}
          />
          <MagicSchoolPopover
            title={"Explore the dapp and click this icon after that to learn how to build the Login Page"}
            magicSchoolData={projectDataLoginPage}
            setMagicSchoolData={setProjectDataLoginPage}
            name={`${projectName} Login Page`}
            professor={"/zeroAvatar.png"}
          />
          <div className="auth-btn" onClick={logIn}>
            LOG IN / SIGN UP
          </div>
        </div>
      )}
    </HeaderWrapper>
  );
};

export default ProjectNavbar;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  color: white;
  z-index: 20;
  padding: 1rem 3rem;
  font-family: "Monument";

  section {
    width: 40%;
    display: flex;
    justify-content: end;
  }

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    color: white;
    font-family: MonumentBold;
  }

  img {
    &:hover {
      cursor: pointer;
    }
  }

  .auth-btn {
    font-family: "Monument";
    font-size: 12px;
    padding: 10px 30px;
    background-color: gray;
    border-radius: 40px;
    background: radial-gradient(
        54.9% 630.78% at 48.69% 44.74%,
        rgba(253, 253, 253, 0.12) 0%,
        rgba(248, 241, 255, 0.6) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

    & button {
      display: none;
      padding: 5px 15px;
      margin: 0px 10px;
      border-radius: 10px;
      font-family: "Monument";
      font-size: 0.7rem;
      transition: 1s;
    }

    &:hover {
      cursor: pointer;
      & button {
        display: flex;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  h1 {
    color: white;
    font-family: "MonumentBold";
  }
`;