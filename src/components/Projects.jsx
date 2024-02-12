import React from "react";
import styled from "styled-components";
import ProjectLink from "./ProjectLink";
import ProjectHeader from "./ProjectHeader";
import ProjectDescription from "./ProjectHeader";
import ProjectMedia from "./ProjectMedia";

const Projects = () => {
  return (
    <div>
      <ProjectWrap>
        <ProjectHeader
          projectName="BrainBuddy"
          projectPeriod="Feb 2023, Personal Project"
        />
        <ProjectSourceCode>
          <ProjectLink
            linkIcon={"media/box-arrow-up-right.svg"}
            projectLink="https://github.com/aidana29/brainbuddy-back/tree/main"
            projectLinkName="Backend Code"
          />
        </ProjectSourceCode>
        <p className="bodyText">Still in Development</p>
        <ProjectMedia image1="./media/brainbuddy.gif" />
        <p className="bodyText"></p>
        <ProjectStack>
          <p>React</p>
          <p>TypeScript</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MySQL</p>
          <p>Express.js</p>
          <p>RESTful API</p>
          <p>EC2</p>
          <p>RDS</p>
        </ProjectStack>
      </ProjectWrap>
      <ProjectWrap>
        <ProjectHeader
          projectName="FluentT"
          projectPeriod="Nov 2023, Internship Project"
        />
        <ProjectSourceCode>
          <ProjectLink
            linkIcon={"media/box-arrow-up-right.svg"}
            projectLink="https://github.com/aidana29/admin-page"
            projectLinkName="Backend Code"
          />
        </ProjectSourceCode>
        <p className="bodyText">
          I was responsible for creating APIs for the in-house admin page that
          allow users to register/login and upload 3D avatar files. Users that
          have admin status can check both theirs and other users' information
          and files.
        </p>
        <ProjectMedia
          image1="./media/fluentt1.png"
          image2="./media/fluentt2.png"
          image3="./media/fluentt3.png"
        />
        <p className="bodyText">
          Multer package was used to upload media files to S3. The S3 links were
          saved into the database.
        </p>
        <ProjectStack>
          <p>S3</p>
          <p>EC2</p>
          <p>TypeScript</p>
          <p>Swagger</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MySQL</p>
          <p>RESTful API</p>
        </ProjectStack>
      </ProjectWrap>
      <ProjectWrap>
        <ProjectHeader
          projectName="OneMore"
          projectPeriod="Oct 9, 2023 - Oct 27, 2023, Bootcamp Project"
        />
        <ProjectSourceCode>
          <ProjectLink
            linkIcon={"media/box-arrow-up-right.svg"}
            projectLink="https://github.com/wecode-bootcamp-korea/49-3rd-OneMore-backend"
            projectLinkName="Backend Code"
          />
          <ProjectLink
            linkIcon={"media/box-arrow-up-right.svg"}
            projectLink="https://medium.com/@aidana1529/navigating-the-pinnacle-of-our-seoul-bootcamp-journey-the-final-project-79ebca5eebdb"
            projectLinkName="Article about the project"
          />
        </ProjectSourceCode>
        <p className="bodyText">
          Created as an app with both free and premium options, it automatically
          creates and suggests exercise routines, presented in video format.
          Users can save the completed routines to their custom list. Also, they
          can create their own custom routine by selecting exercises from the
          list.
        </p>
        <ProjectMedia
          image1="./media/onemore1.gif"
          image2="./media/onemore2.gif"
          image3="./media/onemore3.gif"
        />
        <p className="bodyText">
          Multer package was used to upload media files to S3. The S3 links were
          saved into the database.
        </p>
        <ProjectStack>
          <p>EC2</p>
          <p>RDS</p>
          <p>OAuth2.0(Google)</p>
          <p>JavaScript</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MySQL</p>
          <p>Bcrypt</p>
          <p>JWT</p>
          <p>RESTful API</p>
        </ProjectStack>
      </ProjectWrap>
      <ProjectWrap>
        <ProjectHeader
          projectName="2SOP"
          projectPeriod="Sep 18, 2023 - Oct 6, 2023, Bootcamp Project"
        />
        <ProjectSourceCode>
          <ProjectLink
            linkIcon={"media/box-arrow-up-right.svg"}
            projectLink="https://github.com/wecode-bootcamp-korea/49-2nd-2SOP-backend"
            projectLinkName="Backend Code"
          />
          <ProjectLink
            linkIcon={"media/box-arrow-up-right.svg"}
            projectLink="https://medium.com/@aidana1529/project-2-in-seoul-based-bootcamp-our-results-and-lessons-learned-487c40bdd48c"
            projectLinkName="Article about the project"
          />
        </ProjectSourceCode>
        <p className="bodyText">
          A more complex replication of the renowned Australian skincare brand,
          Aesop, started with a PET analysis and outlining the main
          functionality. <br />
          In the beginning of the project we dedicated the time to establish
          naming conventions, PR request templates and other standards.
        </p>
        <ProjectMedia
          image1="./media/2sop2.gif"
          image2="./media/onemore2.gif"
          image3="./media/onemore3.gif"
        />
        <p className="bodyText">
          As a member of the backend team, I was responsible for login and
          registration process as well as roder and shipment pages. Apart from
          general error handling, such as regex and password checks, I had a
          chance to practice token validation implemented as a middleware.
        </p>
        <ProjectStack>
          <p>JavaScript</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MySQL</p>
          <p>Bcrypt</p>
          <p>JWT</p>
          <p>RESTful API</p>
        </ProjectStack>
      </ProjectWrap>
    </div>
  );
};

const ProjectWrap = styled.div`
padding-bottom: 40px;
`;

const ProjectSourceCode = styled.div``;

const ProjectStack = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > p {
    font-size: 0.8rem;
    border: solid 0.5px #c0900b;
    color: #c0900b;
    border-radius: 5px;
    padding: 5px 10px;
    margin-right: 10px;
    text-wrap: nowrap;
  }
`;

export default Projects;
