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
import Profile from './Components/Profile'



class App extends React.Component {

  state = {
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
                            (<LoginScreen {...props} />)}/>
            <Route exact path='/signup' render={(props) =>
                            (<SignupScreen {...props} />)}/>
            <Route exact path='/NewsFeed' render={(props) =>
                            (<NewsFeedScreen {...props} />)}/>
             <Route exact path='/AddReview' render={(props) =>
                            (<AddReview {...props} />)}/>
            <Route exact path='/profile/:id' render={(props) =>
                            (<Profile {...props} />)}/>
            <Route exact path='/userProfile' render={(props) =>
                            (<UserProfile {...props} />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
