import { useEffect } from "react";

const InputComp = ({compareChar, line, steps, step, inputRef}) => {
    useEffect(() => {
        inputRef.value = ""
    }
    , [step])

    return (
        <div 
        // key={index} 
        className={`${ line.match ? 'input' : 'input transparent'} 
        ${line.percent == 1 && line.match ? 'full' : ''} 
        ${!line.match && line.percent > 0 ? 'error' : ''}
        ${steps[step].completed ? 'allChecked' : ''}
        ${steps[step].codeSnippet == '' ? 'none' : ''} 
        `} 
        style={{background: `linear-gradient(270deg, rgba(0, 255, 178, ${line.percent}) -4.08%, rgba(217, 217, 217, 0) ${70}%)`}}
        >
            <p className="placeholderParag">{line.code}</p>
        <input 
        ref={el => inputRef = el} 
        placeholder={steps[step].codeSnippet.completed ? line.code : ""} 
        type="text"
        className={`inputText`} 
        onChange={ e => compareChar(e, line)}/>
    </div>
    )
}

export default InputComp;