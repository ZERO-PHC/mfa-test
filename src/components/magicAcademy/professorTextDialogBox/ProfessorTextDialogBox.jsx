import TeachBox from "../../../../public/teachBox.svg";
import styled from "styled-components";

const ProfessorTextDialogBox = ({steps, n, professorText}) => {
    return (
        <Wrapper>
            <div className={"professorText"}>
                <p>
                  {professorText.title}
                  {professorText != undefined &&
                    professorText.title != undefined && (
                      <ul>
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
                      </ul>
                    )}
                </p>
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
    padding: 20px;
}

.professorText > svg{
  margin: auto;
}

.professorText > p{
    color: #00FFB2;
    width: 100%;
    padding: 0 30px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.professorText > p > ul{
    margin-top: 1px solid #00FFB2;
    display: flex;
    justify-content: center;
    padding: 5px;
    font-size: .75rem;
}

.professorText > p > ul > a{
    padding: 3px 10px;
    background-color: #00FFB2;
    color: black;
    transform: matrix(0.99, 0, -0.12, 1, 0, 0);
}
`