import React from 'react';
import './styles.css';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SignupScreen extends React.Component {
  render() {
    return (
      <div className="formContainer">
        <Form className="form">
          <Form.Group className="welcomeText">
            <Form.Label>Signup</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          
          
           
            <Button variant="outline-primary" type="submit" className="loginButton">
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