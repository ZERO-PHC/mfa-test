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
  import * as style from './PopoverStyles.module.css'

  const MagicSchoolPopover = () => {
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    return (
        <PopoverStyle>
            <Popover>
                <PopoverTrigger>
                <Button>?</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent className={style.content}>
                    <PopoverArrow className={style.arrow}/>
                    <PopoverHeader className={style.header}>Explore the dapp and click this icon after that</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                        <Button colorScheme='blue' onClick={onOpen}>Start</Button>
                    </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
            <MagicSchoolLearnModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} onToggle={onToggle}/>
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