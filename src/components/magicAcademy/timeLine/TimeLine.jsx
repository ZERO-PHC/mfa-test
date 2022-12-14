import styled from "styled-components"
import { useAuth } from "../../../contexts/AuthContext"
import { useMagicSchoolSteps } from "../../../contexts/MagicSchoolStepsContext"

const TimeLine = ({ timeLineLength, n }) => {
    // deconstruct the Lesson variable from the MagicSchoolStepsContext
    // const { Lesson } = useMagicSchoolSteps()
    // deconstruct the currentUser variable from the AuthContext
    const { CurrentStep, Lesson } = useAuth()



    return (
        <>
            <Wrapper>
                {(Lesson && CurrentStep) && (

                    // create an array of the length of the lessonLen
                    [...Array(Lesson.len)].map((e, i) => {
                        // if the current index is less than the current lesson, then the lesson is complete
                        // 
                        return (
                            <div key={i} className="mainDiv">
                                <div
                                    className={`${i < CurrentStep ? "completed timeLineItem" : "timeLineItem"}`}
                                >
                                </div>
                                {i != Lesson.len - 2 ?
                                    <div
                                        className={`${i < CurrentStep ? "completed timeLineItemNumber2" : "timeLineItemNumber2"}`}
                                    ></div>
                                    : null}
                            </div>
                        )

                    })

                )}
            </Wrapper>
        </>
    )
}

export default TimeLine

const Wrapper = styled.div`
    display: flex;
    .mainDiv{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 250px;
    transition: 1s;
    }

    .timeLineItem{
        /* border: 1px solid #00FFB2; */
        border-top: 1px solid #00FFB2;
        border-bottom: 1px solid #00FFB2;
        height: 50px;
        width: 33px;
        z-index: 1;
        transform: matrix(0.99, 0, -0.12, 1, 0, 0);
        box-shadow: 1px 0px 1px #00ffb2;
    }

    .timeLineItemNumber2{
        z-index: 3;
        position: relative;
        right: -1px;
        width: 20px;
        height: 20px;
        /* border: 1px solid #3D4345; */
        border-top: 1px solid #00FFB2;
        border-bottom: 1px solid #00FFB2;
        transform: matrix(0.99, 0, -0.12, 1, 0, 0);
        box-shadow: 2px 4px 11px #00ffb3b0;
    }

    .completed{
        /* background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 102.82%); */
        /* border: 1px solid #00FFB2; */
        transition: 1.4s;
        animation: 1s ease-in  alternate;
        animation-name: completed;
        animation-fill-mode: forwards;
    }
    @keyframes completed{
        0%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 0.82%);
        }
        10%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 10.82%);
        }
        20%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 20.82%);
        }
        30%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 30.82%);
        }
        40%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 40.82%);
        }
        50%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 50.82%);
        }
        60%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 60.82%);
        }
        70%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 70.82%);
        }
        80%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 80.82%);
        }
        90%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 90.82%);
        }
        100%{
            background: linear-gradient(352deg,#00FFB2 -4.08%,rgba(217,217,217,0) 102.82%);
        }
    }
`