import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import ronaldo_dp from './ballon_dor.jpg'
import messi_dp from './messi_dp.jpg'
import admin_dp from './admin_dp.jpg'
import Modal from 'react-modal';
import ReviewsList from './../ReviewsList';
import AddReview from './../AddReview';
import EditProfile from './../EditProfile';
import { getAllReviews, getUser, getUserReviews } from './../../services/api'

class UserProfile extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      username: this.props.location.state.username,
      profilePic: null,
      showModalFollowing: false,
      showModalFollows: false,
      showModalAddRev: false,
      reviews: [],
      peopleFollow: [],
      peopleFollowing: [],
      showUpdateProfile: false,
      userDescription: "I am a movieFreak who enjoys action and Sci-fi movies such as Marvel and X-men. Madridista💚💚Programmer💖💖Footballfreak Snapchat: HarshN12 🇮🇳AKIS'17🇶🇦 -> UofT'21 🇨🇦Fear can hold you prisoner, Hope can set you free"
    };
    this.updateProfileClick = this.updateProfileClick.bind(this)
    this.handleOpenFollowingModal = this.handleOpenFollowingModal.bind(this);
    this.handleCloseFollowingModal = this.handleCloseFollowingModal.bind(this);
    this.handleOpenFollowersModal = this.handleOpenFollowersModal.bind(this);
    this.handleCloseFollowersModal = this.handleCloseFollowersModal.bind(this);
    this.handleOpenAddRevModal = this.handleOpenAddRevModal.bind(this);
    this.handleCloseAddRevModal = this.handleCloseAddRevModal.bind(this);
    this.handleCloseUpdateProfileModal = this.handleCloseUpdateProfileModal.bind(this);
  }

  async componentDidMount() {
    const reviews = await getAllReviews();
    console.log(reviews.data)
    const username = this.props.location.state.username
    console.log(username)
    const userData = await getUser(username);
    const userReviews = await getUserReviews(username);
    console.log(userData.data);
    console.log(userReviews.data)
    this.setState({
        username: username,
        profilePic: ronaldo_dp,
        peopleFollow: userData.data["following"],
        peopleFollowing: userData.data["followers"],
        userDescription: userData.data["description"],
        reviews: userReviews.data
      })
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

    const userFollowingList = this.state.peopleFollowing.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );

    const userFollowersList = this.state.peopleFollow.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );

    const username = this.props.location.state.username;
    return (
      <div id="userProfile">
          <MainMenuBar username={username} />
          <div id="bodyHeader">
            <div id="profilePicContainer">
              <img className="profilePic" src={this.state.profilePic} />
            </div>
            <div id="profileInfo">
              <div id="infoHeader">
                <span id="userName">{username}</span>
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
                         queueComponent={this}
                         authenticateduser= {username}/>
          </div>
      </div>
    );
  }
}


export default UserProfile;
