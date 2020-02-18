import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';

class MainMenuBar extends React.Component {

  render() {
    return (
      <div id="mainMenuBar">
        <ul>
          <li><Button variant="outline-primary" className="mainMenu-btn" as={Link} to="/login" type="submit">Sign Out</Button></li>
          <li><Button variant="primary" className="mainMenu-btn" as={Link} to="/" type="submit">Home</Button></li>
          <li><Button variant="primary" className="mainMenu-btn" as={Link} to="/NewsFeed" type="submit">News Feed</Button></li>
          <li><Button variant="primary" className="mainMenu-btn" as={Link} to="/" type="submit">Profile</Button></li>
          <li><Button variant="primary" className="mainMenu-btn" as={Link} to="/" type="submit">Add Review</Button></li>
          <li><Button variant="outline-primary" className="mainMenu-btn" type="submit" disabled>CurrUsername</Button></li>
        </ul>
      </div>
    );
  }
}

export default MainMenuBar;
