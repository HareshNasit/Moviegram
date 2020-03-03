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

    const { reviews, queueComponent} = this.props;

    return (

      <div className="revs">
        {reviews.map((review) => (
          <Review key={uid(review)}
                  datetime={review.datetime}
                  username={review.username}
                  userImg={review.profImg}
                  movieName={review.movieName}
                  reviewContent={review.reviewContent}
                  commentsSection={this.getCommentsSection(review)}
                  reviewId={review.id}
                  admin={review.admin}
                  queueComponent={queueComponent}/>
        ))};
      </div>
    );
  }
}

export default ReviewsList;
