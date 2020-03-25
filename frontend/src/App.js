/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginScreen from './Components/Login';
import SignupScreen from './Components/Signup';
import NewsFeedScreen from './Components/NewsFeed'
import AddReview from './Components/AddReview'
import UserProfile from './Components/UserProfile'
import ProfileView from './Components/ProfileView'
import Movie from './Components/Movie'
import Admin from './Components/Admin'


import { readCookie } from './services/api.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    readCookie(this) // sees if a user is logged in.
  }
  state = {
    currentUser: null
  }

  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={(props) =>
                            (<Home {...props} />)}/>
            <Route exact path='/login' render={(props) =>
                            (<LoginScreen {...props} app={this} />)}/>
            <Route exact path='/signup' render={(props) =>
                            (<SignupScreen {...props} />)}/>
            <Route exact path='/NewsFeed' render={(props) =>
                            (<NewsFeedScreen {...props} />)}/>
             <Route exact path='/AddReview' render={(props) =>
                            (<AddReview {...props} />)}/>
            <Route exact path='/userProfile/:id' render={(props) =>
                            (<UserProfile {...props} />)}/>
            <Route exact path='/admin' render={(props) =>
                            (<Admin {...props} />)}/>
            <Route path="/movie/:param1" component={Movie}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
