import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useMagicSchoolSteps } from "../../../contexts/MagicSchoolStepsContext";

const InputComp = ({line, step, index}) => {

    // const { dispatch } = useMagicSchoolSteps()
    // deconstruct updateLine from the useAuth hook
    const { updateStep } = useAuth();



    useEffect(() => {
        // console.log('comp line', line)
    }
    , [step, line])

    return (
        <div 
        className={`${ line.match ? 'input' : 'input transparent'} 
        ${line.percent == 1 && line.match ? 'full' : ''} 
        ${!line.match && line.percent > 0 ? 'error' : ''}
        ${step.completed ? 'allChecked' : ''}
        ${step.codeSnippet == '' ? 'none' : ''} 
        `} 
        style={{background: `linear-gradient(270deg, rgba(0, 255, 178, ${line.percent}) -4.08%, rgba(217, 217, 217, 0) ${70}%)`}}
        >
            <p className="placeholderParag">{line.code}</p>
        <input 
        // ref={el => inputRef = el} 
        value={line.input}
        placeholder={step.codeSnippet.completed ? line.code : ""} 
        type="text"
        className={`inputText`} 
        // onChange={ e => dispatch({ type: "UPDATE_LESSON", payload: {e, line} })}/>
        onChange={ e => updateStep(e, line, index)}/>

        </div>
    )
}

export default InputComp;