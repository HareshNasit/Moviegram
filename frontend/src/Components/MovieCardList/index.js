// import all react libraries
import React from "react";
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// import all needed Components
import MovieCard from './../MovieCard';

class MovieCardList extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const {movies, queueComponent } = this.props;
    if (movies.length != 0){
      return (
        <div className="movies">
        {movies.map((movie) => (
          <MovieCard movieID = {movie._id}
                     title = {movie.title}
                     imageURL = {movie.imgsrc}
                     queueComponent = {queueComponent}
                     history={this.props.history}/>
        ))}
        </div>
      )
    }else {
      return (
        <div className="nomovie">
          <h4>There are no movies in the database</h4>
        </div>
      )
    }
  }

}

export default MovieCardList;
