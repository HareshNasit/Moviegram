import React from 'react';
import './styles.css'
import { Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar'
import GenreSearchBar from '../GenreSearchBar'

class Home extends React.Component {
    render() {
      return (
        <div className="Home">
      	  
          <div className="HomeContent">
            <div className="Banner">
              <img src={require("./static/Banner.jpg")} />
            
            </div>
            <div className="searchMovie">
              <SearchBar history={this.props.history}/>
            </div>
            <div className="spacingBox">

            </div>
            <div className="searchMovie">
              <GenreSearchBar history={this.props.history}/>
            </div>
            <div className="spacingBox">

            </div>
            <div className="Login_Signup">
                <Button as={Link} to="/login" type="submit">Login/Signup</Button>
            </div>

          </div>
        	


        </div>

      );
    }
  }

  export default Home;
