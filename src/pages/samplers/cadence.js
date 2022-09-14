import styled from "styled-components";
import NavbarCadencePage from "../../components/magicAcademy/cadencePage/navbarCadencePage/NavbarCadencePage";
import { useMagicSchoolSteps } from "../../contexts/MagicSchoolStepsContext";

const Cadence = () => {
    const {stepsCadence, setStepsCadence} = useMagicSchoolSteps([]);

    return (
        <Wrapper
        style={{
            background: `linear-gradient(89.11deg, #0e0d0d 25.47%, #3f8e76 99.28%)`,
          }}
        >
            <NavbarCadencePage 
            projectUrl="/samplers"
            logoProjectLink="logoSamplers.png"
            projectName="SAMPLERS"
            cadenceData={stepsCadence}
            setCadenceData={setStepsCadence}
            />
            <h1>Cadence</h1>
        </Wrapper>
    )
}

export default Cadence;

const Wrapper = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`