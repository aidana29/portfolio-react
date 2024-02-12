import React from "react"
import styled from 'styled-components';
import SnsIcon from '../components/MySNS';

const Left = () => {

  return (
    <LeftWrap>
      <IntroWrap>
        <p className="hello-i">👋</p>
        <p className="smallText">Hello, I am</p>
        <h1>Dana</h1>
        <p>
          I am a <span> backend developer,</span> based in Seoul.
          <br />
          Fluent in<span> English, Korean and Russian</span>
        </p>
        <ContactWrap>
          <p>aidana1529@gmail.com</p>
          <a href="./media/Dana_CV_ENG_new.pdf" target="_blank">
            Download CV
          </a>
        </ContactWrap>
      </IntroWrap>
      <SnsWrap>
        <SnsIcon
          link="https://www.linkedin.com/in/dana29/"
          img="./media/linkedin.svg"
        />
        <SnsIcon link="https://github.com/aidana29" img="./media/github.svg" />
        <SnsIcon
          link="https://medium.com/@aidana1529"
          img="./media/medium.svg"
        />
      </SnsWrap>
    </LeftWrap>
  );
};

const LeftWrap = styled.div`
  position: fixed;
  width: 30%;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
`

const IntroWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  >p {
    margin: 0;
    padding: 10px 0;
  }
  >p.smallText {
    font-size: 1rem;
  }
`;

const ContactWrap = styled.div`
  width: 85%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  padding-top: 15px;
  > * {
    text-align: center;
    width: 300px;
    font-size: 0.8rem;
    border: solid 0.5px #535353;
    border-radius: 5px;
    padding: 5px 0;
    margin: 0;
    color: #535353;
    text-decoration: none;
  }
`;

const SnsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 40%;
  padding-bottom: 40px;
`;

export default Left;
