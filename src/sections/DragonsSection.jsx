import React from "react";
import styled from "styled-components";
import dragonsLogos from "../../actions/dragonsLogos";
import NftCardComponent from "../components/NftCardComponent";

function DragonsSection() {
    
  return (
    <Wrapper >
      { dragonsLogos.map((dragon, i) => (
          <NftCardComponent key={i} dragon={dragon}/>
        ))}
    </Wrapper>
  );
}

export default DragonsSection

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 30px;
`