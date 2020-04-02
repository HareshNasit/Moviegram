
import React from 'react';
import './styles.css';
import MainMenuBar from './../MainMenuBar';
import {getMovie} from '../../services/api'


class Movie extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: {title: "", imgsrc: "", director: "", genres: [], stars: []}
    }
    async componentDidMount() {
        const res = await getMovie(this.props.match.params.param1)
        if(!res.data){
            if(this.state.username){
                this.props.history.push({pathname: "/Newsfeed"})
            }else{
                this.props.history.push({pathname: "/"})
            }
            
        } else{
            this.setState({data: res.data});
        }
    }

    render() {
        return(
                <div className="pageHeaderMovie">
                    <MainMenuBar/>
                    <div className="movieContent">
                        <div className="movieContainer">
                            <div className="imgContainer">
                                <img src={this.state.data.imgsrc} className="movieImage" alt="Movie Image"></img>
                            </div>
                            <div className="contentContainer">
                                <div className="titleContainer">
                                    <h1 className="title">{this.state.data.title}</h1>
                                </div>
                                <div className="directorContainer">
                                    <h1 className="titleMovie">Directed by {this.state.data.director}</h1>
                                </div>
                                <div id="starringContainer">
                                    <h1>Starring</h1>
                                    <div className="starringContainerDiv">
                                        {
                                            this.state.data.stars.map((obj) => {return(<h4
                                            className="starringText">
                                                {obj}
                                            </h4>);})
                                        }
                                    </div>

                                </div>
                                <div className="ratingContainer">
                                    <p className="ratingText">
                                        Audience Rating: 50%
                                    </p>
                                </div>
                                <div className="descriptionContainerM">
                                    <p className="description">{this.state.data.description}</p>
                                </div>
                            </div>
                       </div>
                    </div>
                    </div>
        );
    }
}

export default Movie;
