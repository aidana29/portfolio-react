import React from "react"

const NavButton = (props) => {
    return (
        <button className="navButton" onClick={props.onClick}>{props.name}</button>
    )
}

export default NavButton

