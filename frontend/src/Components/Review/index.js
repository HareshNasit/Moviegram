// import all react libraries
import React from "react";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// backend db server api funcs
import {getUpvoters,getDownvoters,addDownvoter,addUpvoter}  from './../../services/api'

// Class for a Review Component
class Review extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the implemented methods to this class that need to access variables of defined inside the constructor.
  constructor(props) {
    super(props)
    this.state = { newComment: "", upvotes: 0, downvotes: 0};
    this.newComContent = this.newComContent.bind(this)
    this.addCommentFunc = this.addCommentFunc.bind(this)
    this.removeReview = this.removeReview.bind(this)
    this.incrementUpvote = this.incrementUpvote.bind(this)
    this.incrementDownvote = this.incrementDownvote.bind(this)
  }

  async componentDidMount() {
    let upvotes = await getUpvoters(this.props.reviewId)
    let downvotes = await getDownvoters(this.props.reviewId)
    upvotes = upvotes.data.length
    downvotes = downvotes.data.length
    this.setState({upvotes: upvotes})
    this.setState({downvotes: downvotes})
  }

  // Takes the content from a new comment written on the post and sets the review's this.state.newComment variable
  // to the entered comment
  newComContent(event) {
    this.setState({newComment:event.target.value})
  }

  addCommentFunc() {
    console.log("add comment")
  }

  removeReview(queue, review) {
    console.log(review);
    let reviewList = queue.state.reviews;
    let index = reviewList.findIndex(a => a.reviewID === review.reviewID);

    if (index === -1) return;
    reviewList.splice(index, 1);

    queue.setState({reviews: reviewList}); // This will update the state and trigger a rerender of the components
  }

  // increase the number upvotes the review has by 1
  async incrementUpvote(reviewId, user) {
    const upvoteAdded = await addUpvoter(reviewId, user)
    if (upvoteAdded != null) {
      let upvotes = await getUpvoters(this.props.reviewId)
      let downvotes = await getDownvoters(this.props.reviewId)
      upvotes = upvotes.data.length
      downvotes = downvotes.data.length
      this.setState({upvotes: upvotes})
      this.setState({downvotes: downvotes})
    }
  }

  // increase the number downvotes the review has by 1
  async incrementDownvote(reviewId, user) {
    const downvoteAdded = await addDownvoter(reviewId, user)
    if (downvoteAdded != null) {
      let upvotes = await getUpvoters(this.props.reviewId)
      let downvotes = await getDownvoters(this.props.reviewId)
      upvotes = upvotes.data.length
      downvotes = downvotes.data.length
      this.setState({upvotes: upvotes})
      this.setState({downvotes: downvotes})
    }
  }

  render() {

    let profile_url = '';
    const { admin, reviewId, authenticateduser, datetime, username, userImg, movieName, reviewContent, commentsSection, queueComponent} = this.props;
    if (username === authenticateduser) {
      profile_url = '/UserProfile/'
    }
    else {
      profile_url = '/ProfileView/'
    }
    if (admin){
      return(
        <div id="review">

          {/* the unordered list that displays the user profile img, username of author and movie for a specific review */}
          <ul>
            <li>
            <Link to={{pathname:profile_url +username, state: { username: authenticateduser, profileUser: username }}}>
            <span className="reviewUserPicLi"><img className="reviewUserPic" src={userImg} alt="User DP"/></span>
            </Link>{username}
            </li>

            <li>{movieName}</li>
            <li><Button variant="primary" onClick={() => this.removeReview(queueComponent, this)}>
            Remove Review</Button></li>
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
                        onClick={() => this.addCommentFunc()}>
                Post Comment
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>

          {/* used to upvote or downvote a review */}
          <div className="votes">
            <Button className="votes-up" variant="primary" onClick={() => this.incrementUpvote(reviewId, authenticateduser)}>Upvote ({this.state.upvotes})</Button>
            <Button className="votes-down" variant="primary" onClick={() => this.incrementDownvote(reviewId, authenticateduser)}>Downvote ({this.state.downvotes})</Button>
          </div>

        </div>
      )
    }

    if (!admin){
      return (
        <div id="review">

          {/* the unordered list that displays the user profile img, username of author and movie for a specific review */}
          <ul>
            <li><span className="reviewUserPicLi">
            <Link to={{pathname:profile_url +username, state: { username: authenticateduser, profileUser: username }}}>
            <img className="reviewUserPic" src={userImg} alt="User DP"/>
            </Link>
            </span>{username}</li>
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
                        onClick={() => this.addCommentFunc()}>
                Post Comment
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>

          {/* used to upvote or downvote a review */}
          <div className="votes">
            <Button className="votes-up" variant="primary" onClick={() => this.incrementUpvote(reviewId, authenticateduser)}>Upvote ({this.state.upvotes})</Button>
            <Button className="votes-down" variant="primary" onClick={() => this.incrementDownvote(reviewId, authenticateduser)}>Downvote ({this.state.downvotes})</Button>
          </div>

        </div>
      );
  }
  }
}

export default Review;
