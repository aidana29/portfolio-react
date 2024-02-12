import React from "react"
import styled from 'styled-components';
import NavButton from '../components/NavButton';
import SnsIcon from '../components/MySNS';

const Left = () => {
    return(
        <LeftWrap>
            <NavWrap>
                <NavButton name="PROJECTS" onClick="#"/>
                <NavButton name="WORK" onClick="#"/>
                <NavButton name="EDUCATION" onClick="#"/>
            </NavWrap>
            <IntroWrap>
                <p className="hello-i">👋</p>
                <p className="smallText">Hello, I am</p>
                <h1>Dana</h1>
                <p>I am a <span> backend developer,</span> based in Seoul.<br/>
                Fluent in<span> English, Korean and Russian</span></p>
                <ContactWrap>
                    <p>aidana1529@gmail.com</p>
                    <a href="./media/Dana_CV_ENG_new.pdf" target="_blank">Download CV</a>
                </ContactWrap>
            </IntroWrap>
            <SnsWrap>
            <SnsIcon link="https://www.linkedin.com/in/dana29/" img="./media/linkedin.svg"/>
            <SnsIcon link="https://github.com/aidana29" img="./media/github.svg"/>
            <SnsIcon link="https://medium.com/@aidana1529" img="./media/medium.svg"/>
            </SnsWrap>
     </LeftWrap>
    )
}

const LeftWrap = styled.div`
position: sticky;
top: 0;
flex: 0 0 30%;
display: flex;
align-items: start;
justify-content: space-between;
flex-direction: column;
box-sizing: border-box;
`

const NavWrap = styled.div`
display: flex;
width: 100%;
align-items: start;
justify-content: space-between;
padding-top: 40px;
`

const IntroWrap = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
`

const ContactWrap = styled.div`
width: 85%;
display: flex;
align-content: center;
justify-content: space-between;
padding-top: 15px;
> * {
    text-align: center;
    width: 140px;
    font-size: 0.7rem;
    border: solid 0.5px #535353;;
    border-radius: 5px;
    padding: 3px;
    margin: 0;
    color: #535353;
  }
`

const SnsWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
min-width: 40%;
padding-bottom: 40px;
`

export default Left;