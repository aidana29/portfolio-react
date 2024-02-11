import React from "react";
import styled from "styled-components";
import ProjectMedia from "./ProjectMedia";
import ProjectLinks from "./ProjectSource";

const Project = (props) => {
  return (
    <ProjectWrap>
      <ProjectName>
        <p>{props.projectName}</p>
      </ProjectName>
      <LinkWrap>
      <ProjectLinks link={props.link}/>
      </LinkWrap>
      <p>{props.period}</p>
      <p className="">
        <em>{props.background}</em>
      </p>
      <p className="">
        <em>{props.mainText}</em>
      </p>
      <ProjectMedia images1={props.image1} />
      <p className="">
        <em>{props.mainText2}</em>
      </p>
    </ProjectWrap>
  );
};

const ProjectWrap = styled.div``;

const ProjectName = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  > img {
    height: 15px;
  }
  > p {
    color: black;
    margin: 0;
    font-size: 1.2rem;
    padding-right: 10px;
    text-decoration: yellow;
  }
`;

const LinkWrap = styled.div`
display: flex;
`

export default Project;
