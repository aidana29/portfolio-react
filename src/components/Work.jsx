import React from "react";
import styled from "styled-components";
import WorkHeader from "./WorkHeader";

const Work = () => {
  return (
    <div>
      <CompanyWrap>
        <WorkPeriod>November 2023</WorkPeriod>
        <WorkInfo>
          <WorkHeader companyLink="https://fluentt.ai/" companyName="FluentT" />
          <p className="smallText">
            <em>Backend Developer, Internship</em>
          </p>
          <p>
            Project: in-house admin system
            <br />
            - Created APIs for media uploads and registration
            <br />
            - Engaged in S3 configuration and management
            <br />- Collaborated with the dev team and participated in scrum
            meetings
          </p>
        </WorkInfo>
      </CompanyWrap>
      <CompanyWrap>
        <WorkPeriod>Apr 2021 - Jul 2023</WorkPeriod>
        <WorkInfo>
          <WorkHeader
            companyLink="https://www.globaleur.com/"
            companyName="Globaleur"
          />
          <p className="smallText">
            <em>Content Editor, full-time</em>
          </p>
          <p>
            Project: Seoul Tourism Organization (STO)
            <br />
            - Registered new travel data points and updated existing on STO's
            CMS
            <br />
            - Designed web articles layouts and published them using HTML and
            CSS
            <br />
            - Engaged in SEO
            <br />
            - Engaged in translation(Rus-Eng, Eng-Rus, Kor-Rus, Rus-Kor,
            Kor-Eng, Eng-Kor)
            <br />
            <br />
            Project: In-house content portal
            <br />
            - Managed a team of interns from USA and Hong Kong
            <br />
            - Worked on UIUX for the company's app
            <br />
            - Devised user flows and frameworks for new services
            <br />
          </p>
        </WorkInfo>
      </CompanyWrap>
      <CompanyWrap>
        <WorkPeriod>Aug - Dec 2020</WorkPeriod>
        <WorkInfo>
          <WorkHeader
            companyLink="https://thesmc.co.kr/"
            companyName="The SMC"
          />
          <p className="smallText">
            <em>Social Media Manager, part-time</em>
          </p>
          <p>
            Project: Medical Korea - Korea’s Healthcare Brand
            <br />
            - Launched marketing campaigns for Medical Korea’s official social
            media channel on Vkontakte <br />- Engaged in Kor-Rus, Kor-Eng
            translation
          </p>
        </WorkInfo>
      </CompanyWrap>
    </div>
  );
};

const CompanyWrap = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 50px;
`;
const WorkPeriod = styled.p`
  width: 30%;
`;

const WorkInfo = styled.div`
  width: 70%;
  > p {
    color: #535353;
  }
`;

export default Work;
