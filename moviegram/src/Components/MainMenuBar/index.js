import React from "react";
import "./styles.css";
import {Link} from 'react-router-dom';

// import all the images for the menu bar
import newsFeedimg from './newsFeed.png'
import profileimg from './profile.png'
import addReviewimg from './addReview.png'

class MainMenuBar extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { username, auth } = this.props
    const userProfileURL = '/UserProfile/'+  username ;
    return (
      <div id="mainMenuBar">

        <div id="menuItems">
          <ul>
            <li>
            <Link to={{pathname:'/NewsFeed', state: { username: {username}, auth: {auth} }}}>
              <img src={newsFeedimg} alt="News Feed" className="mainMenu-btn"/>
              </Link>
            </li>

            <li>
              <Link to={{pathname:'/UserProfile/'+ { username }, state: { username: {username}, auth: {auth} }}}>
              <img src={profileimg} alt="Profile" className="mainMenu-btn"/>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    );
  }
}

export default MainMenuBar;
