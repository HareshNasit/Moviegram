// import all react libraries
import React from "react";
import { uid } from "react-uid";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// import all needed Components
import Review from './../Review';
import Comment from './../Comment';
// import constants file which carries user data
// const constants = require("../../constants")

// Class for a Review Component
class ReviewsList extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.buttonId = 0
  // }

  // Creates and returns a unique comments section which contains the comments of each different review
  getCommentsSection(review) {
    const comments = review.commentsSection;
    return (
      <div>
        {comments.map(com => (<Comment key={uid(com)}
                                       datetime={com.datetime}
                                       username={com.username}
                                       commentContent={com.commentContent}/>))}
      </div>
    )
  }

  render() {

    const { reviews, queueComponent, authenticateduser} = this.props;

    if(reviews.length!=0) {
      return (
        <div className="revs">
          {reviews.map((review) => (
            <Review key={uid(review)}
                    ups={review.upvote}
                    downs={review.downvote}
                    datetime={review.datetime}
                    username={review.username}
                    userImg={review.profImg}
                    movieName={review.movieName}
                    reviewContent={review.reviewContent}
                    commentsSection={this.getCommentsSection(review)}
                    reviewId={review.id}
                    admin={review.admin}
                    queueComponent={queueComponent}
                    authenticateduser= {authenticateduser}/>
          ))}
        </div>
      );
    } else {
      return (
        <div className="norevs">
          <h4>User Has No Reviews</h4>
        </div>
      )
    }
  }
}

export default ReviewsList;
