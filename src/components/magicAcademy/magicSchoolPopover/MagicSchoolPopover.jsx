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

import styled from 'styled-components'
import MagicSchoolLearnModal from '../magicSchoolLearnModal/MagicSchoolLearnModal'
import AlertSchoolAlertComponent from '../magicSchoolAlertComp/MagicSchoolAlertComponent'
import { useAuth } from '../../../contexts/AuthContext'
import * as style from './PopoverStyles.module.css'

  const MagicSchoolPopover = ({magicSchoolData, name, setMagicSchoolData, projectToCheck}) => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const [alertOpen, setAlertOpen] = useState(false)

    const { logIn, logOut } = useAuth();
    
    const checkStorage = () => {
        if(localStorage.getItem(name)){
            setMagicSchoolData(JSON.parse(localStorage.getItem(name)))
        }
    }

    const checkProject = () => {
        if(projectToCheck){
            if (typeof window !== 'undefined') {
                if(localStorage.getItem(projectToCheck)){
                    let project = Object.values(JSON.parse(localStorage.getItem(projectToCheck)))
                    if(project[project.length - 2].completed){
                        return true
                    } else {
                        return false
                    }}}
        }else { return true }
    }


    return (
        <PopoverStyle>
            <Popover>
                <PopoverTrigger>
                <Button onClick={checkStorage}>?</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent className={style.content}>
                        <PopoverArrow className={style.arrow}/>
                        <PopoverHeader className={style.header}>Explore the dapp and click this icon after that</PopoverHeader>
                        <PopoverCloseButton className={style.closeBtn}/>
                        <PopoverBody className={style.body}>
                            <Button 
                            colorScheme='blue' 
                            onClick={checkProject() ? onOpen : () =>  setAlertOpen(true)
                            }>
                                START
                            </Button>
                        </PopoverBody>
                        <AlertSchoolAlertComponent alertOpen={alertOpen} setAlertOpen={setAlertOpen} logOutFn={logOut} projectToCheck={projectToCheck} />
                    </PopoverContent>
                </Portal>
            </Popover>
            <MagicSchoolLearnModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} onToggle={onToggle} name={name} steps={magicSchoolData} setSteps={setMagicSchoolData} logIn={logIn}/>
        </PopoverStyle>
    )
  }

export default MagicSchoolPopover 

const PopoverStyle = styled.div`
    
    div{
        font-family: "Monument" !important;
    }
    button{
        background: rgb(170,170,170);
        background: radial-gradient(circle, rgba(170,170,170,1) 2%, rgba(102,102,102,1) 100%);
        color: #00FFB2;
        border-radius: 50%;
        margin-right: 5px;
    }
`