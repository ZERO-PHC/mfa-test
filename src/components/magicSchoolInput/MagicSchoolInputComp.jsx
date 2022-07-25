import { useEffect, useState } from 'react';
import { useMagicSchoolSteps } from '../../contexts/MagicSchoolStepsContext';

const { default: styled } = require("styled-components")


const MagicSchoolInputComp = ({step}) => {
    const { steps, setSteps, updateSteps } = useMagicSchoolSteps();

    console.log("STEPSSS",steps[step])

    const compareChar = (event, line) => {
        const userValue = event.target.value;
        const splitedUserValue = userValue.split("")
        
        let length1 = splitedUserValue.length
        
        const splitedLine = line.code.split("");
        console.log(splitedUserValue[length1 -1] + "---" + splitedLine[length1 -1])

        if(splitedUserValue[length1 -1] === splitedLine[length1 -1]){
            console.log("PASSOU AQUI")
            setSteps([...steps, 
                steps[step].codeSnippet.map(
                (newline) => 
                    newline.code == line.code ? 
                    {...newline, match: true, percent: (length1 / splitedLine.length) } : 
                    {...newline}
                
            )])
            console.log("STEPSSS3333",steps[step])
        } else {
            setSteps([...steps,
                steps[step].codeSnippet.map(
                (newline) => {
                    newline.code == line.code ? 
                    {...newline, match: false } : 
                    {...newline}
                }
            )])
        }
    }

    return (
        <Wrapper>
            <div className={"inputs"}>
                {steps[step].codeSnippet.map((line, index) => {
                    return (
                        <div 
                        key={index} 
                        className={`${ line.match ? 'input' : 'input transparent'} 
                        ${line.percent == 1 ? 'full' : ''} 
                        ${!line.match && line.percent > 0 ? 'error' : ''}
                        `} 
                        style={{background: `linear-gradient(270deg, rgba(0, 255, 178, ${line.percent}) -4.08%, rgba(217, 217, 217, 0) ${70}%)`}}
                        >
                            <p className="placeholderParag">{line.code}</p>
                        <input type="text" className="inputText" onChange={ e => compareChar(e, line)}/>
                    </div>
                    )
                })}
            </div>
        </Wrapper>
    )
}

export default MagicSchoolInputComp

const Wrapper = styled.div`
    .inputs{
        padding: 20px;
    }

    .input{
        padding: 0px 20px;
    }
    .transparent{
        background: transparent !important;
    }

    .inputText{
        width: 100%;
        background-color: transparent;
        z-index: 5;
        position: relative;
        top: -24px;
    }
    .inputText:focus{   
        border: none;
    }

    .inputPlaceholder{
        background-color: transparent;
        z-index: 2;
    }

    .placeholderParag{
        color: gray;
    }

    .test{
        background: linear-gradient(270deg, #00FFB2 -4.08%, rgba(217, 217, 217, 0) 83.82%);
    }

    .full{
        background: linear-gradient(270deg, #ecfd08 -4.08%, rgba(217, 217, 217, 0) 83.82%) !important;
    }

    .error{
        color: #ff5858 !important;
    }

    .allChecked{
        background: linear-gradient(270deg, #b602e8 -4.08%, rgba(217, 217, 217, 0) 83.82%);
    }
`