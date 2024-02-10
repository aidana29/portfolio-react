import React from "react";
import styled from "styled-components";

const Right = () => {
  return (
    <RightWrap>
      <SectionWrap id="projects">
        
      </SectionWrap>
    </RightWrap>
  );
};

const RightWrap = styled.div`
  background-color: blue;
  flex: 1 1 70%;
  // padding-top: 190px;
  padding-left: 80px;
  display: flex;
  height: 100vh;
  box-sizing: border-box;
`;

const SectionWrap = styled.div`
padding-bottom: 30px;
`

export default Right;
