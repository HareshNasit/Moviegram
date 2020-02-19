import React from 'react';
import './styles.css'
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';




class Home extends React.Component {
    render() {
      return (
      	<div className="Background center">

        	<div className="Banner">
      			<img src={require("./static/Banner.jpg")} />
      		</div>

      		<Form className="searchMovieform">
          	  <Form.Group>
            	<Form.Control type="searchMovie" placeholder="Search Movie" />
              </Form.Group>
        	</Form>

        	<Button variant="outline-primary"
                      type="submit"
                      className="searchButton">
                Search
            </Button>

            <div className="Login_Signup">
              <Button className="Login_SignupButton" as={Link} to="/login" type="submit">Login/Signup</Button>
            </div>


      	</div>

      );
    }
  }

  export default Home;
