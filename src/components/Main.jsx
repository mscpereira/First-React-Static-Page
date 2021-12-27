import React from "react"
import './main.css'

function Main() {
  return(
    <div className="main">
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--list">
        <li className="main--list_items">Was first released in 2013</li>
        <li className="main--list_items">Was originally created by Jordan Walke</li>
        <li className="main--list_items">Has well over 100k stars on GitHub</li>
        <li className="main--list_items">Is maintained by Facebook</li>
        <li className="main--list_items">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default Main;
