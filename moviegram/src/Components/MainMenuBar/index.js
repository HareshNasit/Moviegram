import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';

// import all the images for the menu bar
import homeimg from './home.png'
import newsFeedimg from './newsFeed.png'
import profileimg from './profile.png'
import addReviewimg from './addReview.png'

class MainMenuBar extends React.Component {

  render() {
    return (
      <div id="mainMenuBar">

        <div id="menuItems">
          <ul>
            <li>
              <a href='/'>
              <img src={homeimg} alt="Home" className="mainMenu-btn"/>
              </a>
            </li>

            <li>
              <a href='/NewsFeed'>
              <img src={newsFeedimg} alt="News Feed" className="mainMenu-btn"/>
              </a>
            </li>

            <li>
              <a href='/AddReview'>
              <img src={addReviewimg} alt="Add Review" className="mainMenu-btn"/>
              </a>
            </li>

            <li>
              <a href='/UserProfile'>
              <img src={profileimg} alt="Profile" className="mainMenu-btn"/>
              </a>
            </li>

          </ul>
        </div>

      </div>
    );
  }
}

export default MainMenuBar;
