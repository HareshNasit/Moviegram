import React from "react";
import Modal from "react-modal";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

import MainMenuBar from './../MainMenuBar';
import profileimgdef from './../MainMenuBar/profile.png';

const constants = require("../../constants")

class AddReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movie: "",
                   review: ""};
    this.currUser = constants.acc.username;
    this.saveReview = this.saveReview.bind(this)
    this.handleMovieNameChange = this.handleMovieNameChange.bind(this)
    this.handleReviewContentChange = this.handleReviewContentChange.bind(this)
  }

  saveReview(queue, closeFunc, pic) {
    if(this.state.newComment === "" || this.state.movie === ""){
      console.log("Can't post empty review")
    } else {
      const newReview = { id: queue.state.reviews.length, username: "username1", movieName: this.state.movie ,
                          profImg: pic, datetime: new Date().toLocaleString(), reviewContent: this.state.review,
                          commentsSection: [] }
      let userReviews = queue.state.reviews
      userReviews.push(newReview)
      queue.setState({
        reviews: userReviews
      });
      console.log("New Review Added")
      closeFunc();
    }
  }

  handleMovieNameChange(event) {
    this.setState({movie:event.target.value})
  }

  handleReviewContentChange(event) {
    this.setState({review:event.target.value})
  }

  render() {

    const {queueComponent,cancelFunction,profImg} = this.props

    return (
      <div id="addreviewmain">

         <div className="pageHeader">
            <h3 className="headerText">Add a New Review</h3>
         </div>

         <div className="add-review">
            <ul>
              <li className="reviewUserPicLi"><img className="reviewUserPic" src={profileimgdef} alt="User DP"/></li>
              <li>username1</li>
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
            <Button variant="primary" className="saveReviewBtn" onClick={() => this.saveReview(queueComponent, cancelFunction, profImg)} type="submit">Post Review</Button>
            <Button variant="primary" className="cancelAddRevPage" onClick={cancelFunction} type="submit">Cancel</Button>
        </div>

      </div>
    );
  }
}

export default AddReview;
