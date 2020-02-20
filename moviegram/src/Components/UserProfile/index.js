import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import Image from 'react-bootstrap/Image'
import photo from './ballon_dor.jpg'

// <MainMenuBar/>
// <img class="profilePic" src={photo} />
// <div class="profileDescription">
//   <h2>Profile Information</h2>
//   <p class="grey">@movieFreak</p>
//   <p>
//       Marvel fan
//   </p>
// </div>

// <div class="userProfile">
//     <div id="profilePicContainer">
//       CR7
//     </div>
//     <div id="profileInfo">
//       HALA MADRID <br/>
//       asmdjasbkdjsand
//     </div>
// </div>

class UserProfile extends React.Component {

  render() {
    return (
      <div id="userProfile">
          <MainMenuBar/>
          <div id="bodyHeader">
            <div id="profilePicContainer">
              <img class="profilePic" src={photo} />
            </div>
            <div id="profileInfo">
              HALA MADRID <br/>
              asmdjasbkdjsand
            </div>
          </div>
          <div className="profileDescription">
            <h2>Profile Information</h2>
            <p>@movieFreak</p>
            <p>
                Marvel fan
            </p>
          </div>
      </div>
    );
  }
}

export default UserProfile;
