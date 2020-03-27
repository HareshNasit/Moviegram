// import all react libraries
import React from "react";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css"
// import all needed Components
import MainMenuBar from './../MainMenuBar';
import ReviewsList from './../ReviewsList';
import SearchBar from "../SearchBar";
// import functions for backend stuff
import { getAllReviews,getUser,getUserReviews,getFriendsOfUser } from './../../services/api'
// import constants file which carries user data
const constants = require("../../constants")

// Class for the Reviews News Feed Component
class NewsFeedScreen extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the used methods to this class.
  constructor(props) {
    super(props);
    this.state = {searched: "",
                  reviews: []};
  }

  async componentDidMount() {
    // get all the reviews of the friends of the current user to display them in the NewsFeed
    const currUserFriendsTemp = await getFriendsOfUser(this.props.location.state.username)
    const currUserFriends = currUserFriendsTemp.data
    let myNewsFeed = []
    for(let i=0; i<currUserFriends.length; i++) {
      const currFriendReviews = await getUserReviews(currUserFriends[i])
      const newReviews = currFriendReviews.data
      console.log(newReviews);
      myNewsFeed = myNewsFeed.concat(newReviews);
    }
    // sort all the reviews from the curr users friends in order of latest to oldest
    myNewsFeed = myNewsFeed.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    // set the state property "reviews" to equal to the array of reviews from curr users friends
    this.setState({reviews: myNewsFeed})
  }

  // const {given_username, is_auth} = this.props.location.state

  // this.setState({username: given_username, auth: is_auth})

  render() {
    const username = this.props.location.state.username;
    console.log(username)
    // const auth = this.props.location.state.auth;
    return (
      <div id="pageFeed">

        {/*The menu bar is just reused from the Component MainMenuBar */}
        <MainMenuBar username={username}/>

        {/*Form that takes in the input of users to search movies and reviews of movies */}
        <div className="searchMovieform">
          <SearchBar/>
        </div>

        {/*Title of the review news feed page */}
        <div className="pageHeader">
         <h3 className="headerText">Reviews Feed</h3>
        </div>

        {/* Reviews List here to display all reviews from friends of current user */}
        <ReviewsList reviews={this.state.reviews}
                     queueComponent={this}
                     authenticateduser= {username}/>

      </div>
    );
  }
}

export default NewsFeedScreen;
