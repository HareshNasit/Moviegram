// Methods in this file modifies the Queue component state

// Function to add a comment to a review
export const addCommentFunc = (queue, comment) => {
  let reviewsList = queue.state.reviews
  console.log(reviewsList)
  console.log(comment)
  // reviewsList[].commentsSection.push(comment)
  queue.setState({
    reviews: reviewsList
  });
}
