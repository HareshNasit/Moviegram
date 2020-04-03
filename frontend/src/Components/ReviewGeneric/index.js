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
import { getUpvoters,getDownvoters,getReview }  from './../../services/api'



// Class for a Review Component
class ReviewGeneric extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the implemented methods to this class that need to access variables of defined inside the constructor.
  constructor(props) {
    super(props)
    this.state = { newComment: "", upvotes: 0, downvotes: 0, comments: []};
    this.getCommentsSection = this.getCommentsSection.bind(this)
  }

  async componentDidMount() {
    let review = await getReview(this.props.reviewId)
    review = review.data
    this.setState({comments: review.comments})
    let upvotes = await getUpvoters(this.props.reviewId)
    let downvotes = await getDownvoters(this.props.reviewId)
    upvotes = upvotes.data.length
    downvotes = downvotes.data.length
    this.setState({upvotes: upvotes})
    this.setState({downvotes: downvotes})
  }

  // Creates and returns a unique comments section which contains the comments of each different review
  getCommentsSection() {
    const comments = this.state.comments;
    return (
      <div>
        {comments.map((com) => (<Comment key={uid(com)}
                                       date={com.date}
                                       username={com.username}
                                       content={com.content}
                                       authenticateduser={this.props.authenticateduser}/>))}
      </div>
    )
  }

  render() {

    let profile_url = '';
    const { admin, reviewId, authenticateduser, datetime, username, userImg, movieName, reviewContent, queueComponent} = this.props;

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
          <li>
          <Link to={{pathname:profile_url +username, state: { username: authenticateduser, profileUser: username }}}>
          <span className="reviewUserPicLi"><img className="reviewUserPic" src={userImg} alt="User DP"/></span>
          </Link>{username}
          </li>

          <li>{movieName}</li>
        </ul>

        {/* Content of the review and the datetime on which it was posted are displayed in the following elements */}
        <span className="content">{reviewContent}</span>
        <span className="datetime">Posted on : {datetime}</span>

        {/* The comments section for each review is displayed below */}
        <div className="comments">
          <h6><b><u>Comments:</u></b></h6>
          <span>{this.getCommentsSection()}</span>
        </div>

        {/* used to upvote or downvote a review */}
        <div className="votes">
          <Button className="votes-up" variant="primary">Upvotes ({this.state.upvotes})</Button>
          <Button className="votes-down" variant="primary">Downvotes ({this.state.downvotes})</Button>
        </div>

      </div>
    )


  }
}

export default ReviewGeneric;