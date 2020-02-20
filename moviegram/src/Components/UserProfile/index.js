import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import Image from 'react-bootstrap/Image'
import photo from './ballon_dor.jpg'
import Review from './../Review';

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
              <div id="infoHeader">
                <span id="userName">harshn12</span>
                <Button variant="outline-primary"
                        type="submit"
                        className="editButton">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
          <div className="profileFeed">
            <Review username='Bhavya'
                    movieName='Avengers'
                    reviewContent='This movie is lit, and I mean lit af. My god what an awesome time I had and it was even more fun because I watched it with my close friends which made the experience amazing. 15/10 stars. Definitely go watch it pleaseeeeeeeee!!!!!!!!!!!'
                    commentsSection='Comments section Component goes here'/>
            <Review username='Harsh'
                    movieName='Messi Rocks'
                    reviewContent="I think this movie is better than any movie ever made about any footballer or any movie that will be made about any footballer because Messi by far is the GOAT football player to ever live and anyone who disagrees and says Ronaldo is the best is RIGHT cause messi sucks HaHaHa tricked you there didn't I."
                    commentsSection='Comments section Component goes here'/>
            <Review username='Dhruv'
                    movieName='Dangal'
                    reviewContent="Ab toh dangal hoga dangal bhenchooodddddd !!!!!!"
                    commentsSection='Comments section Component goes here'/>
            <Review username='Yosef'
                    movieName='Stalingrad'
                    reviewContent="Thomas Kretschmann is the best actor I have ever witnessed in my whole damn life and man is he hot."
                    commentsSection='Comments section Component goes here'/>
          </div>
      </div>
    );
  }
}

export default UserProfile;
