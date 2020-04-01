// import all react libraries
import React from "react";
import { uid } from "react-uid";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// import all needed Components
import Review from './../Review';
import Comment from './../Comment';



// Class for a Review Component
class ReviewsList extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.buttonId = 0
  // }

  // Creates and returns a unique comments section which contains the comments of each different review
  getCommentsSection(review, authenticateduser) {
    const comments = review.comments;
    return (
      <div>
        {comments.map(com => (<Comment key={uid(com)}
                                       datetime={com.datetime}
                                       username={com.username}
                                       authenticateduser={authenticateduser}
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
                    admin={false}
                    reviewId={review._id}
                    authenticateduser= {authenticateduser}
                    datetime={review.date}
                    username={review.username}
                    userImg={review.image_url}
                    movieName={review.movie_title}
                    reviewContent={review.content}
                    commentsSection={this.getCommentsSection(review, authenticateduser)}
                    queueComponent={queueComponent}/>
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
