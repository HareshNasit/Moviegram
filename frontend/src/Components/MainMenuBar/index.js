import React from "react";
import "./styles.css";
import {Link} from 'react-router-dom';

// import all the images for the menu bar
import newsFeedimg from './newsFeed.png'
import profileimg from './profile.png'
import adminDashboard from './admin-dashboard.png'
import backBtn from './back-btn.png'

class MainMenuBar extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { username } = this.props
    const userProfileURL = '/UserProfile/'+  username ;

    if(username !== null && username === "admin"){
      return (
        <div id="mainMenuBar">

          <div id="menuItems">
            <ul>
              <li>
                <Link to={{pathname:'/admin', state: { username: username }}}>
                  <img src={adminDashboard} alt="Admin" className="mainMenu-btn"/>
                </Link>
              </li>
              <li>
                <Link to={{pathname:'/NewsFeed', state: { username: username }}}>
                  <img src={newsFeedimg} alt="News Feed" className="mainMenu-btn"/>
                </Link>
              </li>

              <li>
                <Link to={{pathname:'/UserProfile/'+ username, state: { username: username }}}>
                  <img src={profileimg} alt="Profile" className="mainMenu-btn"/>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      );
    } else if(username !== null && username !== "admin"){
      return (
        <div id="mainMenuBar">

          <div id="menuItems">
            <ul>
              <li>
                <Link to={{pathname:'/NewsFeed', state: { username: username }}}>
                  <img src={newsFeedimg} alt="News Feed" className="mainMenu-btn"/>
                </Link>
              </li>

              <li>
                <Link to={{pathname:'/UserProfile/'+ username, state: { username: username }}}>
                  <img src={profileimg} alt="Profile" className="mainMenu-btn"/>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      );
    } else if (username === null){
      return (
        <div id="mainMenuBar">

          <div id="menuItems">
            <ul>
              <li>
                <Link to={{pathname:'/'}}>
                  <img src={backBtn} alt="Home" className="mainMenu-btn"/>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      );
    }
  }
}

export default MainMenuBar;
