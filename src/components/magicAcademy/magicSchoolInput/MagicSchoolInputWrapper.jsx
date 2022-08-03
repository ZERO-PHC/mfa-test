import InputComp from './InputComp';
const { default: styled } = require("styled-components")


const MagicSchoolInputWrapper = ({step, steps, setSteps, setProfessorText, name}) => {

    let inputRef = ""

    const compareChar = (event, line) => {
        let userValue = event.target.value;
        const splitedUserValue = userValue.split("")
        
        let length1 = splitedUserValue.length
        const splitedLine = line.code.split("");

        setSteps(prevState => {
            let isTrue = false;
            const codeLines = prevState[step].codeSnippet;

            const newState = codeLines.map((obj) => {
                //IT'S THE SAME LINE
                if(obj.code == line.code){
                    if(obj.professorText != undefined){
                        setProfessorText(obj.professorText)
                    }
                    let passed = true;
                    for(let i = 0; i < splitedUserValue.length; i++){
                        if(splitedUserValue[i] != splitedLine[i]){
                            passed = false;
                            isTrue = false;
                        }
                    }
                    if((splitedUserValue[length1 -1] === splitedLine[length1 -1]) && passed){
                        return {...obj, match: true, percent: (length1 / splitedLine.length)}
                    } else {
                        isTrue = false;
                        return {...obj, match: false, percent: (length1 / splitedLine.length)}
                    }
                 }
                //IT'S NOT THE SAME LINE
                return {...obj}
            });
            
            newState.map(code => {
                if(code.percent == 1 && code.match){
                    isTrue = true;
                } else {
                    isTrue = false;
                }
            })
            localStorage.setItem(name, JSON.stringify(steps))
            return {...prevState, [step]: {...prevState[step], codeSnippet: newState, completed: isTrue}}
        })
    }

    return (
        <Wrapper>
            <div className={"inputs"}>
                <form>
                    {steps[step].codeSnippet.map((line, index) => {
                        return (
                            <InputComp line={line} index={index} compareChar={compareChar} key={index} steps={steps} step={step} inputRef={inputRef}/>
                        )
                    })}
                </form>
            </div>
        </Wrapper>
    )
}

export default MagicSchoolInputWrapper

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
        transition: 1s;
    }

    .full{
        background: linear-gradient(270deg, #ecfd08 -4.08%, rgba(217, 217, 217, 0) 83.82%) !important;
        transition: 1s;
    }

    .error{
        color: #ff5858 !important;
        transition: 1s;
    }

    .allChecked{
        background: linear-gradient(270deg, #6100FF -4.08%, rgba(217, 217, 217, 0) 83.82%) !important;
        transition: 1s;
    }

    .none{
        display: none;
    }
`