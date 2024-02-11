import React from "react";
import styled from "styled-components";
import Section from "../components/Section";
import Project from "../components/Project";

const Right = () => {
  return (
    <RightWrap>
      <Section name="PROJECTS" icon="🚀" />
      <Project
        period="Nov 2023"
        back="https://github.com/aidana29/admin-page"
        projectName="FluentT"
        background="Internship Project"
        mainText="I was responsible for creating APIs for the in-house admin page that allow
                            users to register/login and upload 3D avatar files. Users that have admin status can check
                            both theirs and other users' information and files."
        mainText2="Multer package was used to upload media files to S3. The S3 links were
        saved into the database."
        image1={"/media/fluentt1.png"}
        image2={"/media/fluentt2.png"}
        image3={"/media/fluentt3.png"}
      />
    </RightWrap>
  );
};

const RightWrap = styled.div`
  // background-color: blue;
  flex: 1 1 70%;
  padding-top: 190px;
  padding-left: 80px;
  height: 100vh;
  box-sizing: border-box;
`;

export default Right;
