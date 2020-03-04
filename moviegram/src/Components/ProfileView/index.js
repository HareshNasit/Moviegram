import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import bhavyaPic from './bhavya.jpg'
import messi_dp from './../UserProfile/messi_dp.jpg'
import Dialog from 'react-bootstrap-dialog';
import Modal from 'react-modal';
import ReviewsList from './../ReviewsList';
import AddReview from './../AddReview';
import EditProfile from './../EditProfile';
import profileimgdef from './../MainMenuBar/profile.png';

// All this user data variables will be improted from our database
const bhavya = {
            username: "Bhavya",
            profilePic: bhavyaPic,
            peopleFollow: ['Cristiano Ronaldo', 'Marcelo', 'Isco', 'James', 'Di maria', 'Harsh', 'Yosef', 'Dhruv'],
            peopleFollowing: ['Cristiano Ronaldo', 'Isco', 'Leo Messi', 'Harsh', 'Yosef', 'Dhruv'],
            userDescription: "I love movies, they help me escape into a different world and make me believe in the impossible",
            reviews: [{ id: 0, upvote: 0, downvote: 0, username: "Bhavya" , movieName: "Jurassic World" , profImg: bhavyaPic, datetime: "1/28/2020, 11:59:15 PM",
                   reviewContent: "So wonderful to see such beautiful creatures from millions of years ago." ,
                   commentsSection: [{datetime:"2/28/2020, 8:57:15 PM ", username:"Harsh", commentContent:"That is so true i loved the movie so much it was amazing"}]}]
           }

const harsh = {
            username: "Harsh",
            profilePic: messi_dp,
            peopleFollow: ['Cristiano Ronaldo', 'Suarez', 'Coutinho', 'Ronaldinho', 'Puyol', 'Zlatan'],
            peopleFollowing: ['Cristiano Ronaldo', 'Harsh', 'Yosef', 'Dhruv', 'Ronaldinho', 'Marcelo', 'Zidane', 'Neymar'],
            userDescription: "I play professional football at FC Barcelona. After a tough match against hard teams like Real Madrid, I try to shift my mind by watching movies XD",
            reviews: [{ id: 0, upvote: 0, downvote: 0, username: "Harsh" , movieName: "Pele" , profImg: messi_dp, datetime: "1/28/2020, 11:57:15 PM",
                   reviewContent: "One of the greatest football players to have lived" ,
                   commentsSection: []}]
           }

const yosef = {
              username: "Yosef",
              profilePic: profileimgdef,
              peopleFollow: ['Cristiano Ronaldo', 'Suarez', 'Coutinho', 'Ronaldinho', 'Puyol', 'Zlatan'],
              peopleFollowing: ['Cristiano Ronaldo', 'Harsh', 'Yosef', 'Dhruv', 'Ronaldinho', 'Marcelo', 'Zidane', 'Neymar'],
              userDescription: "Movies are my favourite passtime",
              reviews: []
          }

const dhruv = {
              username: "Dhruv",
              profilePic: profileimgdef,
              peopleFollow: ['Cristiano Ronaldo', 'Suarez', 'Coutinho', 'Ronaldinho', 'Puyol', 'Zlatan'],
              peopleFollowing: ['Cristiano Ronaldo', 'Harsh', 'Yosef', 'Dhruv', 'Ronaldinho', 'Marcelo', 'Zidane', 'Neymar'],
              userDescription: "No comment....lol",
              reviews: []
            }

const cristianoRonaldo = {
              username: "Cristiano Ronaldo",
              profilePic: profileimgdef,
              peopleFollow: ['Cristiano Ronaldo', 'Suarez', 'Coutinho', 'Ronaldinho', 'Puyol', 'Zlatan'],
              peopleFollowing: ['Cristiano Ronaldo', 'Harsh', 'Yosef', 'Dhruv', 'Ronaldinho', 'Marcelo', 'Zidane', 'Neymar'],
              userDescription: "Movies are my the best thing to come out of the 20th century",
              reviews: []
            }


class ProfileView extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      username: this.props.location.state.username,
      profilePic: null,
      isUser: true,
      isfollowing: false,
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

  componentDidMount() {
    const username = this.props.location.state.profileUser
    if (username === "Bhavya") {
      this.setState({
        username: bhavya["username"],
        profilePic: bhavya["profilePic"],
        peopleFollow: bhavya["peopleFollow"],
        peopleFollowing: bhavya["peopleFollowing"],
        userDescription: bhavya["userDescription"],
        reviews: bhavya["reviews"]
      })
    }
    else if (username === "Harsh") {
      this.setState({
        username: harsh["username"],
        profilePic: harsh["profilePic"],
        peopleFollow: harsh["peopleFollow"],
        peopleFollowing: harsh["peopleFollowing"],
        userDescription: harsh["userDescription"],
        reviews: harsh["reviews"]
      })
    }
    else if (username === "Yosef") {
      this.setState({
        username: yosef["username"],
        profilePic: yosef["profilePic"],
        peopleFollow: yosef["peopleFollow"],
        peopleFollowing: yosef["peopleFollowing"],
        userDescription: yosef["userDescription"],
        reviews: yosef["reviews"]
      })
    }
    else if (username === "Dhruv") {
      this.setState({
        username: dhruv["username"],
        profilePic: dhruv["profilePic"],
        peopleFollow: dhruv["peopleFollow"],
        peopleFollowing: dhruv["peopleFollowing"],
        userDescription: dhruv["userDescription"],
        reviews: dhruv["reviews"]
      })
    }
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

  // followUser() {
  //
  // }

  render() {
    let follow_edit_button;
    let add_review_button;
    if (this.state.isfollowing){
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

    const authenticatedusername = this.props.location.state.username;
    const profileUser = this.props.location.state.profileUser
    console.log((authenticatedusername));
    console.log(profileUser);

    return (
      <div id="userProfile">
          <MainMenuBar username={authenticatedusername} auth={true}/>
          <div id="bodyHeader">
            <div id="profilePicContainer">
              <img className="profilePic" src={this.state.profilePic} />
            </div>
            <div id="profileInfo">
              <div id="infoHeader">
                <span id="userName">{profileUser}</span>
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
  }
}


export default ProfileView;
