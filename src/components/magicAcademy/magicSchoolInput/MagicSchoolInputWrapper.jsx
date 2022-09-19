import { useAuth } from '../../../contexts/AuthContext';
import { useMagicSchoolSteps } from '../../../contexts/MagicSchoolStepsContext';
import InputComp from './InputComp';
const { default: styled } = require("styled-components")


const MagicSchoolInputWrapper = ({name}) => {

    const { Step } = useAuth()

    // upodate only the local state with only getting form fb the data of the actual step the data that we need
    // and base on that structure 

    return (
        <Wrapper>
            <div className={"inputs"}>
                <form>
                    {Step && Step.codeSnippet.map((line, index) => {
                        return (
                            <InputComp key={index} line={line} step={Step} index={index}  />
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