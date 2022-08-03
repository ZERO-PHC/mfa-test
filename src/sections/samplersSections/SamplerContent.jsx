import React, { useEffect } from "react";
import Image from 'next/image';
import styled from "styled-components";

import { useAuth } from "../../contexts/AuthContext";
import { useSamplersNFTs } from "../../contexts/Samplers/SamplersNftsContext";
import SamplersDivider from "../../../public/samplers.svg";

import { Spinner } from '@chakra-ui/react'
import SamplerParagraph from "./SamplerParagraph";
import SamplerSectionImg from "./SamplerSectionImg";

const SamplerContent = () => {
        
        const {
            SelectedRarity,
            Samplers,
            getSamplers,
            mintSampler,
            IsLoadingSamplers,
          } = useSamplersNFTs();
          const { user, logIn } = useAuth();
        
          const handleMint = async () => {
            mintSampler("nft", "lvl 1 nft", "t1", SelectedRarity, user?.addr);
          };
        
          return (
            <section
              style={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "",
              }}
            >
              <Wrapper>
                { user.loggedIn ? (
                  <div style={{ width: "70%" }}>
        
                    <h1>{SelectedRarity.toUpperCase()}</h1>
                    <SamplerParagraph />
                    <button onClick={() => handleMint()}>
                      {IsLoadingSamplers ? <Spinner /> : "BUY"}
                    </button>
                    
                  </div>
                ) : (
                  <div style={{ width: "50%" }}>
                    <h1>Welcome</h1>
                    <p>Sign Up to get your free NFT!</p>
                    <button onClick={logIn}> SIGN UP </button>
                  </div>
                )}
                
                <div
                  style={{
                    display: "flex",
                    height: "50vh",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SamplerSectionImg />
                </div>
              </Wrapper>
              <SamplersDivider style={{ width: "100%" }} />
            </section>
          );
}

export default SamplerContent

const Wrapper = styled.div`
  padding: 2.4rem;
  display: flex;
  height: 70%;
  font-family: "Monument";

  h1{
    font-family: "MonumentBold";
    font-size: 1.75rem;
  }

  p{
    font-size: 1.2rem;
    padding: 10px 0;
  }

  button{
    font-family: "Monument";
    font-size: .85rem;
    height: 2rem;
    width: 7rem;
    background: #000;
    border-radius: 20px;
    color: #fff;

    &:hover{
      cursor: pointer;
    }
  }
`;