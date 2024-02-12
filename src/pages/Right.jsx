import React from "react";
import styled from "styled-components";
import Section from "../components/Section";
import Projects from "../components/Projects";

const Right = () => {
  return (
    <RightWrap>
      <Section name="PROJECTS" icon="🚀" />
      <Projects/>
    </RightWrap>
  );
};

const RightWrap = styled.div`
  // background-color: blue;
  flex: 1 1 70%;
  padding-top: 190px;
  padding-left: 100px;
  height: 100vh;
  box-sizing: border-box;
`;

export default Right;
