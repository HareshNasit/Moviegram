// import all react libraries
import React from "react";
import ReactSearchBox from 'react-search-box'
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css"
// import all needed Components
import MainMenuBar from './../MainMenuBar';
import ReviewsList from './../ReviewsList';
import profileimgdef from './../MainMenuBar/profile.png';
// import constants file which carries user data
const constants = require("../../constants")

// Class for the Reviews News Feed Component
class NewsFeedScreen extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the used methods to this class.
  constructor(props) {
    super(props);
    this.state = {searched: "",
                  reviews: [{ id: 0, username: "Bhavya" , movieName: "Avengers" , profImg: profileimgdef, datetime: "1/28/2020, 11:57:15 PM",
                             reviewContent: "This movie is lit, and I mean lit af. My god what an awesome time I had and it was even more fun because I watched it with my close friends which made the experience amazing. 15/10 stars. Definitely go watch it pleaseeeeeeeee!!!!!!!!!!!" ,
                             commentsSection: [{datetime:"2/28/2020, 8:57:15 PM", username:"Hassan", commentContent:"Yess!!!!!"}] },
                             { id: 1, username: "Harsh" , movieName: "Messi Rocks" , profImg: profileimgdef, datetime: "1/26/2020, 9:57:15 AM",
                               reviewContent: "I think this movie is better than any movie ever made about any footballer or any movie that will be made about any footballer because Messi by far is the GOAT football player to ever live and anyone who disagrees and says Ronaldo is the best is RIGHT cause messi sucks HaHaHa tricked you there didn't I." ,
                               commentsSection: [{datetime:"2/28/2020, 5:57:15 PM", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                             { id: 2, username: "Dhruv" , movieName: "Dangal" , profImg: profileimgdef, datetime: "12/20/2019, 9:00:15 AM",
                               reviewContent: "Ab toh dangal hoga dangal bhenchooodddddd !!!!!!" ,
                               commentsSection: [] },
                             { id: 3, username: "Yosef" , movieName: "Stalingrad" , profImg: profileimgdef, datetime: "12/31/2019, 12:00:15 AM",
                               reviewContent: "Thomas Kretschmann is the best actor I have ever witnessed in my whole damn life and man is he amazing at playing the hero." ,
                               commentsSection: [] },
                             { id: 4, username: "Cristiano Ronaldo" , movieName: "Dunkirk" , profImg: profileimgdef, datetime: "11/18/2019, 1:00:15 AM",
                               reviewContent: "Beautifully made movie, Nolan surprises me everytime. Got to learn alot about the great fact about the landings at Normandy during WW2." ,
                               commentsSection: [] },
                             { id: 5, username: "James" , movieName: "Harry Potter" , profImg: profileimgdef, datetime: "10/15/2019, 11:09:15 AM",
                               reviewContent: "I know I am late to the party, about a decade late but harry potter is my new favourite series." ,
                               commentsSection: [] },
                             { id: 6, username: "Di Maria" , movieName: "Harry Potter" , profImg: profileimgdef, datetime: "10/15/2019, 10:19:15 PM",
                               reviewContent: "I know I am late to the party too, about a decade late but harry potter is my new favourite series. I watched it last night with James" ,
                               commentsSection: [] }],
                 data: [{key: 'dangal',value: 'Dangal',}, {key: 'avengers endgame',value: 'Avengers: Endgame',},
                        {key: 'mission impossible 5',value: 'Mission Impossible 5',},{key: 'interstellar',value: 'Interstellar',},
                        {key: 'fate of the furious',value: 'Fate of The Furious',}]
                 };
    this.searchChange = this.searchChange.bind(this);
    // this.searchMoviesReviews = this.searchMoviesReviews.bind(this)
    this.handleEvent = this.handleEvent.bind(this)
    this.currUser = constants.acc.username;
  }

  // function used to change the value of this.state.searched to store the searchBar query entered by user
  searchChange(event) {
    this.setState({searched:event.target.value})
    console.log(event.target.value)
  }

  // Function that is invoked when the search button next to the searchBar for movies/reviews is clicked
  // searchMoviesReviews() {
  //   if(this.state.searched === ""){
  //     console.log("empty input dont run search")
  //   } else {
  //     console.log("searching " + this.state.searched)
  //   }
  // }

  handleEvent(movie) {
    console.log(movie);
    window.location.href = "/movie/" + movie;
  }

  render() {
    return (
      <div id="pageFeed">

        {/*The menu bar is just reused from the Component MainMenuBar */}
        <MainMenuBar/>

        {/*Form that takes in the input of users to search movies and reviews of movies */}
        <div className="searchMovieform">
          <ReactSearchBox
          placeholder="Search Movie"
          data={this.state.data}
          onSelect={(event) => this.handleEvent(event.value)}/>
        </div>

        {/*Title of the review news feed page */}
        <div className="pageHeader">
         <h3 className="headerText">Reviews Feed</h3>
        </div>

        {/* Reviews List here to display all reviews from friends of current user */}
        <ReviewsList reviews={this.state.reviews}
                     queueComponent={this}/>

      </div>
    );
  }
}

export default NewsFeedScreen;
