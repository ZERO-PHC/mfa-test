import React from "react";
import styled from "styled-components"

const RareParagraph = () => {
  return (
    <>
    <p>
      Mint your Rare Sampler NFT 
    </p>
    <Wrapper>
      <p>30</p>
      <img src="flowToken.png"/>
    </Wrapper>
    </>
  );
}

export default RareParagraph

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 15px;
  margin: 10px 0;
  transform: matrix(0.99, 0, -0.12, 1, 0, 0);
  width: 120px;
  box-shadow: 0px 0px 8px 3px rgb(65 63 119 / 80%);

  img{
    width: 40px;
    height: 40px;
  }

`