
import React from "react"
import './navbar.css'

function Navbar() {
  return(
    <div className="nav">
      <div className="nav--icons_left">
        <img src="logo192.png" width="40px" height="40px" />
        <h3>ReactFacts</h3>
      </div>
        <h4 className="nav--title">React Course - Project 1</h4>
    </div>
  )
}

export default Navbar;
