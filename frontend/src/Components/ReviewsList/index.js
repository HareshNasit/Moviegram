// import all react libraries
import React from "react";
import { uid } from "react-uid";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// import all needed Components
import Review from './../Review';
import ReviewGeneric from './../ReviewGeneric';



// Class for a Review Component
class ReviewsList extends React.Component {

  render() {

    const { reviews, type, queueComponent, authenticateduser} = this.props;

    if(reviews.length!=0) {
      if (type=="generic"){
        return (
          <div className="revs">
            {reviews.map((review) => (
              <ReviewGeneric key={uid(review)}
                      admin={false}
                      reviewId={review._id}
                      authenticateduser= {authenticateduser}
                      datetime={review.date}
                      username={review.username}
                      userImg={review.image_url}
                      movieName={review.movie_title}
                      reviewContent={review.content}
                      queueComponent={queueComponent}/>
            ))}
          </div>
        );
      } else {
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
                      queueComponent={queueComponent}/>
            ))}
          </div>
        );
      }
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
