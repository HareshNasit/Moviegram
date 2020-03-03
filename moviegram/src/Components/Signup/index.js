import React from 'react';
import './styles.css';
import { Button, Form, Modal } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Avatar from '@material-ui/core/Avatar';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.genreNames = ["Supernatural", 
                       "Fantasy", 
                       "Crime", 
                       "Action",
                       "Horror",
                       "Thriller",
                       "Comedy"]
    this.state = {email: "", password: "", genresShow: false, genres: 
            {Supernatural: false, 
              Horror: false, 
              Fantasy: false, 
              Crime: false,
              Action: false,
              Thriller: false,
              Comedy: false
    }};
    this.changeEmail = this.changeEmail.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.passwordChange = this.passwordChange.bind(this)

  }

  changeEmail(e) {
    this.setState({email: e.target.value});
 }

  passwordChange(e) {
      this.setState({password: e.target.value});
  }

  buttonClick(){
    // In Phase 2 Will check if username already exists in DB
    // Will also upload img to DB
    if(this.state.email != "" 
          && this.state.password != "" 
          && this.state.username != ""){
            this.props.history.push({pathname: "/NewsFeed", 
            state: {username: this.state.username}})
    }
  }
  handleUpload(e){
    // Change avatar image
    const object = e.target.files[0]
    const objectURL = URL.createObjectURL(object)
    this.setState({srcImage: objectURL})
  }

  // renderRedirect = () => {
  //   if (constants.acc.auth) {
  //     return <Redirect to='/NewsFeed' />
  //   }
  // }


  render() {
    return (
      <div className="formContainer">
        {/* {this.renderRedirect()} */}
     
        <Form className="form">
          <Form.Group className="welcomeText">
            <Form.Label className="centerText">Signup</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username"  />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.changeEmail} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.passwordChange} />
          </Form.Group>

          <Button variant="outline-primary"
                    className="addGenreButton"
                    onClick={() => this.setState({genresShow: true})}
                    >
                    Add Genres
                  </Button>
          <Form.Group className="centerAvatar">
                <Avatar id="avatar" alt="Remy Sharp" src={this.state.srcImage}/>
          </Form.Group>
          <Form.Group>
            <Form.Label className="selectImage">Select your profile picture</Form.Label>
            <input
              accept="image/*"
              type="file"
              onChange={ (event) => this.handleUpload(event) }
            />
          </Form.Group>
          {/* When the user presses this button, the data will be sent to the 
          database and create a new user */}
            <Button variant="outline-primary"
                            onClick={this.buttonClick}
                             className="loginButton">
              Signup
            </Button>
            <div className="registeredButtonBox">
              <Button className="alreadyRegisteredButton" as={Link} to="/login" 
              type="submit">Already registered?</Button>
            </div>
      </Form>

      <Modal
        show={this.state.genresShow}
        onHide={() => this.setState({genresShow: false})}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Select your favourite Genres
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup className="checkBoxesContainer">
              {this.genreNames.map( (obj) => {
                 return(<FormControlLabel
                 control={
                   <Checkbox 
                             checked={this.state.genres[obj]} 
                             onChange={() => this.setState(prevState => {
                               let genres = Object.assign({}, prevState.genres);  
                               genres[obj] = !genres[obj]                  
                               return { genres };                                 
                             })} 
                             value="Horror" />
                           
                 }
                 label={obj}
               />);
              }
              )}
             
          </FormGroup>
        </Modal.Body>
      </Modal>
      </div>



    );
  }
}

  export default SignupScreen;
