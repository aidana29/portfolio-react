import React from "react"

const SnsIcon = (props) => {
    return (
    <a href={props.link} target="_blank">
    <img className="sns-icon" src={props.img} alt="" />
    </a>
    )
}

export default SnsIcon