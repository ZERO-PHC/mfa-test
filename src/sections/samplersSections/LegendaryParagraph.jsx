import React from "react";
import styled from "styled-components"

const LegendaryParagraph = () =>  {
  return (
  <>
  <p>Mint your Legendary Sampler NFT </p>
  <Wrapper>
      <p>50</p>
      <img src="flowToken.png"/>
    </Wrapper>
  </>
  )
}

export default LegendaryParagraph

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 15px;
  margin: 10px 0;
  transform: matrix(0.99, 0, -0.12, 1, 0, 0);
  width: 120px;
  box-shadow: 0px 0px 5px 4px #fad769e0;

  img{
    width: 40px;
    height: 40px;
  }

`