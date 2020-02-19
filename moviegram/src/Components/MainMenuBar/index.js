import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';

class MainMenuBar extends React.Component {

  render() {
    return (
      <div id="mainMenuBar">

        <div id="menuItems">
          <ul>
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
          </ul>
        </div>

      </div>
    );
  }
}

export default MainMenuBar;
