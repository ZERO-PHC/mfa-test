import React from "react";
import SamplerModule from "./SamplerModule"
import styled from "styled-components";

const MySamplers = ({ samplers }) => {
    const formattedSamplers = Object.values(samplers)
    
  return (
    <Wrapper >
      { formattedSamplers.map((sampler, i) => (
        <SamplerModule key={i} sampler={sampler} />
      ))}
    </Wrapper>
  );
}

export default MySamplers

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img{
    width: 75px;
  }

  p{
    font-size: 1.5rem;
    font-family: "Monument";
    color: black;
  }
`