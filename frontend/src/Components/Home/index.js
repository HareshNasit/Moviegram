import React from 'react';
import './styles.css'
import { Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar'
import GenreSearchBar from '../GenreSearchBar'
import MovieCardList from '../MovieCardList';
import { getAllMovies } from './../../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies: []};
    this.splitMovies = this.splitMovies.bind(this)
  }

  splitMovies(movieList) {
    // let temp = [];
    // let movieGrouped = [];
    // for (let i = 0, j = 0; i < movieList.length; i++){
    //   if (i >= 3 && i%3 === 0){ j++; }
    //   temp[j] = temp[j] || []
    //   temp[j].push(movieList[i])
    // }
    // return [temp];

    let result = [];
    for (let i = 0; i < movieList.length; i += 3) result.push(movieList.slice(i, i + 3));
    return result;

  }
  async componentDidMount() {
    const movieList = await getAllMovies();
    const list = this.splitMovies(movieList.data)
    console.log(list)
    this.setState({movies: list})
  }


    render() {
      const movieListGrouped = this.state.movies.map((group) =>
        <div className="movieList">
            <MovieCardList movies = {group}
                           queueComponent = {this} />
        </div>
      );

      return (

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
            <div className="spacingBox">

            </div>
            <div className="movieHeader">
             <h3 id="movieHeader">Browse Movies</h3>
            </div>
            {movieListGrouped}

          </div>

      );
    }
  }

  export default Home;
