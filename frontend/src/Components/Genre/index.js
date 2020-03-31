
import React from 'react';
import './styles.css';
import MainMenuBar from './../MainMenuBar';
import {getMoviesByGenre} from '../../services/api'


class Genre extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: [],
        genre: ""
    }
    async componentDidMount() {
        this.setState({genre: this.props.match.params.genre})
        const genre = this.props.match.params.genre
        const res = await getMoviesByGenre(genre)
        if(res){
            this.setState({genre: genre})
            this.setState({data: res.data})
        }
    }

    render(){
        if(this.state.data == []){
            return(<div>
                <MainMenuBar></MainMenuBar>
                <div>404 No Movies With This Genre Were Found</div>
            </div> 
           );
            }
        else{
            const movieElements = this.state.data.map((movie) =>{
                return <div id={movie._id}>{movie.stars}</div>})
            return(<div>
                <MainMenuBar></MainMenuBar>
                <div id="movieGenreTitle"><h4>{this.state.genre.toUpperCase()}</h4></div>
                {movieElements}
            </div>
            );
        }
        
    }
}
export default Genre;