/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends React.Component {

    state = {
    }
    
    render() {
      return (
          <div>
             <p><a>PlaceHolder: {this.props.match.params.id}</a></p> 
        </div>
      );  
    }
  }



export default Profile;
