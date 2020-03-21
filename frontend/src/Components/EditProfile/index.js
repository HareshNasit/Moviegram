import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
// import photo from './ballon_dor.jpg'
import Dialog from 'react-bootstrap-dialog';
import Modal from 'react-modal';


// <Button variant="primary" id="updateButton" onClick={() => this.updateProfile(queueComponent, cancelFunction)} type="submit">Update Profile</Button>
// <Button variant="primary" id="cancelButton" onClick={cancelFunction} type="submit">Cancel</Button>
class EditProfile extends React.Component {
  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
        username: "Harsh",
        showUpdateProfile: this.props.showFunction,
        newDescription: "",
        profilePic: "",
    };
    this.updateProfile = this.updateProfile.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.changeProfilePicFunction = this.changeProfilePicFunction.bind(this)

  }

  handleDescriptionChange(event) {
    this.setState({newDescription:event.target.value})
  }

  updateProfile(queueComponent, closeFunc) {
    if(this.state.newDescription === "" && this.state.profilePic === ""){
      console.log("No inputs provided")
    }
    else {
       if (this.state.newDescription != "") {
        queueComponent.setState({
          userDescription: this.state.newDescription});
      }
       if (this.state.profilePic !== "") {
        queueComponent.setState({
          profilePic: this.state.profilePic});
      }
    }
    closeFunc()

  }

  changeProfilePicFunction(event) {
      this.setState({profilePic:  URL.createObjectURL(event.target.files[0])});
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
          <input id="changeProfilePicBtn"
              accept="image/*"
              type="file"
              onChange={this.changeProfilePicFunction}
              value={this.profilePic}
            />

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
