import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SamplerCard from "../components/magicAcademy/SamplerCard";
import Image from "next/image";
import { useRouter } from "next/router";

const samplers = [
  {
    id: 0,
    name: "Orbies",
    path: "/orbies",
    xp: "1500",
    active: true,
  },
  {
    id: 1,
    name: "Seven Dragons ",
    xp: "3000",
    active: true,
  },
  {
    id: 2,
    name: "Packers",
    xp: "4500",
    active: false,
  },
  {
    id: 3,
    name: "Flozzar",
    xp: "6000",
    active: false,
  },
];



export default function ViewSamplers() {
  const router = useRouter();
  const handleCardSelection = (id) => {
    console.log(id);
      // route to the sampler id page
      // router.push(`/samplers/${id}`);
      router.push(`/samplers`);
  }
  return (
    <Wrapper>
      <section>
        {samplers.map((sampler, index) => (
          <SamplerCard {...sampler} key={index}/>
        ))}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  // height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #6100ff -47.66%, #000000 100%);

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30%;
  }

  button {
    background: black;
    border: 1px solid #00ffb2;
    color: #00ffb2;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem 0rem;
  }

  section {
    width: 80%;

    // display: flex;
    // justify-content: center;
    // flex-wrap: wrap;
  }
`;
