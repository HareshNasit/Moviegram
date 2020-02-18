import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";

class MainMenuBar extends React.Component {

  render() {
    return (
      <div id="mainMenuBar">
        <ul>
          <li><Button variant="outline-primary" className="mainMenu-btn">Home</Button></li>
          <li><Button variant="outline-primary" className="mainMenu-btn">News Feed</Button></li>
          <li><Button variant="outline-primary" className="mainMenu-btn">Profile</Button></li>
          <li><Button variant="outline-primary" className="mainMenu-btn">Add Review</Button></li>
        </ul>
      </div>
    );
  }
}

export default MainMenuBar;
