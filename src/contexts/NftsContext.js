import React, { useState, useContext, useEffect } from "react";
import * as fcl from "@onflow/fcl";

// ----------- SCRIPTS  -----------
// import { getSamplersScript } from "../../flow/cadence/scripts/get_samplers";
// import { MINT_SAMPLER } from "../../flow/cadence/transactions/mint_sampler";
import { getGalleriesFromAccount } from "../../flow/cadence/scripts/getGalleriesFromAccount";
import { getNftsFromProjectInsideGallery } from "../../flow/cadence/scripts/getNftsFromProjectInsideGallery";
import { getProjectsInsideGallery } from "../../flow/cadence/scripts/getProjectsInsideGallery";

export const NftsContext = React.createContext("");
export const useNFTs = () => useContext(NftsContext);

export const NftsProvider = ({ children }) => {
  const [Galleries, setGalleries] = useState([])
  const [nftsProjectInsideGallery, setNftsProjectInsideGallery] = useState([])
  const [Samplers, setSamplers] = useState([]);
  const [SelectedRarity, setSelectedRarity] = useState("common");
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //todo ->
  }, []);

  // ************* GETTERS ***********+++*
  
  // GET ALL NFTS FROM PROJECT ---> META PANDA NFT
  async function getGalleries(addr) {
    try {
      const res = await fcl.query({
        cadence: getGalleriesFromAccount,
        args: (arg, t) => [arg(addr, t.Address)],
      });
      console.log("Galleries on Account Response", res);
      setGalleries(res)
    } catch (error) { console.log("err:", error); }
  }

  async function getNftsFromProjectInsideAGallery(addr, myGalleryId, projectCollectionName) {
    try {
      const res = await fcl.query({
        cadence: getNftsFromProjectInsideGallery,
        args: (arg, t) => [
          arg(addr, t.Address),
          arg(myGalleryId, t.UInt64),
          arg(projectCollectionName, t.String)
        ],
      });
      console.log("Galleries on Account Response", res);
      setGalleries(res)
    } catch (error) { console.log("err:", error); }
  }

  async function getProjectInsideGalleries(addr, galleryID) {
    try {
      const res = await fcl.query({
        cadence: getProjectsInsideGallery,
        args: (arg, t) => [
          arg(addr, t.Address),
          arg(galleryID, t.UInt64)
        ],
      });
      console.log("Galleries on Account Response", res);
      setGalleries(res)
    } catch (error) { console.log("err:", error); }
  }


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
    setIsLoading(true);

    try {
      const txid = await fcl.mutate({
        cadence: MINT_SAMPLER,
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
          setIsLoading(false);
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
    getGalleries,
    nftsProjectInsideGallery,
    mintSampler,
    IsLoading
  };

  return (
    <NftsContext.Provider value={value}> {children} </NftsContext.Provider>
  );
};
