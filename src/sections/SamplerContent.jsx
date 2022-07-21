import React, { useEffect } from "react";
import styled from "styled-components";

import { useNFTs } from "../contexts/NftsContext";
import { useAuth } from "../contexts/AuthContext";

import Spinner from "../atoms/Spinner";

export default function SamplerContent() {
 
  const {
    SelectedRarity,
    Samplers,
    getSamplers,
    mintSampler,
    IsLoading,
  } = useNFTs();
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
        {user.loggedIn ? (
          <div style={{ width: "70%" }}>

            <h1>{SelectedRarity.toUpperCase()}</h1>
            <button onClick={() => handleMint()}>
              {IsLoading ? <Spinner /> : "MINT"}
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
        </div>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  height: 70%;
`;
