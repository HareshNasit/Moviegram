import React from 'react';
import './styles.css'
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import ReactSearchBox from 'react-search-box'




class Home extends React.Component {
  data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]
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
            onSelect={record => console.log(record)}
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
