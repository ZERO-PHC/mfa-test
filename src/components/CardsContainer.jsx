import styled from "styled-components"
import Card from "./Card";

const CardsContainer = () => {
    return (
        <Wrapper>
            <div className="cardsCont">
                <Card 
                imgLink="samplers.png"
                title="SAMPLERS"
                text="Learn how to deploy your first smart contract, build a dapp that authenticate the client and mint your NFTs"
                />
                <Card 
                imgLink="samplers.png"
                title="PACKERS"
                text="Learn how to make a simple pack smart contract, how to mint them in the backend and how to show it to your client"
                />
                <Card 
                imgLink="samplers.png"
                title="MARKETPLACE"
                text="Learn how to deploy your first smart contract, build a dapp that authenticate the client and mint your NFTs"
                />
                <Card 
                imgLink="samplers.png"
                title="NFTSHIRT"
                text="LEARN HOW TO MAKE A DAPP THAT GET THE NFT FROM YOUR CLIENT AND CUSTOMIZE IT IN A TSHIRT"
                />
            </div>
        </Wrapper>
    )
}

export default CardsContainer;

const Wrapper = styled.section`
    .cardsCont{
        width: 100%;
        padding: 10px 150px;
        padding-bottom: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px 50px;
    }
`