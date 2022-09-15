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
        {steps[n].codeSnippet[0].professorText.title && <p>{steps[n].codeSnippet[0].professorText.title}</p>}
        {
                        (
                          steps[n].codeSnippet[0].professorText 
                          &&
                          steps[n].codeSnippet[0].professorText.link != undefined
                          )
                        
                        &&
                          steps[n].codeSnippet[0].professorText.link.map(
                            (link, index) => {
                              return (
                                <a
                                  href={link.href}
                                  key={index}
                                  target={"_blank"}
                                  rel={"noreferrer"}
                                >
                                  {link.text}
                                </a>
                              );
                            }
                          )}
        <ModalBodyButtons
          step={steps[n]}
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
    padding: 2rem;
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

    a{
      margin: auto;
      padding: .5rem 0;
      text-align: center;
      background: #00FFB2;
      width: 235px;
      color: black;
      box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.45);

      :hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: .3s;
      }
    }
  }
`;
