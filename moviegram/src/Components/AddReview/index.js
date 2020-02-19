import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class AddReview extends React.Component {

  render() {

    const { username, movieName, reviewContent, commentsSection} = this.props;

    return (
      <div id="addreviewmain">

         <div className="pageHeader">
            <h3 className="headerText">Add a New Review</h3>
         </div>
      
         <div className="add-review">
            <ul>
              <li>User : {username}</li>
            </ul>
         </div>
      
      </div>
    );
  }
}

export default AddReview;
