import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
// import photo from './ballon_dor.jpg'
import Modal from 'react-modal';
import { addImage } from './../../services/api'


// <div className="profileInput">
// <input id="changeProfilePicBtn"
//     accept="image/*"
//     type="file"
//     onChange={this.changeProfilePicFunction}
//     value={this.profilePic}
//     onSubmit={(e) => {
//           e.preventDefault();
//           addImage(e.target, queueComponent.username);
//       }}
//   />
//
// <Form className="reviewForm">
//   <Form.Group controlId="review.movieName">
//     <Form.Label>Description</Form.Label>
//     <Form.Control type="review" as="textarea" rows="8" placeholder="Enter your Description" onChange={this.handleDescriptionChange}/>
//   </Form.Group>
// </Form>
//
// </div>
// <div className="buttons">
// <Button variant="primary" id="updateButton" onClick={(e) => this.updateProfile(e, queueComponent, cancelFunction)} type="submit">Update Profile</Button>
// <Button variant="primary" id="cancelButton" onClick={cancelFunction} type="submit">Cancel</Button>
// </div>



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

  updateProfile(e, queueComponent, closeFunc) {
    console.log(e.target);
    if(this.state.newDescription === "" && this.state.profilePic === ""){
      console.log("No inputs provided")
    }
    else {
       if (this.state.newDescription !== "") {
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
        <React.Fragment>
              <form className="image-form" onSubmit={(e) => {
                  e.preventDefault();
                  console.log(e.target);
                  addImage(e.target, queueComponent.state.username);
              }}>
                  <div className="image-form-field">
                      <label>Choose Image:</label>
                      <input id="image" type="file" />
                  </div>
                  <Button
                      variant="primary"
                      type="submit"
                      id="image-form-submit-button"
                  >
                      Upload Profile Pic
                  </Button>
              </form>
          </React.Fragment>

          <Form className="descriptionForm">
            <Form.Group controlId="review.movieName">
              <Form.Label>Description:</Form.Label>
              <Form.Control type="review" as="textarea" rows="8" placeholder="Enter your Description" onChange={this.handleDescriptionChange}/>
            </Form.Group>
          </Form>

          <div className="buttons">
          <Button variant="primary" id="updateButton" onClick={(e) => this.updateProfile(e, queueComponent, cancelFunction)} type="submit">Update Description</Button>
          <Button variant="primary" id="cancelButton" onClick={cancelFunction} type="submit">Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}


export default EditProfile;
