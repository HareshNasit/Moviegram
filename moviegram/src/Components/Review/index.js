// import all react libraries
import React from "react";
import { Button, Form } from "react-bootstrap";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// import constants file which carries user data
const constants = require("../../constants")

// Class for a Review Component
class Review extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the implemented methods to this class that need to access variables of defined inside the constructor.
  constructor(props) {
    super(props)
    this.state = { newComment: ""};
    this.newComContent = this.newComContent.bind(this)
    this.addCommentFunc = this.addCommentFunc.bind(this)
    this.currUser = constants.acc.username;
  }

  // Takes the content from a new comment written on the post and sets the review's this.state.newComment variable
  // to the entered comment
  newComContent(event) {
    this.setState({newComment:event.target.value})
  }

  addCommentFunc(queue, comment, id) {
    let reviewsList = queue.state.reviews
    let review = reviewsList[id.reviewId]
    review.commentsSection.push(comment)
    queue.setState({
      reviews: reviewsList
    });
  }

  render() {

    const { datetime, username, userImg, movieName, reviewContent, commentsSection, reviewId, queueComponent} = this.props;

    return (
      <div id="review">

        {/* the unordered list that displays the user profile img, username of author and movie for a specific review */}
        <ul>
          <li><span className="reviewUserPicLi"><img className="reviewUserPic" src={userImg} alt="User DP"/></span>{username}</li>
          <li>{movieName}</li>
        </ul>

        {/* Content of the review and the datetime on which it was posted are displayed in the following elements */}
        <span className="content">{reviewContent}</span>
        <span className="datetime">Posted on : {datetime}</span>

        {/* The comments section for each review is displayed below */}
        <div className="comments">
          <h6><b><u>Comments:</u></b></h6>
          <span>{commentsSection}</span>
        </div>

        {/* Form into which user can enter a new comment into a post and post it to that review */}
        <Form className="newCom">
          <Form.Row className="writeCom">
            <Form.Group className="writeIt">
              <Form.Control type="newComment" placeholder="Write a Comment" className="comBar" onChange={this.newComContent}/>
            </Form.Group>
            <Form.Group className="postIt">
              <Button variant="primary"
                      onClick={() => this.addCommentFunc(queueComponent,
                                                    {datetime: new Date().toLocaleString(), username:this.currUser, commentContent:this.state.newComment},
                                                    {reviewId})}>
              Post Comment
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>

      </div>
    );
  }
}

export default Review;
