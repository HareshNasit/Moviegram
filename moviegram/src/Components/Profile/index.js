/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

const profiles = {
    'yosef98' : { description: "I like Pulp Fiction"
    },
    'bhavya' : { description: "I like documentaries about Messi"
    }
}


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
