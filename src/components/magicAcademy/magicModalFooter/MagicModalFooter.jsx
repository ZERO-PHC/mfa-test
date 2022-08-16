import styled from "styled-components";
import TimeLine from "../timeLine/TimeLine";
import { Button } from "@chakra-ui/react";

const MagicModalFooter = ({ steps, n, oneMoreStep, oneLessStep, professorAvatar, onComplete }) => {

  return (
    <Wrapper>
      <div className="footer">
        <img src={professorAvatar} alt="" width={250} />
        <TimeLine timeLineLength={Object.keys(steps)} steps={steps} n={n} />
        <div className={"buttons"}>
          <Button mr={3} onClick={oneLessStep} disabled={n == 0}>
            PREV
          </Button>
          {!steps[n].lastStep ? (
            <Button onClick={oneMoreStep} disabled={!steps[n].completed}>
              NEXT
            </Button>
          ) : (
            <Button onClick={() => onComplete()}>COMPLETE</Button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default MagicModalFooter;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: -15px;
  
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      position: relative;
      top: -12px;
    }
  }

  .buttons > button{
    background: rgb(41,75,65);
    background: linear-gradient(216deg, rgba(41,75,65,1) 0%, rgba(22,22,22,1) 100%);
    color: white;
    box-shadow: 1px 4px 7px 1px #00ffb31e;
    border: 1px solid #00FFB2;
    border-radius: 3px !important;
    transform: matrix(0.99, 0, -0.12, 1, 0, 0);
}
`;
