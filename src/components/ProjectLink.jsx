import React from "react";
import styled from "styled-components";

const ProjectLink = (props) => {
  return (
    <LinkWrap>
      <img src={props.linkIcon} alt="Link Icon" />
      <a className="project-link" href={props.projectLink} target="_blank">
        {props.projectLinkName}
      </a>
    </LinkWrap>
  );
};

const LinkWrap = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  > img {
    height: 15px;
    padding-right: 5px;
  }
  > a {
    color: #535353;
    text-decoration: none;
    padding-right: 10px;
    &:hover {
      color: blue;
    }
  }
`;

export default ProjectLink;
