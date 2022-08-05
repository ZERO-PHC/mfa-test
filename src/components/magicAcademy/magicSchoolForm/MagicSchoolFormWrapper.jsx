import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import styled from "styled-components"

const MagicSchoolFormWrapper = ({step}) => {
    // const [formData, setFormData] = useState(form)
    const [allCode, setAllCode] = useState(step.allCode)
    const [address, setAddress] = useState([{}])
    
    const copyToClipBoard = (e, input) => {
        setAllCode(step.allCode.replace(`${input}`, e.target.value)) 
        console.log("ALLCODEEE",allCode)
    }
    
    // setAllCode(allCode.replace(`${input}`, e.target.value))
    return (
        <Wrapper>
            <>
            {step.form.map((line, index) => {
                // console.log("LINEEEE",line)
                return (
                    <div key={index} className="line">
                        { line.text && <p>{line.text}</p> }
                        { line.input && 
                        <input 
                        type="text" 
                        placeholder={line.input}
                        onChange={e => copyToClipBoard(e, line.input)} 
                        /> }
                    </div>
                )
            }
            )}
            <CopyToClipboard text={allCode}>
                <button onClick={() => copyText()}>COPY</button>
            </CopyToClipboard>
        </>
        </Wrapper>
    )
}

export default MagicSchoolFormWrapper

const Wrapper = styled.div`
    background-color: #141414;
    border: 1px solid #00FFB2;
    padding: 5rem;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    color: #00FFB2;

    .line{
        display: flex;
        gap: 10px;

        input{
            width: 400px;
            padding: 0px 10px;
            background-color: #141414;
            border: 1px solid #00FFB2;
            color: #00FFB2;
        }
    }
`