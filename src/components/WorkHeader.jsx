import React from "react";
import styled from "styled-components";

const WorkHeader = (props) => {
  return (
    <CompanyLink href={props.companyLink} target="_blank">
      <h2>{props.companyName}</h2>
      <img src="./media/box-arrow-up-right.svg" alt="" />
    </CompanyLink>
  );
};

const CompanyLink = styled.a`
  display: flex;
  text-decoration: none;
  height: 30px;
  align-items: center;
  > h2 {
    font-size: 1.5rem;
    color: black;
    margin: 0;
    &:hover {
        color: blue;
      }
  }
  > img {
    height: 15px;
    padding-left: 5px;
  }
`;

export default WorkHeader;
