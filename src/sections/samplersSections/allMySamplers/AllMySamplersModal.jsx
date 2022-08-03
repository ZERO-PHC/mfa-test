import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import MySamplers from '../MySamplers'

import * as styles from './AllMySamplersModal.module.css'

function VerticallyCenter({samplers}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <div className={styles.wrapper}>
        <Button onClick={onOpen}>SEE ALL SAMPLERS</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent className={styles.wrapperContent}>
            <ModalHeader>ALL MY SAMPLERS</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <MySamplers samplers={samplers} />
            </ModalBody>
            <ModalFooter className={styles.wrapperFooter}>
              <Button onClick={onClose}>CLOSE</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }

  export default VerticallyCenter