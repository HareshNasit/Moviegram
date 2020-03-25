import React from 'react';
import './styles.css'
import { Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar'

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
      key: 'fate of the furious',
      value: 'Fate of The Furious',
    },
  ]
  
    render() {
      return (
        <div className="Home">
      	  
          <div className="HomeContent">
            <div className="Banner">
              <img src={require("./static/Banner.jpg")} />
            
            </div>
            <div className="searchMovie">
              <SearchBar/>
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
