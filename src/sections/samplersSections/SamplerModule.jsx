import Image from "next/image";
import React from "react";

const SamplerModule = ({ sampler }) => {
  let src;
  switch (sampler.type) {
    case "common":
      src = "/common_sampler.png";
      break;

    case "rare":
      src = "/rare_sampler.png";
      break;

    case "legendary":
      src = "legendary_sampler.png";
      break;

    default:
      src = "/common_sampler.png";

      break;
  }

  return <img style={{
    transform: "skew(20deg)",
  }} src={src} alt="sampler-img" height={80} width={100} />;
}

export default SamplerModule;