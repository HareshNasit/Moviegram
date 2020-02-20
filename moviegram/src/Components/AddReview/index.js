import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import MainMenuBar from './../MainMenuBar';

class AddReview extends React.Component {

  render() {

    const { username } = this.props;

    return (
      <div id="addreviewmain">
         <MainMenuBar/>

         <div className="pageHeader">
            <h3 className="headerText">Add a New Review</h3>
         </div>

         <div className="add-review">
            <ul>
              <li>User : {username}</li>
            </ul>
            <Form className="reviewForm">
              <Form.Group controlId="review.movieName">
                <Form.Label>Movie</Form.Label>
                <Form.Control type="name" placeholder="Movie Name" />
              </Form.Group>
              <Form.Group controlId="review.reviewContent">
                <Form.Label>Review</Form.Label>
                <Form.Control type="review" as="textarea" rows="8" placeholder="Add your Review here" />
              </Form.Group>
              <Form.Group controlId="review.reviewContent">
                <Form.Check type="checkbox" className="spoilerCheck">
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Spoilers?</Form.Check.Label>
                </Form.Check>
              </Form.Group>
            </Form>
            <Button variant="primary" className="saveReviewBtn" onClick="" type="submit">Post Review</Button>
         </div>

      </div>
    );
  }
}

export default AddReview;
