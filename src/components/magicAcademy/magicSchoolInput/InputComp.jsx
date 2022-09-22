import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useMagicSchoolSteps } from "../../../contexts/MagicSchoolStepsContext";
import { motion, useAnimationControls, useMotionValue } from "framer-motion"
import { Tooltip } from '@chakra-ui/react'

const InputComp = ({ isCompleted, line, step, index, }) => {
    const { updateStep, CurrentLine, NextChar } = useAuth();
    const controls = useAnimationControls()

    const checkLineCompletion = () => {
        const isCompleted = CurrentLine > index
        return isCompleted
    }

    const resolveFullColor = () => {
        if ((line.percent == 1 && line.match) || checkLineCompletion()) {
            return 'full'
        } else {
            return ''
        }
    }

    useEffect(() => {
        if (CurrentLine === index + 1) {
            initFunction()
        }

    }, [CurrentLine])

    const initFunction = async () => {
        await controls.start({ width: '100%', transition: { duration: 0.5 } })
        return await controls.start({ width: '0%', transition: { duration: 0.3 }, right: 0 })
    }

    const resolveValue = () => {
        if (!isCompleted) {
            return (line.percent == 1 && line.match) || checkLineCompletion() ? line.code : line.input
        } else {
            return line.code
        }
    }

    return (
        <>
            <div
                style={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}
                className={`${line.match ? 'input' : 'input transparent'} 
                                ${!line.match && line.percent > 0 ? 'error' : ''}
                                ${step.codeSnippet == '' ? 'none' : ''} 
        `}
            >
                <section>
                    {<motion.div
                        style={{ height: '2rem', background: 'lightgreen', width: '0rem', position: 'absolute', top: '0', opacity: 0.5 }}
                        animate={controls}
                    />
                    }
                    <p className="placeholderParag">{line.code}</p>
                    <Tooltip color='lightgreen' label={NextChar} placement='top' isOpen={CurrentLine === index}>
                        <input
                            // ref={el => inputRef = el} 
                            style={{ padding: "0px 20px", margin: 0, border: 'none', outline: 'none', background: 'transparent', width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
                            value={resolveValue()}
                            placeholder={step.codeSnippet.completed ? line.code : ""}
                            type="text"
                            className={`inputText`}
                            onChange={e => updateStep(e, line, index)} />
                    </Tooltip>
                </section>

                {index < CurrentLine && <motion.div>
                    + 10 XP
                </motion.div>}

            </div>
            {CurrentLine === index && <motion.div
                style={{ height: '0.1rem', background: '#00FFB2', width: '2rem' }}
                animate={{
                    width: line.percent * 100 + '%',
                    transition: { duration: 0.8 }
                }}
            />}
        </>

    )
}

export default InputComp;