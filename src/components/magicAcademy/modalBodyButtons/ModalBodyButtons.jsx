import { Icon } from "@iconify/react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import CodeStructDrawer from "../codeStructDrawer/CodeStructDrawer";

const ModalBodyButtons = ({ step, structDrawerOpen, setStructDrawerOpen, textToCopy }) => {
  return (
    <Wrapper>
      <div className={"footerCodeBox"}>
        {step.completed && (
          <div className={"footerCodeBoxDiv"}>
            <div className={"footerBtns"}>
              {step.allCode && 
              <CopyToClipboard text={textToCopy ? textToCopy : step.allCode}>
                <button>
                  {" "}
                  Copy <Icon icon="ci:copy" height={"2em"} />{" "}
                </button>
              </CopyToClipboard>
              }
              <button onClick={() => setStructDrawerOpen(true)}>
                Check Structure{" "}
                <Icon icon="clarity:tree-view-line" height={"2em"} />
              </button>
              <CodeStructDrawer
                open={structDrawerOpen}
                setOpen={setStructDrawerOpen}
                step={step}
              />
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ModalBodyButtons;

const Wrapper = styled.div`
    .footerCodeBox{
    transition: 3s;
    border-top: 1px solid #00FFB2;
}

.footerCodeBoxDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
}

.footerCodeBoxTexts{
    display: flex;
    color: #00FFB2;
}

.footerBtns{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
}

.footerBtns > button{
    padding: 0px 20px;
    display: flex;
    background-color: #00FFB2;
    color: black;
}

.footerBtns > button > svg{
    width: 20px;
    margin-left: 2px;
}

`;
