import React from "react"
import styled from 'styled-components';
import NavButton from '../components/NavButton';
import SnsIcon from '../components/SnsIcon';

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
                <p className="bodyText">I am a <span> backend developer,</span> <br/> based in Seoul</p>
                <p className="bodyText">Fluent in<span> English, Korean and Russian</span></p>
                <div className="cv-wrap">
                    <p>aidana1529@gmail.com</p>
                    <a href="./media/Dana_CV_ENG_new.pdf" target="_blank">Download CV</a>
                </div>
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
flex: 0 1 20rem;
display: flex;
width: 100%;
align-items: start;
justify-content: space-between;
// background-color: pink;
flex-direction: column;
box-sizing: border-box;
`

const NavWrap = styled.div`
display: flex;
width: 100%;
align-items: start;
justify-content: space-between;
padding-top: 40px;
box-sizing: border-box;
`

const IntroWrap = styled.div`
background-color: pink;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
`

const SnsWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
min-width: 40%;
padding-bottom: 40px;
`

export default Left;