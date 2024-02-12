import React from "react";
import styled from "styled-components";

const Section = (props) => {
    return (
        <SectionWrap ref={props.ref}>
            <p>{props.icon}</p>
            <h2>{props.name}</h2>
        </SectionWrap>
    )
}


const SectionWrap = styled.div`
display: flex;
align-items: center;
justify-content: start;
padding-bottom: 40px;
> h2 {
    font-weight: 500;
    margin: 0;
}
> p {
    font-size: 30px;
    padding-right: 15px;
    margin: 0;
}
`

export default Section