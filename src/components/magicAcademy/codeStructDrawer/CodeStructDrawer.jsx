import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import * as styles from "./codeStruct.module.css"

const CodeStructDrawer = ({open, setOpen, step}) => {
  
    return (
      <>
        <Drawer
          isOpen={open}
          placement='right'
          onClose={() => setOpen()}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader
            className={styles.header}
            >
                {step.title}
            </DrawerHeader>
  
            <DrawerBody className={styles.body}> 
                {step.subtitle && <li>{step.subtitle}</li>}
                {step.subtitle2 && <li>{step.subtitle2}</li>}
                {step.subtitle3 && <li>{step.subtitle3}</li>}
                {step.structureLink &&
                    <div className={styles.structure}>
                        <p>Structure:</p>
                        <img 
                        src={step.structureLink ? step.structureLink : ""}
                        />
                    </div>
                }
            </DrawerBody>
  
            <DrawerFooter className={styles.footer}>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default CodeStructDrawer