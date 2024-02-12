import React, { useRef } from "react";
import styled from "styled-components";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Education from "../components/Education";
import NavButton from "../components/NavButton";

const Right = () => {
  const eduRef = useRef();
  function eduScroll() {
    eduRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const projectsRef = useRef();
  function projectScroll() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const workRef = useRef();
  function workScroll() {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <RightWrap>
      <NavWrap>
        <NavButton onClick={projectScroll} name="PROJECTS" />
        <NavButton onClick={workScroll} name="WORK" />
        <NavButton onClick={eduScroll} name="EDUCATION" />
      </NavWrap>
      <SectionWrap id="projects" ref={projectsRef}>
        <p>🚀</p>
        <h2>PROJECTS</h2>
      </SectionWrap>
      <Projects />
      <SectionWrap id="work" ref={workRef}>
        <p>👩🏻‍💻</p>
        <h2>WORK</h2>
      </SectionWrap>
      <Work />
      <SectionWrap id="education" ref={eduRef}>
        <p>🧠</p>
        <h2>EDUCATION</h2>
      </SectionWrap>
      <Education />
    </RightWrap>
  );
};

const RightWrap = styled.div`
  padding-left: 500px;
  height: 100vh;
  box-sizing: border-box;
`;

const NavWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 90px;
`;

const SectionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-bottom: 40px;
  > h2 {
    font-weight: 500;
    margin: 0;
  }
  > p {
    font-size: 30px;
    padding-right: 15px;
    margin: 0;
  }
`;

export default Right;
