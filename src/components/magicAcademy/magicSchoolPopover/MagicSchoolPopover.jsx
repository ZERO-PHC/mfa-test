import { useState } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    useDisclosure
} from '@chakra-ui/react'
import Image from "next/image";

import styled, { keyframes } from 'styled-components'
import MagicSchoolLearnModal from '../magicSchoolLearnModal/MagicSchoolLearnModal'
import AlertSchoolAlertComponent from '../magicSchoolAlertComp/MagicSchoolAlertComponent'
import { useAuth } from '../../../contexts/AuthContext'
import * as style from './PopoverStyles.module.css'

const MagicSchoolPopover = ({ magicSchoolData, name, setMagicSchoolData, projectToCheck, autoOpen, setAutoOpen }) => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const [alertOpen, setAlertOpen] = useState(false)
    const { logIn, logOut } = useAuth();


    const checkStorage = () => {
        if (localStorage.getItem(name)) {
            setMagicSchoolData(JSON.parse(localStorage.getItem(name)))
        }
    }

    const checkProject = () => {
        if (projectToCheck) {
            if (typeof window !== 'undefined') {
                if (localStorage.getItem(projectToCheck)) {
                    let project = Object.values(JSON.parse(localStorage.getItem(projectToCheck)))
                    if (project[project.length - 2].completed) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        } else { return true }
    }


    return (
        <PopoverStyle>
          
            <Popover isOpen={autoOpen}>
                <PopoverTrigger  >

                    <main className='avatar-container' onClick={checkStorage}>
                        <OrbsWrapper>
                            <div className='orb' > </div >
                            <div className='orb1' ></div >
                            <div className='orb2' ></div >
                            <div className='orb3' ></div >
                        </OrbsWrapper>
                        <img src="/assets/frAvatar.png" style={{ zIndex: 3 }} alt="avatar" />
                    </main>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent className={style.content}>
                        <PopoverArrow className={style.arrow} />
                        {/* <PopoverHeader className={style.header}>Explore this sample Dapp and click start after that</PopoverHeader> */}
                        <PopoverHeader className={style.header}>Explore this sample Dapp and click  Start Game after that</PopoverHeader>
                        <PopoverCloseButton className={style.closeBtn} />
                        <PopoverBody className={style.body}>
                            <Button
                                colorScheme='blue'
                                onClick={() => setAutoOpen(false)}
                                >
                                EXPLORE
                            </Button>
                            <Button
                                colorScheme='blue'
                                onClick={checkProject() ? onOpen : () => setAlertOpen(true)
                                }>
                                START
                            </Button>
                        </PopoverBody>
                        <AlertSchoolAlertComponent alertOpen={alertOpen} setAlertOpen={setAlertOpen} logOutFn={logOut} projectToCheck={projectToCheck} />
                    </PopoverContent>
                </Portal>
            </Popover>
            <MagicSchoolLearnModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} onToggle={onToggle} name={name} steps={magicSchoolData} setSteps={setMagicSchoolData} logIn={logIn} />
        </PopoverStyle>
    )
}

export default MagicSchoolPopover

const PopoverStyle = styled.div`
height: 3rem;
position:relative;
margin: 0rem 1rem;
    div{
        font-family: "Monument" !important;
    }
    button{
        // color: #00FFB2;
        border-radius: 50%;
        height: 1rem;
        width: 1rem;    
    }

    .avatar-container{
        position:relative;
        height:3rem;
        width:3rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

// create the keyframes of a rotation animation for the orbs wrapper
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const OrbsWrapper = styled.div`
    position: absolute;
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50px;
    background-color: rgba(0,0,0,0.3);
    animation: ${rotate} 3s linear infinite;


    .orb{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        top:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    .orb1{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        top:0;
        right:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    .orb2{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        bottom:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    .orb3{
        position: absolute;
        height:0.6rem;
        width: 0.6rem;
        right:0;
        bottom:0;
        background-color: #00FFB2;
        border-radius: 50px;}
    `

