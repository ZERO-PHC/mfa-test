import { useEffect, useState } from "react";
import {
  Fade,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import IntroAndFinishView from "../introAndFinishView/IntroAndFinishView";
import StepWithCodeView from "../stepWithCodeView/StepWithCodeView";
import StepNoCodeView from "../stepNoCodeView/StepNoCodeView";
import MagicModalFooter from "../magicModalFooter/MagicModalFooter";
import ProfessorTextDialogBox from "../professorTextDialogBox/ProfessorTextDialogBox";
import MagicSchoolFormWrapper from "../magicSchoolForm/MagicSchoolFormWrapper";
import MagicAlertBadMagic from "../magicAlertBadMagic/MagicAlertBadMagic";

import styled from "styled-components";
import * as style from "./MagicSchoolLearnModal.module.css";
import { useRouter } from "next/router";

import CodeStructDrawer from '../codeStructDrawer/CodeStructDrawer';
import { useMagicSchoolSteps } from '../../../contexts/MagicSchoolStepsContext';
import { useAuth } from "../../../contexts/AuthContext";


const MagicSchoolLearnModal = ({
  isOpen,
  lesson,
  setOpenModal,
  onClose,
  name,
  step,
  steps,
  setSteps,
}) => {
  // const [n, setN] = useState(0);
  const [professorText, setProfessorText] = useState([]);
  const [structDrawerOpen, setStructDrawerOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertTxt, setAlertTxt] = useState("");
  const [addedPrivateKey, setAddedPrivateKey] = useState(false);
  const {   } = useMagicSchoolSteps()
  const { handleLessonCompletion, completeStep } = useAuth();
  // deconstruct FirestoreUser from the useAuth hook
  const { CurrentStep, CurrentLesson } = useAuth();


  const oneMoreStep = () => {
    if (lesson[CurrentStep].alert) {
      setAlertOpen(true)
      setAlertTxt(lesson[CurrentStep].alertText)
    }
    // setN(n + 1);
    completeStep(CurrentStep + 1)
  };

  const oneLessStep = () => {
    // if (n > 0) {
    //   setN(n - 1);
    // }
  };

  useEffect(() => {
    console.log("CurrentStep", CurrentStep)
    console.log('step', step)
  }, [CurrentStep]);

  const onComplete = () => {
    // localStorage.setItem(name, JSON.stringify(steps))
    handleLessonCompletion()
    setOpenModal(false)
  }

  if(!step ) {
    return <div>loading...</div>  
  }

  return (
    <Wrapper>
      <MagicAlertBadMagic text={alertTxt} alertOpen={alertOpen} setAlertOpen={setAlertOpen} addedPrivateKey={addedPrivateKey} />
      <Fade in={isOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className={style.modal}>
            <ModalHeader className={style.header}>{lesson.title}</ModalHeader>
            <ModalCloseButton className={style.closeBtn} onClick={()=> setOpenModal(false)} />
            <ModalBody className={style.body}>
              {
                (CurrentStep == 0 || CurrentStep == lesson.length - 1)
                && (
                  <IntroAndFinishView
                    professorName={step.professorName}
                    introduction={step.introduction}
                    subtitle={step.subtitle}
                    subtitle2={step.subtitle2}
                    rewards1={step.rewards1}
                    rewards2={step.rewards2}
                    rewards3={step.rewards3}
                    footer={step.footer}
                    buttons={step.buttons}
                  />
                )
              }
              {step.codeSnippet[0].code && (
                <StepWithCodeView
                  step={step}
                  lesson={lesson}
                  n={CurrentStep}
                  setSteps={setSteps}
                  setProfessorText={setProfessorText}
                  name={name}
                  structDrawerOpen={structDrawerOpen}
                  setStructDrawerOpen={setStructDrawerOpen}
                />
              )}
              {!(CurrentStep== 0 || CurrentStep== lesson.length - 1) &&
                !step.codeSnippet[0].code &&
                !step.form &&
                (
                  <StepNoCodeView
                    steps={lesson}
                    n={CurrentStep}
                    structDrawerOpen={structDrawerOpen}
                    setStructDrawerOpen={setStructDrawerOpen}
                  />
                )}
              {
                step.form && (
                  <MagicSchoolFormWrapper
                    structDrawerOpen={structDrawerOpen}
                    setStructDrawerOpen={setStructDrawerOpen}
                    setAddedPrivateKey={setAddedPrivateKey}
                    step={step}
                  />
                )}
            </ModalBody>
            <ModalFooter className={style.footer}>
              {
                (step.codeSnippet[0].code || step.form)
                &&
                <ProfessorTextDialogBox
                  professorText={professorText}
                  step={step}
                />
              }
              <MagicModalFooter
                step={step}
                // n={n}
                steps={lesson}
                oneMoreStep={oneMoreStep}
                oneLessStep={oneLessStep}
                onComplete={onComplete}
                professorAvatar={lesson[0].professorAvatar}
              />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Fade>
    </Wrapper>
  );
};

export default MagicSchoolLearnModal;

const Wrapper = styled.section`
  width: 500px;
`;
