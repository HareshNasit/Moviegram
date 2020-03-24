import React from 'react';
import './styles.css';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {login} from '../../services/api'

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
l
   passwordChange(e) {
      this.setState({password: e.target.value});
   }

    buttonClick(app){
      // Handles logging into the site.
      login(this, app) // NEED TO PUT THIS INTO A PROMISE BECAUSE IT'S ASYNC AND 
      // PUT THE NEXT FEW LINES INTO IT
    
      if(app.state.currentUser != null){
        console.log("HA")
        this.props.history.push({pathname: "/NewsFeed", state: {username: this.state.username, auth: true}})
      }
    }

    render() {
      const { app } = this.props
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
                      onClick={() => this.buttonClick(app)}>
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
