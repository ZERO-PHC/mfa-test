import { useNFTs } from "../../contexts/NftsContext";

import styled from "styled-components"
import { useEffect, useState } from "react";

const SamplersComponent = () => {
    const { Samplers } = useNFTs();
    const [common, setCommon] = useState(0)

    const getSamplers = () => {
        let commonType = 0
        let legendaryType = 0
        let rareType = 0

        Samplers.map((sampler, key) => {
            if(sampler.type === "common") commonType++
            if(sampler.type == "legendary") legendaryType ++
            if(sampler.type == "rare") rareType ++
        })

        return {"commun": commonType, "legendary": legendaryType, "rare": rareType}
    }

    return(
        <Wrapper>
            <h1> YOUR SAMPLERS</h1>
            <div className="samplersDiv">
                <div className="sampler">
                    <img src="common_sampler.png" alt="" />
                    <h2>{getSamplers().commun}</h2>
                </div>
                <div className="sampler">
                    <img src="legendary_sampler.png" alt="" />
                    <h2>{getSamplers().legendary}</h2>
                </div>
                <div className="sampler">
                    <img src="rare_sampler.png" alt="" />
                    <h2>{getSamplers().rare}</h2>
                </div>
            </div>
        </Wrapper>
    )
}

export default SamplersComponent

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    
    h1{
        font-size: 20px;
        margin: 3px;
    }
    .samplersDiv{
        display: flex;
        justify-content: center;
        gap: 30px;
        padding: 20px 40px;
        border: 1px solid black;
        border-radius: 20px;
    }
    .sampler{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 70px;
        }
        h2{
            margin: 0;
        }
    }
`