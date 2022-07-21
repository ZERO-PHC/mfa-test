import styled from "styled-components"

const HeroSection = ({text}) => {
    return (
        <Wrapper>
            <div className="hero">
                <h1>{text}</h1>
            </div>
        </Wrapper>
    )
}

export default HeroSection;

const Wrapper = styled.section`
    width: 9500px;
    margin: auto;
    margin-top: 50px;

    .hero{
        padding: 100px 30px;
        padding-bottom: 0px;
        position: relative;
        left: 20px;
        h1{
            font-family: "Broman";
            font-size: 2.7rem;
            color: white;
            /* text-align: center; */
            line-height: 50px;

            -webkit-animation: scrolling-left1 30s linear infinite;
            animation: scrolling-left1 30s linear infinite;
        }

        @keyframes scrolling-left1 {
        0% {transform: translateX(10%);
        -webkit-transform: translateX(10%);}
        100% {transform: translateX(-100%);
          -webkit-transform: translateX(-100%);}
}
    }
`