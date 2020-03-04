import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import bhavya from './bhavya.jpg'
import messi_dp from './../UserProfile/messi_dp.jpg'
import Dialog from 'react-bootstrap-dialog';
import Modal from 'react-modal';
import ReviewsList from './../ReviewsList';
import AddReview from './../AddReview';
import EditProfile from './../EditProfile';
// import constants file which carries user data

const user1 = {
            username: "Bhavya",
            profilePic: bhavya,
            peopleFollow: ['Cristiano Ronaldo', 'Marcelo', 'Isco', 'James', 'Di maria'],
            peopleFollowing: ['Cristiano Ronaldo', 'Isco', 'Leo Messi', 'Bhavya', 'Harsh', 'Yosef', 'Dhruv'],
            userDescription: "I am a movieFreak who enjoys action and Sci-fi movies such as Marvel and X-men. Madridista💚💚Programmer💖💖Footballfreak Snapchat: HarshN12 🇮🇳AKIS'17🇶🇦 -> UofT'21 🇨🇦Fear can hold you prisoner, Hope can set you free",
            reviews: [{ id: 0, username: "username1" , movieName: "Avengers" , profImg: bhavya, datetime: "1/28/2020, 11:57:15 PM",
                   reviewContent: "Endgame definitively closes a few chapters in the Avengers saga in highly satisfying fashion. It is a tremendously entertaining intergalactic trip. 15/10 stars. Definitely go watch it Marvel fans!" ,
                   commentsSection: [{datetime:"2/28/2020, 8:57:15 PM ", username:"Harsh", commentContent:"That is so true i loved the movie so much it was amazing"}, {datetime:"2/04/2020, 8:17:00 AM", username:"Dhruv", commentContent:"Yess!!!!! OMG yes!!!!!! it is the best movie ever"}, {datetime:"2/18/2020, 5:50:15 PM", username:"Hassan", commentContent:"Yess!!!!!"}, {datetime:"2/02/2020, 4:37:15 PM", username:"Ramesh", commentContent:"Nooooo!!!!! DC is a better universe"}] },
                   { id: 1, username: "username1" , movieName: "Intersteller" , profImg: bhavya, datetime: "1/25/2020, 9:57:15 PM",
                     reviewContent: "Christopher Nolan's spectacular film is filled with frustration, anger, and guilt, and also strives for acceptance and even redemption." ,
                     commentsSection: [{datetime:"1/28/2020, 3:50:05 PM ", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                   { id: 2, username: "username1" , movieName: "Anabelle Comes Home" , profImg: bhavya, datetime: "1/10/2020, 1:57:15 PM",
                     reviewContent: "Super scary, in a truly fun way, even if a bit over the top. I love diving into the world of the Warren families' 'room of evil things.' This made me want to see a movie about their daughter Judy, who already sees ghosts." ,
                     commentsSection: [] },
                   { id: 3, username: "username1" , movieName: "Shawshank Redemption" , profImg: bhavya, datetime: "1/6/2020, 4:57:15 PM",
                     reviewContent: "This is an engagingly simple, good-hearted film, with just enough darkness around the edges to give contrast and relief to its glowingly benign view of human nature. Morgan Freeman you are a legend." ,
                     commentsSection: [] }]
           }

const user2 = {
            username: "Harsh",
            profilePic: messi_dp,
            peopleFollow: ['Cristiano Ronaldo', 'Suarez', 'Coutinho', 'Ronaldinho', 'Puyol', 'Zlatan'],
            peopleFollowing: ['Cristiano Ronaldo', 'Harsh', 'Yosef', 'Dhruv', 'Ronaldinho', 'Marcelo', 'Zidane', 'Neymar'],
            userDescription: "I play professional football at FC Barcelona. After a tough match against hard teams like Real Madrid, I try to shift my mind by watching movies XD",
            reviews: [{ id: 0, username: "username2" , movieName: "Avengers" , profImg: messi_dp, datetime: "1/28/2020, 11:57:15 PM",
                   reviewContent: "Endgame definitively closes a few chapters in the Avengers saga in highly satisfying fashion. It is a tremendously entertaining intergalactic trip. 15/10 stars. Definitely go watch it Marvel fans!" ,
                   commentsSection: [{datetime:"2/28/2020, 8:57:15 PM ", username:"Harsh", commentContent:"That is so true i loved the movie so much it was amazing"}, {datetime:"2/04/2020, 8:17:00 AM", username:"Dhruv", commentContent:"Yess!!!!! OMG yes!!!!!! it is the best movie ever"}, {datetime:"2/18/2020, 5:50:15 PM", username:"Hassan", commentContent:"Yess!!!!!"}, {datetime:"2/02/2020, 4:37:15 PM", username:"Ramesh", commentContent:"Nooooo!!!!! DC is a better universe"}] },
                   { id: 1, username: "username2" , movieName: "Intersteller" , profImg: messi_dp, datetime: "1/25/2020, 9:57:15 PM",
                     reviewContent: "Christopher Nolan's spectacular film is filled with frustration, anger, and guilt, and also strives for acceptance and even redemption." ,
                     commentsSection: [{datetime:"1/28/2020, 3:50:05 PM ", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                   { id: 2, username: "username2" , movieName: "Anabelle Comes Home" , profImg: messi_dp, datetime: "1/10/2020, 1:57:15 PM",
                     reviewContent: "Super scary, in a truly fun way, even if a bit over the top. I love diving into the world of the Warren families' 'room of evil things.' This made me want to see a movie about their daughter Judy, who already sees ghosts." ,
                     commentsSection: [] },
                   { id: 3, username: "username2" , movieName: "Shawshank Redemption" , profImg: messi_dp, datetime: "1/6/2020, 4:57:15 PM",
                     reviewContent: "This is an engagingly simple, good-hearted film, with just enough darkness around the edges to give contrast and relief to its glowingly benign view of human nature. Morgan Freeman you are a legend." ,
                     commentsSection: [] }]
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
    const username = this.props.location.state.username
    if (username === "username1") {
      this.setState({
        username: user1["username"],
        profilePic: user1["profilePic"],
        peopleFollow: user1["peopleFollow"],
        peopleFollowing: user1["peopleFollowing"],
        userDescription: user1["userDescription"],
        reviews: user1["reviews"]
      })
    }
    else if (username === "username2") {
      this.setState({
        username: user2["username"],
        profilePic: user2["profilePic"],
        peopleFollow: user2["peopleFollow"],
        peopleFollowing: user2["peopleFollowing"],
        userDescription: user2["userDescription"],
        reviews: user2["reviews"]
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
