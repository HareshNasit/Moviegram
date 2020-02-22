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
import Review from './Components/Review'
// import AddReview from './Components/AddReview'

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
            <Route exact path='/' render={() =>
                            (<Home/>)}/>
            <Route exact path='/login' render={() =>
                            (<LoginScreen/>)}/>
            <Route exact path='/signup' render={() =>
                            (<SignupScreen/>)}/>
            <Route exact path='/NewsFeed' render={() =>
                            (<NewsFeedScreen/>)}/>
             <Route exact path='/Review' render={() =>
                            (<Review/>)}/>
            <Route exact path='/profile/:id' render={(props) =>
                            (<Profile {...props} />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
