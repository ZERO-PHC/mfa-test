import Image from "next/image";
import React from "react";
import { useSamplersNFTs } from "../../contexts/Samplers/SamplersNftsContext";
// import CommonActive from "../../public/tab1-active.svg"
import styled from "styled-components";

export default function Tab({ label, img }) {
  const { setSelectedRarity } = useSamplersNFTs();

  return (
    <Wrapper onClick={() => setSelectedRarity(label)}>
      {/* <CommonActive /> */}
      <img src={img} alt="sphere"  />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;
