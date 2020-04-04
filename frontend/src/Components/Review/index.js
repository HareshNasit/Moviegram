// import all react libraries
import React from "react";
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { uid } from "react-uid";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// import needed components
import Comment from './../Comment';
// backend db server api funcs
import {getUpvoters,getDownvoters,addDownvoter,addUpvoter,addComment,getReview}  from './../../services/api'

// Class for a Review Component
class Review extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the implemented methods to this class that need to access variables of defined inside the constructor.
  constructor(props) {
    super(props)
    this.state = { newComment: "", upvotes: 0, downvotes: 0, comments: []};
    this.newComContent = this.newComContent.bind(this)
    this.addCommentFunc = this.addCommentFunc.bind(this)
    this.incrementUpvote = this.incrementUpvote.bind(this)
    this.incrementDownvote = this.incrementDownvote.bind(this)
    this.getCommentsSection = this.getCommentsSection.bind(this)
    this.hasSpoiler = this.hasSpoiler.bind(this)
  }

  async componentDidMount() {
    this.getCommentsSection()
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

  // adds a comment to the review and to the db
  async addCommentFunc(reviewId, authenticateduser, content) {
    if (this.state.newComment.trim() !== "") {
      var newCom = {username: authenticateduser, date: new Date().toLocaleString(), content: content}
    }
    const commentAdded = await addComment(newCom, reviewId)
    let review = await getReview(this.props.reviewId)
    review = review.data
    this.setState({comments: review.comments})
    this.commentForm.reset()
    this.getCommentsSection()
  }

  // Gets the comments for the review from the db using api call
  async getCommentsSection() {
    let review = await getReview(this.props.reviewId)
    review = review.data
    this.setState({comments: review.comments})
  }

  // increase the number upvotes the review has by 1
  async incrementUpvote(reviewId, authenticateduser) {
    const upvoteAdded = await addUpvoter(reviewId, authenticateduser)
    if (upvoteAdded !== null) {
      let upvotes = await getUpvoters(this.props.reviewId)
      let downvotes = await getDownvoters(this.props.reviewId)
      upvotes = upvotes.data.length
      downvotes = downvotes.data.length
      this.setState({upvotes: upvotes})
      this.setState({downvotes: downvotes})
    }
  }

  // increase the number downvotes the review has by 1
  async incrementDownvote(reviewId, authenticateduser) {
    const downvoteAdded = await addDownvoter(reviewId, authenticateduser)
    if (downvoteAdded !== null) {
      let upvotes = await getUpvoters(this.props.reviewId)
      let downvotes = await getDownvoters(this.props.reviewId)
      upvotes = upvotes.data.length
      downvotes = downvotes.data.length
      this.setState({upvotes: upvotes})
      this.setState({downvotes: downvotes})
    }
  }

  hasSpoiler(spoilerVal) {
    if (spoilerVal === true) {
      return (
        <span id="spoilerTagR">Spoilers !!!!</span>
      )
    } else {
      return (
        <span>             </span>
      )
    }
  }

  render() {

    let profile_url = '';
    const { admin, authenticateduser, reviewId, datetime, username,
            userImg, movieName, movieId, reviewContent, spoiler, queueComponent} = this.props;

    if (username === authenticateduser) {
      profile_url = '/UserProfile/'
    }
    else {
      profile_url = '/ProfileView/'
    }
    return (
      <div id="review">

        {/* the unordered list that displays the user profile img, username of author and movie for a specific review */}
        <ul>
          <li><span>
          <Link to={{pathname:profile_url +username, state: { currentUser: authenticateduser, profileUser: username }}}>
          <img className="reviewUserPic" src={userImg} alt="User DP"/>
          </Link>
          </span>
          {username}
          </li>
          <li>
            {this.hasSpoiler(spoiler)}
          </li>
          <li>
            <Link id="link" to={{pathname: "/movie/" + movieId, state: { currentUser: authenticateduser }}}>
              {movieName}
            </Link>
          </li>
        </ul>

        {/* Content of the review and the datetime on which it was posted are displayed in the following elements */}
        <span id="contentR">{reviewContent}</span>
        <span id="datetimeR">Posted on : {datetime}</span>

        {/* The comments section for each review is displayed below */}
        <div id="commentsR">
          <h6><b><u>Comments:</u></b></h6>
          <span>
            <div>
              {this.state.comments.map((com) => (<Comment key={uid(com)}
                                                          date={com.date}
                                                          username={com.username}
                                                          content={com.content}
                                                          authenticateduser={authenticateduser}/>))}
            </div>
          </span>
        </div>

        {/* Form into which user can enter a new comment into a post and post it to that review */}
        <Form id="newCom" ref={commentForm => this.commentForm = commentForm}>
          <Form.Row id="writeCom">
            <Form.Group id="writeIt">
              <Form.Control type="newComment" placeholder="Write a Comment" id="comBarR" onChange={this.newComContent}/>
            </Form.Group>
            <Form.Group>
              <Button variant="primary"
                      onClick={() => this.addCommentFunc(reviewId, authenticateduser, this.state.newComment)}>
              Post Comment
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>

        {/* used to upvote or downvote a review */}
        <div>
          <Button id="votes-upR" variant="primary" onClick={() => this.incrementUpvote(reviewId, authenticateduser)}>Upvote ({this.state.upvotes})</Button>
          <Button id="votes-downR" variant="primary" onClick={() => this.incrementDownvote(reviewId, authenticateduser)}>Downvote ({this.state.downvotes})</Button>
        </div>

      </div>
    );
  }
}

export default Review;
