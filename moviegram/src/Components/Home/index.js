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

      		<Form className="searchMovie">
          	  <Form.Group>
            	<Form.Control type="searchMovie" placeholder="Search Movie" />
              </Form.Group>
        	</Form>

          <div className="searchButton">
              <Button type="submit" variant="outline-primary">Search</Button>
          </div>
          <div className="Login_Signup">
              <Button as={Link} to="/login" type="submit">Login/Signup</Button>
          </div>


      	</div>

      );
    }
  }

  export default Home;
