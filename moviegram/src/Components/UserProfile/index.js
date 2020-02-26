import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import Image from 'react-bootstrap/Image'
import photo from './ballon_dor.jpg'
import Review from './../Review';
import Dialog from 'react-bootstrap-dialog';
import Modal from 'react-modal';
// import EditProfile from './../UserProfile';

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
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      show: false,
      isUser: true,
      isfollowing: false,
      following: "Cristiano Ronaldo\n\
      Bhavya Shah\n\
      Dhruv Patel\n\
      Yosef Leibman",
      showModal: false
    };
    this.onClick = this.onClick.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onClick () {
    // this.showModal();
    this.dialog.showAlert('Hello Dialog!')
    this.dialog.show({
      title: 'Following',
      body: this.state.following,
      bsSize: 'small',
      actions: [
        Dialog.Action(
          'Update',
          () => console.log('UPDATED!'),
          'btn-info'
        )
      ],
      onHide: (dialog) => {
        dialog.hide()
        console.log('closed by clicking background.')
      },
      prompt: [
        Dialog.TextPrompt({initialValue: 'me@example.com', placeholder: 'description'})
      ]
    })
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    let follow_edit_button;
    if (this.state.isUser) {
      follow_edit_button = <Button variant="outline-primary"
                    type="submit"
                    className="editButton"
                    onClick={this.handleOpenModal}
                    >
                    Edit Profile
                  </Button>
    }
    else if(this.state.isfollowing){
      follow_edit_button = <Button variant="outline-primary"
                    type="submit"
                    className="editButton"
                    onClick={this.onClick}
                    >
                    UnFollow
                  </Button>
    }
    else {
      follow_edit_button = <Button variant="outline-primary"
                    type="submit"
                    className="editButton"
                    onClick={this.onClick}
                    >
                    Follow
                  </Button>
    }
    return (
      <div id="userProfile">
          <MainMenuBar/>
          <div id="bodyHeader">
            <div id="profilePicContainer">
              <img className="profilePic" src={photo} />
            </div>
            <div id="profileInfo">
              <div id="infoHeader">
                <span id="userName">harshn12</span>
                {follow_edit_button}
                <Dialog id="editProfile" ref={(component) => { this.dialog = component }} />
                <Modal className = "editModel"
                 overlayClassName="Overlay"
                 isOpen={this.state.showModal}
                 contentLabel="Minimal Modal Example">
                 <button onClick={this.handleCloseModal}>Close Modal</button>
               </Modal>
              </div>
                <div id="infoStats">
                <span id="totalReviews" onClick={this.onClick}> 12 </span>Reviews
                <span id="totalFollowers" onClick={this.onClick}>12 </span>Followers
                <span id="totalFollowing" onClick={this.onClick}>12 </span>Following
              </div>
              <div id="userDescription">
                I am a movieFreak who enjoys action and Sci-fi movies such
                as Marvel and X-men.
                Madridista💚💚Programmer💖💖Footballfreak
                Snapchat: HarshN12
                🇮🇳AKIS'17🇶🇦 -> UofT'21 🇨🇦
                Fear can hold you prisoner, Hope can set you free

              </div>
            </div>
          </div>
          <div className="profileFeed">
            <Review username='harshn12'
                    movieName='Avengers'
                    reviewContent='Endgame definitively closes a few chapters in the Avengers saga in highly satisfying fashion. It is a tremendously entertaining intergalactic trip. 15/10 stars. Definitely go watch it Marvel fans!'
                    commentsSection='Comments section Component goes here'/>
            <Review username='harshn12'
                    movieName='Intersteller'
                    reviewContent="Christopher Nolan's spectacular film is filled with frustration, anger, and guilt, and also strives for acceptance and even redemption."
                    commentsSection='Comments section Component goes here'/>
            <Review username='harshn12'
                    movieName='Anabelle Comes Home'
                    reviewContent="Super scary, in a truly fun way, even if a bit over the top. I love diving into the world of the Warren families' 'room of evil things.' This made me want to see a movie about their daughter Judy, who already sees ghosts."
                    commentsSection='Comments section Component goes here'/>
            <Review username='harshn12'
                    movieName='Shawshank Redemption'
                    reviewContent="This is an engagingly simple, good-hearted film, with just enough darkness around the edges to give contrast and relief to its glowingly benign view of human nature. Morgan Freeman you are a legend."
                    commentsSection='Comments section Component goes here'/>
          </div>
      </div>
    );
  }
}

export default UserProfile;
