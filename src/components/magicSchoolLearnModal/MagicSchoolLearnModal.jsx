import { useState } from 'react';

import { Fade, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button } from '@chakra-ui/react'

import styled from "styled-components"
import * as style from "./MagicSchoolLearnModal.module.css"
import MagicSchoolInputComp from '../magicSchoolInput/MagicSchoolInputComp';

import { useMagicSchoolSteps } from '../../contexts/MagicSchoolStepsContext';
  

const MagicSchoolLearnModal = ({ isOpen, onOpen, onClose }) => {
    const { steps, setSteps } = useMagicSchoolSteps();
    const [n, setN] = useState(0)

    const oneMoreStep = () => {
        setN(n +1)
    }
     const oneLessStep = () => {
        if(n > 0){
            setN(n -1)
        }
    }

    // console.log("VALOR N", n)
    // console.log("STEPSSS",steps)

    return (
        <Wrapper>
           <Fade in={isOpen}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                        <ModalContent className={style.modal}>
                            <ModalHeader className={style.header}>
                                {steps[n].title} - LOGIN PAGE
                            </ModalHeader>
                            <ModalCloseButton className={style.closeBtn}/>
                            <ModalBody>
                                <div className={style.codebox}>
                                    <div className={style.codeboxHeader}>
                                        <li>{steps[n].subtitle}</li>
                                        <li>{steps[n].subtitle2}</li>
                                        <li>Header 3</li>
                                    </div>
                                    <div className={style.learnbox}>
                                        <p>Write down the code for the internalization of the lesson and then you  can copy it</p>
                                        <MagicSchoolInputComp step={n}/>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className={style.footer}>
                                <img src="/magicSchoolModal/ProfComponent.png" alt="" width={250} />
                                <div>timeline</div>
                                <div className={style.buttons}>
                                    <Button mr={3} onClick={oneLessStep} disabled={n == 0}>
                                        PREV
                                    </Button>
                                    <Button onClick={oneMoreStep} disabled={!steps[n].completed}>
                                        NEXT 
                                    </Button>
                                </div>
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