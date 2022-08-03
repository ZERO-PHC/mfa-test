import React, { useState, useContext, useEffect } from "react";
import * as fcl from "@onflow/fcl";

// ----------- SCRIPTS  -----------
import { getSamplersScript } from "../../../flow/cadence/Samplers/scripts/get_samplers";
import { PAID_MINT_SAMPLER } from "../../../flow/cadence/Samplers/transactions/paid_mint_sampler";

export const SamplersNftsContext = React.createContext("");
export const useSamplersNFTs = () => useContext(SamplersNftsContext);

export const SamplersNftsProvider = ({ children }) => {

  const [Samplers, setSamplers] = useState([]);
  const [SelectedRarity, setSelectedRarity] = useState("common");
  const [IsLoadingSamplers, setIsLoadingSamplers] = useState(false);

  // ************* GETTERS ***********+++*
  // GET ALL NFTS FROM PROJECT ---> META PANDA NFT
  async function getSamplers(addr) {
   
    try {
      const res = await fcl.query({
        cadence: getSamplersScript,
        args: (arg, t) => [arg(addr, t.Address)],
      });

      console.log("samplers res", res);
      setSamplers(res)

      // return result;
    } catch (error) {
      console.log("err:", error);
    }
  }

  ////// SETTERS
  const mintSampler = async (name, description, thumbnail, type, addr) => {
    console.log("minting sampler");
    setIsLoadingSamplers(true);

    try {
      const txid = await fcl.mutate({
        cadence: PAID_MINT_SAMPLER,
        args: (arg, t) => [
          arg(name, t.String),
          arg(description, t.String),
          arg(thumbnail, t.String),
          arg(type, t.String),
        ],
        limit: 999,
      });

      fcl.tx(txid).subscribe((res) => {
        if (res.status === 4) {
          setIsLoadingSamplers(false);
         getSamplers(addr)
        }
      });

      console.log("txid", txid);
    } catch (error) {
      console.log("err", error);
    }
  };

  const value = {
    Samplers,
    SelectedRarity,
    setSelectedRarity,
    getSamplers,
    mintSampler,
    IsLoadingSamplers
  };

  return (
    <SamplersNftsContext.Provider value={value}> {children} </SamplersNftsContext.Provider>
  );
};