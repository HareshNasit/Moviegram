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
import Movie from './Components/Movie'
import Admin from './Components/Admin'



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
            <Route exact path='/admin' render={(props) =>
                            (<Admin {...props} />)}/>
            <Route exact path='/movie/dangal' render={(props) =>
                            (<Movie description="This is a movie" title="Dangal"
                            {...props} />)}/>
            <Route exact path='/movie/avengers: endgame' render={(props) =>
                            (<Movie description="This is a movie" title="Avengers: Endgame"
                             {...props} />)}/>
            <Route exact path='/movie/mission impossible 5' render={(props) =>
                            (<Movie description="This is a movie" title="Mission Impossible 5"
                            {...props} />)}/>
            <Route exact path='/movie/interstellar' render={(props) =>
                            (<Movie description="This is a movie" title="Interstellar"
                             {...props} />)}/>
            <Route exact path='/movie/fate of the furious' render={(props) =>
                            (<Movie description="This is a movie" title="Fate of the Furious"
                            {...props} />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
