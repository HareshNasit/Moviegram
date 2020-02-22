import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";

class Review extends React.Component {

  comsOpen = false

  // showComments(comSection) {
  //   if (comsOpen == false) {
  //       comsOpen = true
  //       return ()
  //   }
  // }

  render() {

    const { datetime, username, movieName, reviewContent, commentsSection} = this.props;

    return (
      <div id="review">
        <ul>
          <li>User : {username}</li>
          <li>Movie : {movieName}</li>
        </ul>
        <span className="content">{reviewContent}</span>

        <div className="comments">
          <h6><b><u>Comments:</u></b></h6>
          <span>{commentsSection}</span>
        </div>
        <Form className="newCom">
          <Form.Row className="writeCom">
            <Form.Group className="writeIt">
              <Form.Control type="newComment" placeholder="Write a Comment" className="comBar" />
            </Form.Group>
            <Form.Group className="postIt">
              <Button variant="primary" onClick="" type="submit">Post Comment</Button>
            </Form.Group>
          </Form.Row>
        </Form>

      </div>
    );
  }
}

export default Review;
