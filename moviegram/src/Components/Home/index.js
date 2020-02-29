import React from 'react';
import './styles.css'
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import ReactSearchBox from 'react-search-box'




class Home extends React.Component {
  data = [
    {
      key: 'dangal',
      value: 'Dangal',
    },
    {
      key: 'avengers endgame',
      value: 'Avengers: Endgame',
    },
    {
      key: 'mission impossible 5',
      value: 'Mission Impossible 5',
    },
    {
      key: 'interstellar',
      value: 'Interstellar',
    },
    {
      key: 'fast and furious 8',
      value: 'Fast and Furious 8',
    },
  ]
  handleEvent(movie) {
    console.log(movie);
    window.location.href = "/movie/" + movie;
  }
    render() {
      return (
        <div className="Home">
      	  <div className="Background center">
          </div>


        	<div className="Banner">
      			<img src={require("./static/Banner.jpg")} />
      		</div>

      		<div className="searchMovie">
            <ReactSearchBox
            placeholder="Search Movie"
            data={this.data}
            onSelect={event => this.handleEvent(event.value)}
            />
        	</div>

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
