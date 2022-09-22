import { useState, useEffect } from 'react'
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
import AvatarComponent from '../AvatarComponent';
import HorizontalSpacer from '../../HorizontalSpacer';

const MagicSchoolPopover = ({ lesson, name, projectToCheck, key }) => {
    const [OpenModal, setOpenModal] = useState(false);
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure({ isOpen: false })
    const [PopOpen, setPopOpen] = useState(false)
    const [alertOpen, setAlertOpen] = useState(false)
    const { logIn, logOut, CurrentStep, CurrentLesson } = useAuth();

    useEffect(() => {
    }, [])

    const handleStart = () => {
        onOpen()
        setOpenModal(true)
    }


    return (
        <PopoverStyle onClick={() => setPopOpen(!PopOpen)} key={key}>
            <Popover isOpen={PopOpen}>
                {CurrentLesson && <>
                    <AvatarComponent path='/assets/frAvatar.png' active={CurrentLesson === 2 || CurrentLesson === 3} />
                    <HorizontalSpacer width={'3rem'} />
                    <AvatarComponent path='/assets/ZerøAvatar.png' active={CurrentLesson === 1 || CurrentLesson === 4} />
                </>}

                <Portal>
                    <PopoverContent className={style.content}>
                        <PopoverArrow className={style.arrow} />
                        {/* <PopoverHeader className={style.header}>Explore this sample Dapp and click start after that</PopoverHeader> */}
                        <PopoverHeader className={style.header}>Explore this sample Dapp and click  Start Game after that</PopoverHeader>
                        <PopoverCloseButton className={style.closeBtn} />
                        <PopoverBody className={style.body}>
                            <Button
                                colorScheme='blue'
                                onClick={() => setPopOpen(false)}
                            >
                                EXPLORE
                            </Button>
                            <Button
                                colorScheme='blue'

                                // onClick={checkProject() ? onOpen : () => setAlertOpen(true)
                                onClick={handleStart}>
                                START
                            </Button>
                        </PopoverBody>
                        <AlertSchoolAlertComponent alertOpen={alertOpen} setAlertOpen={setAlertOpen} logOutFn={logOut} projectToCheck={projectToCheck} />
                    </PopoverContent>
                </Portal>
            </Popover>
            return (
            {(lesson && CurrentStep.toString()) && <MagicSchoolLearnModal
                step={lesson[CurrentStep]}
                lesson={lesson}
                isOpen={OpenModal}
                onClose={onClose}
                setOpenModal={setOpenModal}
                name={name}
            />}
            )
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
`


