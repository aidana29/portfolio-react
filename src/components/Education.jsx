import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <div>
      <EduWrap>
        <h2>WeCode</h2>
        <p className="smallText">Sep 2023 - October 2023</p>
        <p>Backend Developer, Bootcamp</p>
      </EduWrap>
      <EduWrap>
        <h2>Chung-Ang University</h2>
        <p className="smallText">Sep 2018 - August 2021</p>
        <p>
          Korean Government Scholarship Awardee
          <br />
          GPA 4.5 / 4.5
          <br />
          Major: Business Administration
        </p>
      </EduWrap>
      <EduWrap>
        <h2>Eurasian National University</h2>
        <p className="smallText">Sep 2013 - August 2017</p>
        <p>
          Recipient of Dean’s Appreciation Letter
          <br />
          GPA 4.5 / 4.5
          <br />
          Major: International Relations
        </p>
      </EduWrap>
    </div>
  );
};

const EduWrap = styled.div`
padding-bottom: 40px;
> p {
  color: #535353;
}
> h2 {
  font-size: 1.5rem;
}
> 
`;

export default Education;
