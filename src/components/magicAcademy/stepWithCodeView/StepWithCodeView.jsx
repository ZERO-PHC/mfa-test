import { Icon } from "@iconify/react";
import styled from "styled-components";
import MagicSchoolInputWrapper from "../magicSchoolInput/MagicSchoolInputWrapper";
import ModalBodyButtons from "../modalBodyButtons/ModalBodyButtons";

const StepWithCodeView = ({ steps, n, setSteps, setProfessorText, name, structDrawerOpen, setStructDrawerOpen }) => {
  return (
    <Wrapper>
      <div className={"codebox"}>
        <div className={"codeboxHeader"}>
          {steps[n].subtitle && <li>{steps[n].subtitle}</li>}
        </div>
        <div className={"learnbox"}>
          {steps[n].subtitle2 ? (
            <p>{steps[n].subtitle2}</p>
          ) : (
            <p>
              Write down the code for the internalization of the lesson and then
              you can copy it to your clipboard.
            </p>
          )}
          <MagicSchoolInputWrapper
            step={n}
            steps={steps}
            setSteps={setSteps}
            setProfessorText={setProfessorText}
            name={name}
          />
        </div>
        <ModalBodyButtons
        steps={steps}
        n={n}
        structDrawerOpen={structDrawerOpen}
        setStructDrawerOpen={setStructDrawerOpen}
        />
      </div>
    </Wrapper>
  );
};
export default StepWithCodeView;

const Wrapper = styled.section`
  .codebox {
    width: 100%;
    /* height: 80%; */
    display: flex;
    flex-direction: column;
    background-color: #161616;
    border: 1px solid #00ffb2;
    color: white;
    border-radius: 10px;
    overflow: hidden;
  }

  .codeboxHeader {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    color: #00ffb2;
    border-bottom: 1px solid #00ffb2;
  }

  .header {
    color: white;
    text-align: center;
  }

  .learnbox {
    padding: 30px;
    padding-bottom: 2px;
    height: 450px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #00ffb2;
    justify-content: flex-start;
    overflow: auto;
  }

  .learnbox > svg {
    color: #00ffb2;
    position: absolute;
    right: 94px;
    top: 225px;
  }

  .learnbox > svg:hover {
    cursor: pointer;
  }

  .learnbox::-webkit-scrollbar {
    width: 0.3em;
    position: absolute;
  }

  .learnbox::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .learnbox::-webkit-scrollbar-thumb {
    background-color: #00ffb2;
    border-radius: 10px;
  }
`;
