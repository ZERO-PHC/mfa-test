import React from "react";
import { useSamplersNFTs } from "../../contexts/Samplers/SamplersNftsContext";

const SamplerParagraph = () => {
  const { SelectedRarity } = useSamplersNFTs();
  if (SelectedRarity === "common") {
    return <img src="/common_sampler.png" alt="sampler-img" />;
  } else if (SelectedRarity === "rare") {
    return <img src="/rare_sampler.png" alt="sampler-img" />;
  } else {
    return <img src="/legendary_sampler.png" alt="sampler-img" />;
  }
}

export default SamplerParagraph