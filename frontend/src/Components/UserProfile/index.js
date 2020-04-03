import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import MainMenuBar from './../MainMenuBar';
import ronaldo_dp from './ballon_dor.jpg'
import messi_dp from './messi_dp.jpg'
import admin_dp from './admin_dp.jpg'
import Modal from 'react-modal';
import ReviewsList from './../ReviewsList';
import AddReview from './../AddReview';
import EditProfile from './../EditProfile';
import { getAllReviews, getUser, getUserReviews, getUserImage, readCookie } from './../../services/api'

class UserProfile extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    readCookie(this)
    this.state = {
      profilePic: null,
      showModalFollowing: false,
      showModalFollows: false,
      showModalAddRev: false,
      reviews: [],
      peopleFollow: [],
      peopleFollowing: [],
      showUpdateProfile: false,
      userDescription: ""
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
    const username = this.state.currentUser
    const userData = await getUser(username);
    const userReviewsData = await getUserReviews(username);
    let userReviews = userReviewsData.data;
    const userImg = await getUserImage(username)
    for (let j =0; j < userReviews.length; j++) {
        userReviews[j]["image_url"] = userImg.data;
    }
    userReviews = userReviews.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    this.setState({
        currentUser: username,
        profilePic: userData.data["image_url"],
        peopleFollow: userData.data["following"],
        peopleFollowing: userData.data["followers"],
        userDescription: userData.data["description"],
        reviews: userReviews
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
    window.location.reload(false);
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

    const userFollowingList = this.state.peopleFollow.map((person, index) =>
      // expression goes here:
      <div key={index} className="followUserText">
          <Link className="followInfoLink" to={{pathname:'/ProfileView/' + person, state: { username: this.state.currentUser, profileUser: person }}}>
          {person}
          </Link>
      </div>
    );

    const userFollowersList = this.state.peopleFollowing.map((person, index) =>
      // expression goes here:
      <div key={index} className="followUserText">
      <Link className="followInfoLink" to={{pathname:'/ProfileView/' + person, state: { username: this.state.currentUser, profileUser: person }}}>
      {person}
      </Link>
      </div>
    );

    const username = this.state.currentUser;
    // let profile_url = '';
    // if (username === authenticateduser) {
    //   profile_url = '/UserProfile/'
    // }
    // else {
    //   profile_url = '/ProfileView/'
    // }
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
                 <AddReview queueComponent={this} cancelFunction={this.handleCloseAddRevModal} profImg={this.state.profilePic}
                            authenticateduser={username}
                 />
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
                <span id="totalFollowers" onClick={this.handleOpenFollowersModal}>{this.state.peopleFollowing.length} </span>Followers
                <span id="totalFollowing" onClick={this.handleOpenFollowingModal}>{this.state.peopleFollow.length} </span>Following
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
