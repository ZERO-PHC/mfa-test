import styled from "styled-components";
import ModalBodyButtons from "../modalBodyButtons/ModalBodyButtons";

const StepNoCodeView = ({
  steps,
  n,
  structDrawerOpen,
  setStructDrawerOpen,
}) => {
  return (
    <Wrapper>
      <div className={"learnboxIntro"}>
        {steps[n].subtitle && <li>{steps[n].subtitle}</li>}
        {steps[n].subtitle2 && <li>{steps[n].subtitle2}</li>}
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
export default StepNoCodeView;

const Wrapper = styled.div`
    background: url("/magicSchoolModal/dialogBoxBig.svg");
    height: 634px;
    width: 1010px;
    margin-top: 4rem;
    padding: 4rem;
    background-repeat: no-repeat;
    background-position-x: center;
    color: #00FFB2;

  .learnboxIntro {
    height: 90%;
    padding: 100px 50px;
    padding-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    color: #00ffb2;
    overflow: auto;
  }
`;
