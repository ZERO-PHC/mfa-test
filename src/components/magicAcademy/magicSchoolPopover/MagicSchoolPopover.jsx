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
import AvatarComponent from '../AvatarComponent';

const MagicSchoolPopover = ({ magicSchoolData, name, setMagicSchoolData, projectToCheck, autoOpen, setAutoOpen }) => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure({ isOpen: false })
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
        <PopoverStyle onClick={() => setAutoOpen(!autoOpen)}>
            <Popover isOpen={autoOpen}>
                    <AvatarComponent checkStorage={checkStorage} />
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

   
`


