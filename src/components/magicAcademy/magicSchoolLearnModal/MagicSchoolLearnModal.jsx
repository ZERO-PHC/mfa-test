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
  Button,
} from "@chakra-ui/react";

import styled from "styled-components";
import * as style from "./MagicSchoolLearnModal.module.css";
import { useRouter } from "next/router";
import IntroAndFinishView from "../introAndFinishView/IntroAndFinishView";
import StepWithCodeView from "../stepWithCodeView/StepWithCodeView";
import StepNoCodeView from "../stepNoCodeView/StepNoCodeView";
import MagicModalFooter from "../magicModalFooter/MagicModalFooter";
import ProfessorTextDialogBox from "../professorTextDialogBox/ProfessorTextDialogBox";
import MagicSchoolFormWrapper from "../magicSchoolForm/MagicSchoolFormWrapper";
import MagicAlertBadMagic from "../magicAlertBadMagic/MagicAlertBadMagic";

const MagicSchoolLearnModal = ({
  isOpen,
  onClose,
  name,
  steps,
  setSteps,
  logIn,
}) => {
  const [n, setN] = useState(0);
  const [professorText, setProfessorText] = useState([]);
  const [structDrawerOpen, setStructDrawerOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertTxt, setAlertTxt] = useState("");

  const router = useRouter();

  const oneMoreStep = () => {
    if(steps[n].alert){
      setAlertOpen(true)
      setAlertTxt(steps[n].alertText)
    }
    setN(n + 1);
  };
  const oneLessStep = () => {
    if (n > 0) {
      setN(n - 1);
    }
  };

  useEffect(() => {
    if (steps[n].codeSnippet[0].professorText != undefined) {
      setProfessorText(steps[n].codeSnippet[0].professorText);
    }
  }, [n]);

  const onComplete = () => {
    onClose();
    if (name.includes("Cadence")) {
      router.push("/samplers");
    }
    if (name.includes("Login")) {
      logIn();
    }
  };

  return (
    <Wrapper>
      <MagicAlertBadMagic text={alertTxt} alertOpen={alertOpen} setAlertOpen={setAlertOpen}/>
      <Fade in={isOpen}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className={style.modal}>
            <ModalHeader className={style.header}>{steps[n].title}</ModalHeader>
            <ModalCloseButton className={style.closeBtn} />
            <ModalBody className={style.body}>
              {
                (n == 0 || n == steps.length - 1)
                && (
                  <IntroAndFinishView
                    professorName={steps[n].professorName}
                    introduction={steps[n].introduction}
                    subtitle={steps[n].subtitle}
                    subtitle2={steps[n].subtitle2}
                    rewards1={steps[n].rewards1}
                    rewards2={steps[n].rewards2}
                    rewards3={steps[n].rewards3}
                    footer={steps[n].footer}
                    buttons={steps[n].buttons}
                  />
                )
            }
              {steps[n].codeSnippet[0].code && (
                <StepWithCodeView
                  steps={steps}
                  n={n}
                  setSteps={setSteps}
                  setProfessorText={setProfessorText}
                  name={name}
                  structDrawerOpen={structDrawerOpen}
                  setStructDrawerOpen={setStructDrawerOpen}
                />
              )}
              {!(n == 0 || n == steps.length - 1) &&
                !steps[n].codeSnippet[0].code && 
                !steps[n].form &&
                (
                  <StepNoCodeView
                    steps={steps}
                    n={n}
                    structDrawerOpen={structDrawerOpen}
                    setStructDrawerOpen={setStructDrawerOpen}
                  />
                )}
                {
                steps[n].form && (
                    <MagicSchoolFormWrapper
                    structDrawerOpen={structDrawerOpen}
                    setStructDrawerOpen={setStructDrawerOpen}
                    step={steps[n]}
                    />
                )
                }
            </ModalBody>
            <ModalFooter className={style.footer}>
                {
                (steps[n].codeSnippet[0].code || steps[n].form)
                &&
                <ProfessorTextDialogBox
                professorText={professorText}
                step={steps[n]}
                />
                }
              <MagicModalFooter
                n={n}
                steps={steps}
                oneMoreStep={oneMoreStep}
                oneLessStep={oneLessStep}
                onComplete={onComplete}
                professorAvatar={steps[0].professorAvatar}
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
