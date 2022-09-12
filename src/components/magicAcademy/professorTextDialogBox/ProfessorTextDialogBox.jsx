import TeachBox from "../../../../public/teachBox.svg";
import styled from "styled-components";

const ProfessorTextDialogBox = ({step, professorText}) => {
    return (
        <Wrapper>
            <div className={"professorText"}>
              <div>
                  <p>
                  {professorText.title}
                  </p>
                  {professorText != undefined &&
                    professorText.title != undefined && (
                      <ul>
                        {
                        (
                          step.codeSnippet[0].professorText 
                          &&
                          step.codeSnippet[0].professorText.link != undefined
                          )
                        
                        &&
                          step.codeSnippet[0].professorText.link.map(
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
                      </ul>
                    )}
                
                </div>
              </div>
        </Wrapper>
    )
}

export default ProfessorTextDialogBox;

const Wrapper = styled.div`
width: 100%;
.professorText{
    height: 160px;
    background: url("/teachBox.svg");
    background-repeat: no-repeat;
    background-position-x: center;
    margin: auto !important;
    padding: 10px 20px;
    font-size: .9rem;
}

.professorText > div{
    width: 100%;
    padding: 0 50px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.professorText > svg{
  margin: auto;
}

.professorText > div > p{
    color: #00FFB2;
}

.professorText > div > p > ul{
    margin-top: 1px solid #00FFB2;
    display: flex;
    justify-content: center;
    padding: 5px;
    font-size: .75rem;
}

.professorText > div > ul > a{
    padding: 3px 10px;
    background-color: #00FFB2;
    color: black;
    transform: matrix(0.99, 0, -0.12, 1, 0, 0);
}
`