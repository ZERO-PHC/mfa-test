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
import { useRouter } from "next/router";
import * as styles from "./alertComponent.module.css"

const AlertSchoolAlertComponent = ({alertOpen, setAlertOpen, logOutFn, projectToCheck}) => {
        const cancelRef = React.useRef()
        const router = useRouter();
        const { pathname } = router

        const handleOkBtn = () => {
          if(projectToCheck.includes("Cadence")){
            router.push(`${pathname}/cadence`);
          }
          if(projectToCheck.includes("Login")){
            logOutFn();
            window.location.reload()
          }
        }
      
        return (
          <>
            <AlertDialog
              motionPreset='slideInBottom'
              leastDestructiveRef={cancelRef}
              onClose={()=> setAlertOpen(false)}
              isOpen={alertOpen}
              isCentered
            >
              <AlertDialogOverlay />
      
              <AlertDialogContent className={styles.content}>
                <AlertDialogHeader></AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                  It looks that you have not completed the previous school. Lets go there!
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button className={styles.button} onClick={() => handleOkBtn()} ml={3}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )
}

export default AlertSchoolAlertComponent