import React from "react";
import "./styles.css";

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
            <Link to={'/'}><img src={homeimg} alt="Home" className="mainMenu-btn"/></Link>
            </li>

            <li>
            <Link to={'/NewsFeed'}>
              <img src={newsFeedimg} alt="News Feed" className="mainMenu-btn"/>
              </Link>
            </li>

            <li>
            <Link to={'/AddReview'}>
              <img src={addReviewimg} alt="Add Review" className="mainMenu-btn"/>
              </Link>
            </li>

            <li>
              <Link to='/UserProfile'>
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
