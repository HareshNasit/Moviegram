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
    renderRedirect = () => {
      if (constants.acc.auth) {
        console.log("Haha")
        return <Redirect to='/NewsFeed' />
      }
    }
    changeUser(e) {
      this.setState({username: e.target.value});
   }

   passwordChange(e) {
      this.setState({password: e.target.value});
   }

    buttonClick(){
      console.log(constants)
      if (this.state.username === "username1" && this.state.password === "password1") {
        constants.username = "username1"
        constants.acc.auth = true;
        console.log(constants)
        this.props.history.push("/NewsFeed")
      }
      if (this.state.username === "username2" && this.state.password === "password2") {
        constants.username = "username2"
        constants.acc.auth = true;
        console.log(constants)
        this.props.history.push("/NewsFeed")
      }
    }

    render() {
      return (
        <div className="pageM">
          {this.renderRedirect()}
          <Form className="form">
            <Form.Group className="welcomeText">
              <Form.Label >Welcome to MovieGram</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control type="username" placeholder="Enter username" onChange={this.changeUser}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={this.passwordChange} />
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
