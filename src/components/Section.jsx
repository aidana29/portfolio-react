import React from "react";
import styled from "styled-components";

const Section = (props) => {
    return (
        <SectionWrap>
            <p className="section-i">{props.icon}</p>
            <h2>{props.name}</h2>
        </SectionWrap>
    )
}


const SectionWrap = styled.div`
display: flex;
align-items: center;
justify-content: start;
padding-bottom: 20px;
> h2 {
    font-weight: 500;
}
`

export default Section