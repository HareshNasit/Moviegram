import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import functions/api calls for backend and database requets to server
import { addReview,getUserReviews } from './../../services/api'


import profileimgdef from './../MainMenuBar/profile.png';

class AddReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movie: "",
                   review: ""};
    this.saveReview = this.saveReview.bind(this)
    this.handleMovieNameChange = this.handleMovieNameChange.bind(this)
    this.handleReviewContentChange = this.handleReviewContentChange.bind(this)
  }

  async saveReview(queue, closeFunc, username) {
    if(this.state.newComment === "" || this.state.movie === ""){
      console.log("Can't post empty review")
    } else {
      const newReview = { username: username, movie_title: this.state.movie, content: this.state.review,
                          spoilers: false, date: new Date().toLocaleString(), movie_id: 1}
      const added = await addReview(newReview)
      if (added != null) {
        const userReviewsData = await getUserReviews(username);
        const userReviews = userReviewsData.data;
        console.log(userReviews);
        queue.setState({reviews: userReviews})
        closeFunc();
      }
    }
  }

  handleMovieNameChange(event) {
    this.setState({movie:event.target.value})
  }

  handleReviewContentChange(event) {
    this.setState({review:event.target.value})
  }

  render() {

    const { queueComponent, cancelFunction, profImg, username } = this.props

    return (
      <div id="addreviewmain">

         <div className="pageHeader">
            <h3 className="headerText">Add a New Review</h3>
         </div>

         <div className="add-review">
            <ul>
              <li className="reviewUserPicLi"><img className="reviewUserPic" src={profileimgdef} alt="User DP"/></li>
              <li>{username}</li>
            </ul>
            <Form className="reviewForm">
              <Form.Group controlId="review.movieName">
                <Form.Label>Movie</Form.Label>
                <Form.Control type="name" placeholder="Movie Name" onChange={this.handleMovieNameChange}/>
              </Form.Group>
              <Form.Group controlId="review.reviewContent">
                <Form.Label>Review</Form.Label>
                <Form.Control type="review" as="textarea" rows="8" placeholder="Add your Review here" onChange={this.handleReviewContentChange}/>
              </Form.Group>
              <Form.Group controlId="review.reviewContent">
                <Form.Check type="checkbox" className="spoilerCheck">
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Spoilers?</Form.Check.Label>
                </Form.Check>
              </Form.Group>
            </Form>
            <Button variant="primary" className="saveReviewBtn" onClick={() => this.saveReview(queueComponent, cancelFunction, username)} type="submit">Post Review</Button>
            <Button variant="primary" className="cancelAddRevPage" onClick={cancelFunction} type="submit">Cancel</Button>
        </div>

      </div>
    );
  }
}

export default AddReview;
