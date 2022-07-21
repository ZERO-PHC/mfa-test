import { useState } from 'react';
import { Formik } from 'formik';

import { Fade, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button, Flex } from '@chakra-ui/react'

import styled from "styled-components"
import * as style from "./MagicSchoolLearnModal.module.css"
  

const MagicSchoolLearnModal = ({ isOpen, onOpen, onClose }) => {
    let [step, nextStep] = useState(0)
    let [next, setNext] = useState(false)

    const oneMoreStep = () => {
        nextStep(step +1)
    }
     const oneLessStep = () => {
            nextStep(step -1)
    }

    const step1text = `import * as fcl from "@onflow/fcl";
    import { createContext, useContext, useEffect, useState } from "react";
    
    import "../flow/config";
    
    export const AuthContext = createContext({});
    
    export const useAuth = () => useContext(AuthContext);
    
    export default function AuthProvider({ children }) {
      const [user, setUser] = useState({ loggedIn: false, addr: undefined });
    
      useEffect(() => fcl.currentUser.subscribe(setUser), []);
    
      const logOut = async () => {
        await fcl.unauthenticate();
        setUser({ addr: undefined, loggedIn: false });
      };
    
      const logIn = async () => {
        const res = await fcl.authenticate();
      };
    
      const signUp = () => {
        fcl.signUp();
      };
    
    const value = {
        logOut,
        logIn,
        signUp,
        user,
      };
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    }`

    const getInputValue = (event)=>{
        const userValue = event.target.value;
        userValue == step1text ? setNext(true) : setNext(false)
    };
    

    return (
        <Wrapper>
           <Fade in={isOpen}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className={style.modal}>
                    <ModalHeader className={style.header}>
                        STEP {step} - CREATE APP
                    </ModalHeader>
                    <ModalCloseButton className={style.closeBtn}/>
                    <ModalBody>
                        <div className={style.codebox}>
                            <div className={style.codeboxHeader}>
                                <li>Header 1</li>
                                <li>Header 2</li>
                                <li>Header 3</li>
                            </div>
                            <div className={style.learnbox}>
                                <p>Write down the code for the internalization of the lesson and then you  can copy it</p>
                                
                                    <textarea id="text" cols="90" rows="20" 
                                    className={style.textarea}
                                    name="text"
                                    onChange={getInputValue}
                                    />

                                    <textarea id="text" cols="90" rows="20" 
                                    className={style.textarea2}
                                    name="text"
                                    onChange={getInputValue}
                                    placeholder={step1text}
                                    />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className={style.footer}>
                        <img src="/magicSchoolModal/ProfComponent.png" alt="" width={250} />
                        <div>timeline</div>
                        <div className={style.buttons}>
                            <Button mr={3} onClick={oneLessStep} disabled={step == 0}>
                                PREV
                            </Button>
                            <Button onClick={oneMoreStep} disabled={!next}>
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