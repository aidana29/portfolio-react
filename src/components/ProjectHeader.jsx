import React from "react";
import styled from "styled-components";

const ProjectHeader = (props) => {
  return (
    <ProjectInfoWrap>
      <h2>{props.projectName}</h2>
      <p><em>{props.projectPeriod}</em></p>
    </ProjectInfoWrap>
  );
};

const ProjectInfoWrap = styled.div`
> h2 {
  font-size: 1.5rem;
  margin-top: 20px;
}
> p {
  font-size: 0.8rem;
}
`;

export default ProjectHeader;
