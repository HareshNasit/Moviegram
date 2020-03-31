import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import bhavyaPic from './bhavya.jpg'
import messi_dp from './../UserProfile/messi_dp.jpg'
import Modal from 'react-modal';
import ReviewsList from './../ReviewsList';
import AddReview from './../AddReview';
import EditProfile from './../EditProfile';
import profileimgdef from './../MainMenuBar/profile.png';
import {
  getAllReviews,
  getUser,
  getUserReviews,
  updateUserFollowInfo
} from './../../services/api'

class ProfileView extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      followUnfollowText: "",
      username: this.props.location.state.username,
      profilePic: null,
      showModalFollowing: false,
      showModalFollows: false,
      reviews: [],
      peopleFollow: [],
      peopleFollowing: [],
      showUpdateProfile: false,
      userDescription: ""
    };
    this.handleOpenFollowingModal = this.handleOpenFollowingModal.bind(this);
    this.handleCloseFollowingModal = this.handleCloseFollowingModal.bind(this);
    this.handleOpenFollowersModal = this.handleOpenFollowersModal.bind(this);
    this.handleCloseFollowersModal = this.handleCloseFollowersModal.bind(this);
    this.followUser = this.followUser.bind(this);
  }

  async componentDidMount() {
    const profileUsername = this.props.location.state.profileUser
    const authenticatedUsername = this.props.location.state.username;
    // console.log(profileUsername)
    const profileUserData = await getUser(profileUsername);
    const profileUserReviews = await getUserReviews(profileUsername);
    // console.log(profileUserData.data);
    // console.log(profileUserReviews.data)
    const authUserData = await getUser(authenticatedUsername);
    const authUserFollowing = authUserData.data["following"]
    let followUnfollowText = ""
    if (authUserFollowing.includes(profileUsername)) {
      followUnfollowText = "UnFollow";
    }
    else {
      followUnfollowText = "Follow";
    }
    this.setState({
        username: profileUsername,
        profilePic: profileUserData.data["image_url"],
        peopleFollow: profileUserData.data["following"],
        peopleFollowing: profileUserData.data["followers"],
        userDescription: profileUserData.data["description"],
        reviews: profileUserReviews.data,
        followUnfollowText: followUnfollowText
      })

    Modal.setAppElement('body');
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

  async followUser(event,authenticateduser, profileUser) {

    // updateUserFollowInfo({
    //   username: authenticateduser,
    //   isFollowers: true,
    //   followers: ["CRISTIANO RONALDO"]})

    const profileUserData = await getUser(profileUser);
    const authUserData = await getUser(authenticateduser);
    if (this.state.followUnfollowText === "Follow" && !(profileUserData.data.followers.includes(authenticateduser))) {
      const profileFollowers = profileUserData.data.followers
      profileFollowers.push(authenticateduser)
      updateUserFollowInfo({
        username: profileUser,
        isFollowers: true,
        followers: profileFollowers})
      const authUserFollowing = authUserData.data.following
      authUserFollowing.push(profileUser)
      console.log(authUserFollowing);
      updateUserFollowInfo({
        username: authenticateduser,
        isFollowers: false,
        followers: authUserFollowing})
      this.setState({followUnfollowText: "UnFollow"})
    }
    else if (this.state.followUnfollowText === "UnFollow") {
      const profileFollowers = profileUserData.data.followers
      const authUserIndex = profileFollowers.indexOf(authenticateduser);
      profileFollowers.splice(authUserIndex,1)
      updateUserFollowInfo({
        username: profileUser,
        isFollowers: true,
        followers: profileFollowers})
      const authUserFollowing = authUserData.data.following
      const profileUserIndex = authUserFollowing.indexOf(profileUser);
      authUserFollowing.splice(profileUserIndex,1)
      console.log(authUserFollowing);
      updateUserFollowInfo({
        username: authenticateduser,
        isFollowers: false,
        followers: authUserFollowing})
      this.setState({followUnfollowText: "Follow"})
    }
    window.location.reload(false);
    // console.log(event);
    //   if (this.state.peopleFollow.includes(authenticateduser)) {
    //     const peopleFollowNew = this.state.peopleFollow;
    //     peopleFollowNew.pop(authenticateduser)
    //     this.setState({peopleFollow: peopleFollowNew});
    //     this.setState({followUnfollowText: "Follow"})
    //   }
    //   else {
    //     const peopleFollowNew = this.state.peopleFollow;
    //     peopleFollowNew.push(authenticateduser)
    //     this.setState({peopleFollow: peopleFollowNew});
    //     this.setState({followUnfollowText: "UnFollow"})
    //   }
  }

  render() {
    let follow_edit_button;
    let add_review_button;
    const authenticatedusername = this.props.location.state.username;
    const profileUser = this.props.location.state.profileUser
    console.log((authenticatedusername));
    console.log(profileUser);

    follow_edit_button = <Button variant="outline-primary"
                  type="submit"
                  className="editButton"
                  onClick={(e) => this.followUser(e,authenticatedusername,profileUser)}
                  >
                  {this.state.followUnfollowText}
                </Button>

    const userFollowingList = this.state.peopleFollow.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );

    const userFollowersList = this.state.peopleFollowing.map((person, index) =>
      // expression goes here:
    <div key={index}>{person}</div>
    );

    return (
      <div id="userProfile">
          <MainMenuBar username={authenticatedusername}/>
          <div id="bodyHeader">
            <div id="profilePicContainer">
              <img className="profilePic" src={this.state.profilePic} />
            </div>
            <div id="profileInfo">
              <div id="infoHeader">
                <span id="userName">{profileUser}</span>
                {follow_edit_button}

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
                         queueComponent={this}/>
          </div>
      </div>
    );
  }
}


export default ProfileView;
