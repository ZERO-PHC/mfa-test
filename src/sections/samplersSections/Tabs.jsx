import React from "react";
import { useSamplersNFTs } from "../../contexts/Samplers/SamplersNftsContext";
import Tab from "./Tab";

const Tabs = ({rarities}) => {
    const { SelectedRarity } = useSamplersNFTs()

    return (
        <section
        style={{
        position: "absolute",
        width: "16%",
        display: "flex",
        justifyContent:"space-between",
        left: "50%",
        transform: "translate(-50%, -50%)",
        }}
        >
        {rarities.map((rarity,i) => (
        <Tab key={i} label={rarity.label} img={rarity.label === SelectedRarity ? rarity.activeImg : rarity.inactiveImg} />
        ))}
        </section>
    )
}
export default Tabs