// Methods in this file modifies the Queue component state

// Function to add a comment to a review
export const addCommentFunc = (queue, comment, reviewId) => {
  let reviewsList = queue.state.reviews
  let review = reviewsList[reviewId]
  console.log(reviewsList)
  console.log(review)
  console.log(comment)
  // review.commentsSection.push(comment)
  queue.setState({
    reviews: reviewsList
  });
}
