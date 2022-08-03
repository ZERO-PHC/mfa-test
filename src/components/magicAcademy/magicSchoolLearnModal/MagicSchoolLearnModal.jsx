import { useEffect, useState } from 'react';

import { Fade, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button } from '@chakra-ui/react'

import styled from "styled-components"
import * as style from "./MagicSchoolLearnModal.module.css"
import MagicSchoolInputWrapper from '../magicSchoolInput/MagicSchoolInputWrapper';
import TeachBox from "../../../../public/teachBox.svg"
import TimeLine from '../../timeLine/TimeLine';
import { Icon } from '@iconify/react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useRouter } from "next/router";
import CodeStructDrawer from '../codeStructDrawer/CodeStructDrawer';

const MagicSchoolLearnModal = ({ isOpen, onClose, name, steps, setSteps, logIn }) => {
    const [n, setN] = useState(0)
    const [professorText, setProfessorText] = useState([])
    const [structDrawerOpen, setStructDrawerOpen] = useState(false)

    const router = useRouter();

    const oneMoreStep = () => {
        setN(n +1)
    }
     const oneLessStep = () => {
        if(n > 0){
            setN(n -1)
        }
    }

    useEffect(() => {
        if(steps[n].codeSnippet[0].professorText != undefined){
            setProfessorText(steps[n].codeSnippet[0].professorText)
        }
    }, [n])

    const onComplete = () => {
        localStorage.setItem(name, JSON.stringify(steps))
        onClose()
        if(name.includes("Cadence")){
            // window.location.reload()
            router.push("/samplers")
        }
        if(name.includes("Login")){
            logIn()
        }
    }

    return (
        <Wrapper>
           <Fade in={isOpen}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                        <ModalContent className={style.modal}>
                            <ModalHeader className={style.header}>
                                {steps[n].title}
                            </ModalHeader>
                            <ModalCloseButton className={style.closeBtn}/>
                            <ModalBody className={style.body}>
                                {
                                !steps[n].codeSnippet[0].code == "" ?
                                (
                                    <div className={style.codebox}>
                                    <div className={style.codeboxHeader}>
                                        {steps[n].subtitle && <li>{steps[n].subtitle}</li>}
                                    </div>
                                    <div className={style.learnbox}>
                                        {steps[n].subtitle2 ? 
                                        <p>{steps[n].subtitle2}</p> : 
                                        <p>Write down the code for the internalization of the lesson and then you  can copy it to your clipboard.</p>
                                        }
                                        <MagicSchoolInputWrapper step={n} steps={steps} setSteps={setSteps} setProfessorText={setProfessorText} name={name}/>
                                    </div>
                                    <div className={style.footerCodeBox}>
                                        {steps[n].completed &&
                                        <div className={style.footerCodeBoxDiv}>
                                            <div className={style.footerCodeBoxTexts}> 
                                                {steps[n].footer && <li>{steps[n].footer}</li>}
                                            </div>
                                            <div className={style.footerBtns}>
                                                <CopyToClipboard text={steps[n].allCode}>
                                                    <button> Copy <Icon icon="ci:copy" height={"2em"}/> </button>
                                                </CopyToClipboard>
                                                <button onClick={() => setStructDrawerOpen(true)}>
                                                    Check Structure <Icon icon="clarity:tree-view-line" height={"2em"}/>
                                                </button>
                                                <CodeStructDrawer open={structDrawerOpen} setOpen={setStructDrawerOpen} step={steps[n]}/>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                                )
                                :
                                <div className={style.learnboxIntro}>
                                   {steps[n].subtitle && <li>{steps[n].subtitle}</li>}
                                   {steps[n].subtitle2 && <li>{steps[n].subtitle2}</li>}
                                    <div className={style.footerCodeBox}>
                                        {(steps[n].allCode || steps[n].structureLink) &&
                                        <div className={style.footerCodeBoxDiv}>
                                            <div className={style.footerCodeBoxTexts}> 
                                                {steps[n].footer && <li>{steps[n].footer}</li>}
                                            </div>
                                            <div className={style.footerBtns}>
                                                {steps[n].allCode &&
                                                <CopyToClipboard text={steps[n].allCode}>
                                                    <button> Copy <Icon icon="ci:copy" height={"2em"}/> </button>
                                                </CopyToClipboard>
                                                }
                                                {steps[n].structureLink && 
                                                <button onClick={() => setStructDrawerOpen(true)}>
                                                    Check Structure <Icon icon="clarity:tree-view-line" height={"2em"}/>
                                                </button>}
                                                <CodeStructDrawer open={structDrawerOpen} setOpen={setStructDrawerOpen} step={steps[n]}/>
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            }
                            </ModalBody>
                            <ModalFooter className={style.footer}>
                                    <div className={style.professorText}>
                                        <TeachBox/>
                                        <p> 
                                            {professorText.title}
                                            {
                                                (steps[n].codeSnippet[0].professorText != undefined && professorText.title != undefined) &&
                                                <ul>
                                                    {
                                                        steps[n].codeSnippet[0].professorText.link != undefined && 
                                                        steps[n].codeSnippet[0].professorText.link.map((link, index) => {
                                                            return (
                                                            <a href={link.href} key={index} target={'_blank'} rel={'noreferrer'}>{link.text}</a>
                                                            )    
                                                        })
                                                    }
                                                </ul>
                                            }
                                        </p>
                                    </div>
                                <Footer>
                                    <img src="/magicSchoolModal/ProfComponent.png" alt="" width={250} />
                                    <TimeLine timeLineLength={ Object.keys(steps)} steps={steps} n={n} />
                                    <div className={style.buttons}>
                                        <Button mr={3} onClick={oneLessStep} disabled={n == 0}>
                                            PREV
                                        </Button>
                                        {!steps[n].lastStep ?
                                        <Button onClick={oneMoreStep} disabled={!steps[n].completed}>
                                            NEXT 
                                        </Button>
                                        : 
                                        <Button onClick={() => onComplete()}>
                                            COMPLETE
                                        </Button>
                                        
                                        }
                                    </div>
                                </Footer>
                            </ModalFooter>
                        </ModalContent>
                </Modal>
            </Fade>        
        </Wrapper>
    )
}

export default MagicSchoolLearnModal

const Wrapper = styled.section`
    width: 500px;
`
const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const TimeLineWrapper = styled.div`
    display: flex;
`