import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';

class MainMenuBar extends React.Component {

  render() {
    return (
      <div id="mainMenuBar">
        <ul>
          <li><Button variant="outline-primary" className="edge-btn" as={Link} to="/login" type="submit">Sign Out</Button></li>
          
          <li>
            <a href='/'>
            <img src="home.png" alt="Home" className="mainMenu-btn"/>
            </a>
          </li>

          <li>
            <a href='/NewsFeed'>
            <img src="newsFeed.png" alt="News Feed" className="mainMenu-btn"/>
            </a>
          </li>

          <li>
            <a href='/UserProfile'>
            <img src="profile.png" alt="Profile" className="mainMenu-btn"/>
            </a>
          </li>

          <li>
            <a href='/AddReview'>
            <img src="addReview.png" alt="Add Review" className="mainMenu-btn"/>
            </a>
          </li>

          <li><Button variant="outline-primary" className="edge-btn" type="submit" disabled>CurrUsername</Button></li>
        </ul>
      </div>
    );
  }
}

export default MainMenuBar;
