import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useMagicSchoolSteps } from "../../../contexts/MagicSchoolStepsContext";
import { motion, useAnimationControls, useMotionValue } from "framer-motion"
import { Tooltip } from '@chakra-ui/react'

const InputComp = ({ line, step, index, }) => {
    const { updateStep, CurrentLine, NextChar } = useAuth();
    const controls = useAnimationControls()

    const checkCompleted = () => {
        const isCompleted = CurrentLine > index
        return isCompleted
    }

    const resolveFullColor = () => {
        if ((line.percent == 1 && line.match) || checkCompleted()) {
            return 'full'
        } else {
            return ''
        }
    }

    useEffect(() => {
        if (CurrentLine ===  index  + 1) {
            initFunction()
        }

    }, [CurrentLine])

    const initFunction = async () => {
        await controls.start({ width: '100%', transition: { duration: 0.5 } })
        return await controls.start({ width: '0%', transition: { duration: 0.3 }, right: 0 })
    }


    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }

    return (
        <>
            <div
                style={{ position: 'relative' }}
                className={`${line.match ? 'input' : 'input transparent'} 
                                ${!line.match && line.percent > 0 ? 'error' : ''}
                                ${step.codeSnippet == '' ? 'none' : ''} 
        `}
            >
                {<motion.div
                    style={{ height: '2rem', background: 'lightgreen', width: '0rem', position: 'absolute', top: '0', opacity: 0.5 }}
                    animate={controls}
                />
                }
                <p className="placeholderParag">{line.code}</p>
                <Tooltip  color='lightgreen' label={NextChar} placement='top' isOpen={CurrentLine === index}>
                    <input
                        style={{padding:"0px 20px", margin:0, border: 'none', outline: 'none', background: 'transparent', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                        // ref={el => inputRef = el} 
                        value={(line.percent == 1 && line.match) || checkCompleted() ? line.code : line.input}
                        placeholder={step.codeSnippet.completed ? line.code : ""}
                        type="text"
                        className={`inputText`}
                        onChange={e => updateStep(e, line, index)} />
                </Tooltip>

            </div>
            {CurrentLine === index && <motion.div
                style={{ height: '0.2rem', background: 'lightgreen', width: '2rem' }}
                animate={{
                    width: line.percent * 100 + '%',
                    transition: { duration: 0.8 }
                }}
            />}
        </>

    )
}

export default InputComp;