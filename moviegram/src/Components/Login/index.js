import React from 'react';
import './styles.css';
import { Button, Form } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';


const constants = require("../../constants")

class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: "", password: ""};
      this.changeUser = this.changeUser.bind(this);
      this.passwordChange = this.passwordChange.bind(this)
      this.buttonClick = this.buttonClick.bind(this);
    }

    changeUser(e) {
      this.setState({username: e.target.value});
   }

   passwordChange(e) {
      this.setState({password: e.target.value});
   }

    buttonClick(){
      // Handles logging into the site.
      // Will handle authentication in Phase 2
      if (this.state.username === "username1" && this.state.password === "password1") {
        // constants.acc.auth = true;
        this.props.history.push({pathname: "/NewsFeed", state: {username: "username1", auth: true}})
      }
      if (this.state.username === "username2" && this.state.password === "password2") {
        this.props.history.push({pathname: "/NewsFeed", state: {username: "username2", auth: true}})
      }
    }

    render() {
      return (
        <div className="pageM">
          {/* {this.renderRedirect()} */}
          <Form className="form">
            <Form.Group className="welcomeText">
              <Form.Label >Welcome to MovieGram</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control type="username"
                            placeholder="Enter username"
                            onChange={this.changeUser}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password"
                            placeholder="Password"
                            onChange={this.passwordChange} />
            </Form.Group>

              <Button variant="outline-primary"
                      className="loginButton"
                      onClick={this.buttonClick}>
                Login
              </Button>

            <div className="notRegisteredButtonBox">
              <Button className="notRegisteredButton" as={Link}
                      to="/signup" type="submit">New to the site?</Button>
            </div>
        </Form>
        </div>



      );
    }
  }

  export default LoginScreen;
