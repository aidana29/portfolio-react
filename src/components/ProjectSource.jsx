import React from "react";
import styled from "styled-components";

const ProjectLinks = (props) => {
  return <LinkWrap>
          <img src="./media/box-arrow-up-right.svg" alt="arrow link" />
          <a href={props.link} target="_blank" />;
          </LinkWrap>
};

const LinkWrap = styled.div`

`

export default ProjectLinks;
