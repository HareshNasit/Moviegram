import React from 'react';
import './styles.css';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class LoginScreen extends React.Component {
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
                      type="submit" 
                      className="loginButton">
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