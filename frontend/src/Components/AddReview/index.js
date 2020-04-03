import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
import ErrorModal from './../ErrorModal';
import { addReview,getUserReviews } from './../../services/api'


import profileimgdef from './../MainMenuBar/profile.png';

class AddReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movie: "",
                   review: "",
                   movies: [],
                   turnAlert: false,
                   error: ""};
    this.saveReview = this.saveReview.bind(this)
    this.handleMovieNameChange = this.handleMovieNameChange.bind(this)
    this.handleReviewContentChange = this.handleReviewContentChange.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(){
   this.setState({turnAlert: false})
  }

  async saveReview(queue, closeFunc, authenticateduser) {
    if(this.state.newComment === "" || this.state.movie === ""){
      console.log("Can't post empty review")
      this.setState({error: "Cannot post an empty/incomplete review. Make sure to fill in all fields"})
      this.setState({turnAlert: true})
    } else {
      const newReview = { username: authenticateduser, movie_title: this.state.movie, content: this.state.review,
                          spoilers: false, date: new Date().toLocaleString(), movie_id: 1}
      const added = await addReview(newReview)
      queue.state.reviews.unshift(newReview)
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

    const { queueComponent, cancelFunction, profImg, authenticateduser } = this.props

    return (
      <div id="addreviewmain">

         <div className="pageHeader">
            <h3 className="headerText">Add a New Review</h3>
         </div>

         <div className="add-review">
            <ul>
              <li className="reviewUserPicLi"><img className="reviewUserPic" src={profImg} alt="User DP"/></li>
              <li>{authenticateduser}</li>
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
            <Button variant="primary" className="saveReviewBtn" onClick={() => this.saveReview(queueComponent, cancelFunction, authenticateduser)} type="submit">Post Review</Button>
            <Button variant="primary" className="cancelAddRevPage" onClick={cancelFunction} type="submit">Cancel</Button>
            <ErrorModal closeModal={this.closeModal} show={this.state.turnAlert} error={this.state.error}></ErrorModal>
        </div>

      </div>
    );
  }
}

export default AddReview;
