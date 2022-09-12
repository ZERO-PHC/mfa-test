import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button
  } from '@chakra-ui/react'
import styled from "styled-components"
import styles from "./magicAlertBadMagic.module.css"

const MagicAlertBadMagic = ({alertOpen, setAlertOpen, text, addedPrivateKey}) => {
    const cancelRef = React.useRef()
    return (
        <Wrapper>
            <AlertDialog
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={()=> setAlertOpen(false)}
              isOpen={alertOpen}
              isCentered
            >
              <AlertDialogOverlay />
      
              <AlertDialogContent className={styles.content}>
                <AlertDialogHeader className={styles.header}>
                    <h2>ALERT!</h2>
                </AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody className={styles.body}>
                    <div className={"dialogBox"}>
                        <p>{text}</p>
                        {addedPrivateKey && <p className="privateKeyMsg">-300 XP</p>}
                    </div> 
                </AlertDialogBody>
                <AlertDialogFooter className={styles.footer}>
                    <img src="/magicSchoolModal/profFrlabs.png" alt="Professor" />
                  <Button className={styles.button} onClick={()=> setAlertOpen(false)} ml={3}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </Wrapper>
    )
}

export default MagicAlertBadMagic

const Wrapper = styled.div`
.privateKeyMsg{
    margin: auto;
    text-align: center;
    padding: 10px;
    position: relative;
    top: 40px;
    padding: 10px;
    background: white;
    width: 200px;
    color: #ff0000;
    font-size: 1rem;
    font-family: 'MonumentBold';
}
`