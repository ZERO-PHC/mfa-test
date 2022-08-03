import React from "react";
import { useSamplersNFTs } from "../../contexts/Samplers/SamplersNftsContext";
import CommonParagraph from "./CommonParagraph";
import LegendaryParagraph from "./LegendaryParagraph";
import RareParagraph from "./RareParagraph";

const SamplerParagraph = () => {
  const { SelectedRarity } = useSamplersNFTs();
  
  if (SelectedRarity === "common") {
    return <CommonParagraph />;
  } else if (SelectedRarity === "rare") {
    return <RareParagraph />;
  } else {
    return <LegendaryParagraph />;
  }
}

export default SamplerParagraph