import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import Image from 'react-bootstrap/Image'
import photo from './ballon_dor.jpg'

// <img class="profilePic" src={photo} />
class UserProfile extends React.Component {

  render() {
    return (
      <div class="userProfile">
        <MainMenuBar/>
        <div class="bodyHeader">
          <div id="profilePicContainer">
            <img class="profilePic" src={photo} />
          </div>
          <div id="profileInfo">
            HALA MADRID
          </div>
        </div>
        <div class="profileDescription">
          <h2>Profile Information</h2>
          <p class="grey">@movieFreak</p>
          <p>
              Marvel fan
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfile;
