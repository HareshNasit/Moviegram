import React from 'react';
import './styles.css';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const constants = require("../../constants")
console.log(constants)
class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
    this.changeEmail = this.changeEmail.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.passwordChange = this.passwordChange.bind(this)
  }

  changeEmail(e) {
    this.setState({email: e.target.value});
    console.log(this.state.email);
 }

 passwordChange(e) {
    this.setState({password: e.target.value});
 }

 buttonClick(){
  constants.users.push({user: {email: this.state.email, 
                              password: this.state.password, 
                              username:this.state.username}});
  this.props.history.push("/login")
 }

  render() {
    return (
      <div className="formContainer">
        {this.renderRedirect()}

        <Form className="form">
          <Form.Group className="welcomeText">
            <Form.Label>Signup</Form.Label>
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
                            onClick={this.buttonClick}
                             className="loginButton">
              Signup
            </Button>
            <div className="registeredButtonBox">
              <Button className="alreadyRegisteredButton" as={Link} to="/login" type="submit">Already registered?</Button>
            </div>
                   
          

      </Form>
      </div>
        
      
      
    );
  }
}

  export default SignupScreen;