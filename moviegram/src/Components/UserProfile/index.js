import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import Image from 'react-bootstrap/Image'
import photo from './ballon_dor.jpg'
import Review from './../Review';
import Dialog from 'react-bootstrap-dialog';
import Modal from 'react-modal';
import PropTypes from "prop-types";
import ReviewsList from './../ReviewsList';
import profileimgdef from './../MainMenuBar/profile.png';
// import constants file which carries user data
const constants = require("../../constants")
// import FollowStatsModel from './../UserFollowStats';

class UserProfile extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      isUser: true,
      isfollowing: false,
      showModalFollowing: false,
      showModalFollows: false,
      reviews: [{ id: 0, username: "HarshN12" , movieName: "Avengers" , profImg: photo, datetime: "1/28/2020, 11:57:15 PM",
                 reviewContent: "Endgame definitively closes a few chapters in the Avengers saga in highly satisfying fashion. It is a tremendously entertaining intergalactic trip. 15/10 stars. Definitely go watch it Marvel fans!" ,
                 commentsSection: [{datetime:"", username:"Harsh", commentContent:"That is so true i loved the movie so much it was amazing"}, {datetime:"", username:"Dhruv", commentContent:"Yess!!!!! OMG yes!!!!!! it is the best movie ever"}, {datetime:"", username:"Hassan", commentContent:"Yess!!!!!"}, {datetime:"", username:"Ramesh", commentContent:"Nooooo!!!!! DC is a better universe"}] },
                 { id: 1, username: "HarshN12" , movieName: "Intersteller" , profImg: photo, datetime: "1/28/2020, 11:57:15 PM",
                   reviewContent: "Christopher Nolan's spectacular film is filled with frustration, anger, and guilt, and also strives for acceptance and even redemption." ,
                   commentsSection: [{datetime:"", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                 { id: 2, username: "HarshN12" , movieName: "Anabelle Comes Home" , profImg: photo, datetime: "1/28/2020, 11:57:15 PM",
                   reviewContent: "Super scary, in a truly fun way, even if a bit over the top. I love diving into the world of the Warren families' 'room of evil things.' This made me want to see a movie about their daughter Judy, who already sees ghosts." ,
                   commentsSection: [] },
                 { id: 3, username: "HarshN12" , movieName: "Shawshank Redemption" , profImg: photo, datetime: "1/28/2020, 11:57:15 PM",
                   reviewContent: "This is an engagingly simple, good-hearted film, with just enough darkness around the edges to give contrast and relief to its glowingly benign view of human nature. Morgan Freeman you are a legend." ,
                   commentsSection: [] }]
    };
    this.onClick = this.onClick.bind(this)
    this.handleOpenFollowingModal = this.handleOpenFollowingModal.bind(this);
    this.handleCloseFollowingModal = this.handleCloseFollowingModal.bind(this);
    this.handleOpenFollowersModal = this.handleOpenFollowersModal.bind(this);
    this.handleCloseFollowersModal = this.handleCloseFollowersModal.bind(this);
    this.currUser = constants.acc.username;
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  onClick () {
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

  handleOpenFollowingModal () {
    this.setState({ showModalFollowing: true });
  }

  handleOpenFollowersModal () {
    this.setState({ showModalFollowers: true });
  }

  handleCloseFollowingModal () {
    this.setState({ showModalFollowing: false});
  }

  handleCloseFollowersModal () {
    this.setState({showModalFollowers: false});
  }

  render() {
    let follow_edit_button;
    if (this.state.isUser) {
      follow_edit_button = <Button variant="outline-primary"
                    type="submit"
                    className="editButton"
                    onClick={this.onClick}
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

    const peopleFollowing = ['Cristiano Ronaldo', 'Isco', 'Leo Messi'];

    const userFollowingList = peopleFollowing.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );

    const peopleFollow = ['Cristiano Ronaldo', 'Marcelo', 'Isco', 'James', 'Di maria'];

    const userFollowersList = peopleFollow.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );

    return (
      <div id="userProfile">
          <MainMenuBar/>
          <div id="bodyHeader">
            <div id="profilePicContainer">
              <img className="profilePic" src={photo} />
            </div>
            <div id="profileInfo">
              <div id="infoHeader">
                <span id="userName">{this.currUser}</span>
                {follow_edit_button}
                <Dialog id="editProfile" ref={(component) => { this.dialog = component }} />
                <Modal className = "numFollowModel"
                 overlayClassName="Overlay"
                 isOpen={this.state.showModalFollowing}
                 contentLabel="Minimal Modal Example"
                 onRequestClose={this.handleCloseFollowingModal}
                 >
                 <div className = "followModelHeader">
                  Following
                 </div>
                 <div className = "followModelBody">
                 {userFollowingList}
                  </div>
               </Modal>
               <Modal className = "numFollowModel"
                overlayClassName="Overlay"
                isOpen={this.state.showModalFollowers}
                contentLabel="Minimal Modal Example"
                onRequestClose={this.handleCloseFollowersModal}
                >
                <div className = "followModelHeader">
                 Follows
                </div>
                <div className = "followModelBody">
                {userFollowersList}
                 </div>
              </Modal>
              </div>
                <div id="infoStats">
                <span id="totalReviews"> 4 </span>Reviews
                <span id="totalFollowers" onClick={this.handleOpenFollowersModal}>5 </span>Followers
                <span id="totalFollowing" onClick={this.handleOpenFollowingModal}>3 </span>Following
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
            <ReviewsList reviews={this.state.reviews}
                         queueComponent={this}/>
          </div>
      </div>
    );
  }
}


export default UserProfile;
