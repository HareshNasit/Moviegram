import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
// import photo from './ballon_dor.jpg'
import Dialog from 'react-bootstrap-dialog';
import Modal from 'react-modal';
import ReviewsList from './../ReviewsList';
import AddReview from './../AddReview';
// import constants file which carries user data
const constants = require("../../constants")

// <Button variant="primary" id="updateButton" onClick={() => this.updateProfile(queueComponent, cancelFunction)} type="submit">Update Profile</Button>
// <Button variant="primary" id="cancelButton" onClick={cancelFunction} type="submit">Cancel</Button>
class EditProfile extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
        username: "Harsh",
        showUpdateProfile: this.props.showFunction,
        newDescription: ""
    };
    this.updateProfile = this.updateProfile.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)

  }

  handleDescriptionChange(event) {
    this.setState({newDescription:event.target.value})
  }

  updateProfile(queueComponent, closeFunc) {
    if(this.state.newDescription === ""){
      console.log("No new description provided")
    }
    else {
      queueComponent.setState({
        userDescription: this.state.newDescription});
    }
    closeFunc()

  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  render() {
    const {queueComponent,cancelFunction,showFunc} = this.props
    return (
      <div id="editProfileModal">
        <div id="pageHeader">
          Update Profile
        </div>
        <div className="editProfileBody">
          <div className="profileInput">
          <Form className="reviewForm">
            <Form.Group controlId="review.movieName">
              <Form.Label>Description</Form.Label>
              <Form.Control type="review" as="textarea" rows="8" placeholder="Enter your Description" onChange={this.handleDescriptionChange}/>
            </Form.Group>
          </Form>
          </div>
          <div className="buttons">
          <Button variant="primary" id="updateButton" onClick={() => this.updateProfile(queueComponent, cancelFunction)} type="submit">Update Profile</Button>
          <Button variant="primary" id="cancelButton" onClick={cancelFunction} type="submit">Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}


export default EditProfile;
