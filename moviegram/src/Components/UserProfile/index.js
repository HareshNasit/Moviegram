import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import photo from './ballon_dor.jpg'
import Dialog from 'react-bootstrap-dialog';
import Modal from 'react-modal';
import ReviewsList from './../ReviewsList';
import AddReview from './../AddReview';
import EditProfile from './../EditProfile';
// import constants file which carries user data
const constants = require("../../constants")



class UserProfile extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      profilePic: photo,
      isUser: true,
      isfollowing: false,
      showModalFollowing: false,
      showModalFollows: false,
      showModalAddRev: false,
      reviews: [{ id: 0, username: "username1" , movieName: "Avengers" , profImg: photo, datetime: "1/28/2020, 11:57:15 PM",
                 reviewContent: "Endgame definitively closes a few chapters in the Avengers saga in highly satisfying fashion. It is a tremendously entertaining intergalactic trip. 15/10 stars. Definitely go watch it Marvel fans!" ,
                 commentsSection: [{datetime:"2/28/2020, 8:57:15 PM ", username:"Harsh", commentContent:"That is so true i loved the movie so much it was amazing"}, {datetime:"2/04/2020, 8:17:00 AM", username:"Dhruv", commentContent:"Yess!!!!! OMG yes!!!!!! it is the best movie ever"}, {datetime:"2/18/2020, 5:50:15 PM", username:"Hassan", commentContent:"Yess!!!!!"}, {datetime:"2/02/2020, 4:37:15 PM", username:"Ramesh", commentContent:"Nooooo!!!!! DC is a better universe"}] },
                 { id: 1, username: "username1" , movieName: "Intersteller" , profImg: photo, datetime: "1/25/2020, 9:57:15 PM",
                   reviewContent: "Christopher Nolan's spectacular film is filled with frustration, anger, and guilt, and also strives for acceptance and even redemption." ,
                   commentsSection: [{datetime:"1/28/2020, 3:50:05 PM ", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                 { id: 2, username: "username1" , movieName: "Anabelle Comes Home" , profImg: photo, datetime: "1/10/2020, 1:57:15 PM",
                   reviewContent: "Super scary, in a truly fun way, even if a bit over the top. I love diving into the world of the Warren families' 'room of evil things.' This made me want to see a movie about their daughter Judy, who already sees ghosts." ,
                   commentsSection: [] },
                 { id: 3, username: "username1" , movieName: "Shawshank Redemption" , profImg: photo, datetime: "1/6/2020, 4:57:15 PM",
                   reviewContent: "This is an engagingly simple, good-hearted film, with just enough darkness around the edges to give contrast and relief to its glowingly benign view of human nature. Morgan Freeman you are a legend." ,
                   commentsSection: [] }],
      peopleFollow: ['Cristiano Ronaldo', 'Marcelo', 'Isco', 'James', 'Di maria'],
      peopleFollowing: ['Cristiano Ronaldo', 'Isco', 'Leo Messi', 'Bhavya', 'Harsh', 'Yosef', 'Dhruv'],
      showUpdateProfile: false,
      userDescription: "I am a movieFreak who enjoys action and Sci-fi movies such as Marvel and X-men. Madridista💚💚Programmer💖💖Footballfreak Snapchat: HarshN12 🇮🇳AKIS'17🇶🇦 -> UofT'21 🇨🇦Fear can hold you prisoner, Hope can set you free",
      user: constants.acc
    };
    this.updateProfileClick = this.updateProfileClick.bind(this)
    this.handleOpenFollowingModal = this.handleOpenFollowingModal.bind(this);
    this.handleCloseFollowingModal = this.handleCloseFollowingModal.bind(this);
    this.handleOpenFollowersModal = this.handleOpenFollowersModal.bind(this);
    this.handleCloseFollowersModal = this.handleCloseFollowersModal.bind(this);
    this.handleOpenAddRevModal = this.handleOpenAddRevModal.bind(this);
    this.handleCloseAddRevModal = this.handleCloseAddRevModal.bind(this);
    this.handleCloseUpdateProfileModal = this.handleCloseUpdateProfileModal.bind(this);
    this.currUser = constants.acc.username;
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  updateProfileClick () {
    this.setState({showUpdateProfile: true});
  }

  handleOpenFollowingModal () {
    this.setState({ showModalFollowing: true });
  }

  handleOpenFollowersModal () {
    this.setState({ showModalFollowers: true });
  }

  handleOpenAddRevModal () {
    this.setState({showModalAddRev: true})
  }

  handleCloseFollowingModal () {
    this.setState({ showModalFollowing: false});
  }

  handleCloseFollowersModal () {
    this.setState({showModalFollowers: false});
  }

  handleCloseAddRevModal () {
    this.setState({showModalAddRev: false})
  }

  handleCloseUpdateProfileModal () {
    this.setState({showUpdateProfile: false})
  }

  render() {
    let follow_edit_button;
    let add_review_button;
    if (this.state.isUser) {
      follow_edit_button = <Button variant="outline-primary"
                    type="submit"
                    className="editButton"
                    onClick={this.updateProfileClick}
                    >
                    Edit Profile
                  </Button>
      add_review_button = <Button variant="outline-primary"
                           type="click"
                           className="addRevButton"
                           onClick={this.handleOpenAddRevModal}>
                           Add Review
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

    const userFollowingList = this.state.peopleFollowing.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );

    const userFollowersList = this.state.peopleFollow.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );
    // if (!this.user.auth) {
    //   return (
    //     <div>USER NOT AUTHENTICATED
    //     </div>
    //   );
    // }
    // else {
    return (
      <div id="userProfile">
          <MainMenuBar/>
          <div id="bodyHeader">
            <div id="profilePicContainer">
              <img className="profilePic" src={this.state.profilePic} />
            </div>
            <div id="profileInfo">
              <div id="infoHeader">
                <span id="userName">username1</span>
                {follow_edit_button}

                {add_review_button}
                <Modal className = "addRevModal"
                 overlayClassName="Overlay"
                 isOpen={this.state.showModalAddRev}
                 contentLabel="Minimal Modal Example"
                 >
                 <AddReview queueComponent={this} cancelFunction={this.handleCloseAddRevModal} profImg={this.state.profilePic}/>
                </Modal>

                <Modal className = "updateProfile"
                 overlayClassName="Overlay"
                 isOpen={this.state.showUpdateProfile}
                 contentLabel="Minimal Modal Example"
                 onRequestClose={this.handleCloseUpdateProfileModal}>
                   <EditProfile queueComponent={this} cancelFunction={this.handleCloseUpdateProfileModal} />
                </Modal>
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
                <span id="totalReviews"> {this.state.reviews.length} </span>Reviews
                <span id="totalFollowers" onClick={this.handleOpenFollowersModal}>{this.state.peopleFollow.length} </span>Followers
                <span id="totalFollowing" onClick={this.handleOpenFollowingModal}>{this.state.peopleFollowing.length} </span>Following
              </div>
              <div>
              <br/>
              Favourite Genres : Action, Drama, Sports, Thriller
              </div>
              <div id="userDescription">
                {this.state.userDescription}
              </div>
            </div>
          </div>
          <div className="profileFeed">
            <ReviewsList reviews={this.state.reviews}
                         queueComponent={this}/>
          </div>
      </div>
    );
  // }
  }
}


export default UserProfile;
