import React from 'react';
import './styles.css';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const constants = require("../../constants")

class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: "", password: ""};

    }
    
    buttonClick(){
      console.log(constants)
    }

    render() {
      return (
        <div className="pageM">
          <Form className="form">
            <Form.Group className="welcomeText">
              <Form.Label >Welcome to MovieGram</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

              <Button variant="outline-primary" 
                      className="loginButton"
                      onClick={this.buttonClick}>
                Login
              </Button>
              
            <div className="notRegisteredButtonBox">
              <Button className="notRegisteredButton" as={Link} to="/signup" type="submit">New to the site?</Button>
            </div>
        </Form>
        </div>
          
        
        
      );
    }
  }

  export default LoginScreen;