// import all react libraries
import React from "react";
import { uid } from "react-uid";
import { Button, Form } from "react-bootstrap";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css"
// import all needed Components
import MainMenuBar from './../MainMenuBar';
import Review from './../Review';
import Comment from './../Comment';
import profileimgdef from './../MainMenuBar/profile.png';
// import constants file which carries user data
// const constants = require("../../constants")

// Class for the Reviews News Feed Component
class NewsFeedScreen extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the used methods to this class.
  constructor(props) {
    super(props);
    this.state = {searched: "",
                  reviews: [{ username: "Bhavya" , movieName: "Avengers" , profImg: profileimgdef,
                             reviewContent: "This movie is lit, and I mean lit af. My god what an awesome time I had and it was even more fun because I watched it with my close friends which made the experience amazing. 15/10 stars. Definitely go watch it pleaseeeeeeeee!!!!!!!!!!!" ,
                             commentsSection: [{datetime:"", username:"Harsh", commentContent:"That is so true i loved the movie so much it was amazing"}, {datetime:"", username:"Dhruv", commentContent:"Yess!!!!! OMG yes!!!!!! it is the best movie ever"}, {datetime:"", username:"Hassan", commentContent:"Yess!!!!!"}, {datetime:"", username:"Ramesh", commentContent:"Nooooo!!!!! DC is a better universe"}] },
                             { username: "Harsh" , movieName: "Messi Rocks" , profImg: profileimgdef,
                               reviewContent: "I think this movie is better than any movie ever made about any footballer or any movie that will be made about any footballer because Messi by far is the GOAT football player to ever live and anyone who disagrees and says Ronaldo is the best is RIGHT cause messi sucks HaHaHa tricked you there didn't I." ,
                               commentsSection: [{datetime:"", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                             { username: "Dhruv" , movieName: "Dangal" , profImg: profileimgdef,
                               reviewContent: "Ab toh dangal hoga dangal bhenchooodddddd !!!!!!" ,
                               commentsSection: [] },
                             { username: "Yosef" , movieName: "Stalingrad" , profImg: profileimgdef,
                               reviewContent: "Thomas Kretschmann is the best actor I have ever witnessed in my whole damn life and man is he hot." ,
                               commentsSection: [] }]
                 };
    this.searchChange = this.searchChange.bind(this);
    this.searchMoviesReviews = this.searchMoviesReviews.bind(this)
  }

  // function used to change the value of this.state.searched to store the searchBar query entered by user
  searchChange(event) {
    this.setState({searched:event.target.value})
    console.log(event.target.value)
  }

  // Function that is invoked when the search button next to the searchBar for movies/reviews is clicked
  searchMoviesReviews() {
    if(this.state.searched === ""){
      console.log("empty input dont run search")
    } else {
      console.log("searching " + this.state.searched)
    }
  }

  // Creates and returns a unique comments rection which contains the comments of each different review
  getCommentsSection(comments) {
    return (
      <div>
        {comments.map(com => (<Comment key={uid(com)}
                                       username={com.username}
                                       commentContent={com.commentContent}/>))}
      </div>
    )
  }

  render() {
    return (
      <div className="pageFeed">

        {/*The menu bar is just reused from the Component MainMenuBar */}
        <MainMenuBar/>

        {/*Form that takes in the input of users to search movies and reviews of movies */}
        <Form className="searchMovieform">
          <Form.Row>
            <Form.Group className="searchBar">
              <Form.Control type="searchMovie" placeholder="Search Movies/Reviews" onChange={this.searchChange}/>
            </Form.Group>
            <Form.Group className="searchIt">
              <Button variant="primary" onClick={this.searchMoviesReviews}>Search</Button>
            </Form.Group>
          </Form.Row>
        </Form>

        {/*Title of the review news feed page */}
        <div className="pageHeader">
         <h3 className="headerText">Reviews Feed</h3>
        </div>

        {/*Display all the reviews for the current logged in user that were posted by his friends */}
        <div className="revs">
          {this.state.reviews.map(review => (
            <Review key={uid(review)}
                    datetime="Datetime"
                    username={review.username}
                    userImg={review.profImg}
                    movieName={review.movieName}
                    reviewContent={review.reviewContent}
                    commentsSection={this.getCommentsSection(review.commentsSection)}/>
          ))}
        </div>

      </div>
    );
  }
}

export default NewsFeedScreen;
