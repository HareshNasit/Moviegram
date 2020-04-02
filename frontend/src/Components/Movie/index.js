
import React from 'react';
import './styles.css';
import MainMenuBar from './../MainMenuBar';
import {getMovie} from '../../services/api'


import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



class Movie extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: {title: "", imgsrc: "", Director: "", genres: [], stars: []}
    }
    async componentDidMount() {
        const res = await getMovie(this.props.match.params.param1)
        console.log(res)
        if(!res.data){
            // if(this.state.username){
            //     this.props.history.push({pathname: "/Newsfeed"})
            // }else{
            //     this.props.history.push({pathname: "/"})
            // }
            
        } else{
            this.setState({data: res.data});
        }
    }

    makeGenresString(genres_object){
        const genres = Object.keys(genres_object).filter((val) => genres_object[val])
        if(genres == []){
            return "None"
        }
        let string = genres[0]
        for(let i = 1; i < genres.length; i++){
            string += `, ${genres[i]}`
        }
        return string
    }
    render() {
        if(this.state.data.title == ""){
            return(<div>
                <MainMenuBar/>
                <div>
                    <h1>
                    404 Movie Not Found
                    </h1>
                </div>
            </div>);
        }
        return(
        <div>
            <MainMenuBar/>
            <div id="movieContent">
                <Card id="movieContainer">
                    <CardContent id="imgContainer">
                            <img src={this.state.data.imgsrc}
                            className="movieImage" 
                            alt="Movie Image"></img>
                    </CardContent>
                    <CardContent id="movieDetails">
                            <CardContent>
                            <Typography align="center" gutterBottom variant="h3" component="h1">
                                {this.state.data.title}
                            </Typography>
                            <Typography variant="body2" color="textPrimary" component="p">
                                Genres: {this.makeGenresString(this.state.data.genres)}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.state.data.description}
                            </Typography>
                            </CardContent>
                            <CardContent>
                                     <Typography align="center" variant="h4">
                                            Directed by: {this.state.data.Director}
                                        </Typography>
                            </CardContent>
                            <CardContent align="center">
                                        <Typography align="center" variant="h4">
                                            Starring
                                        </Typography>
                                        <CardContent id="stars">
                                        {
                                            this.state.data.stars.map((obj) => {return(<Typography key={obj} gutterBottom variant="h6">
                                                {obj}
                                            </Typography>
                                            );})
                                        }
                                        </CardContent>
                            
                            </CardContent>

                    </CardContent>
                </Card>
            </div>

        </div>
            
                // <div className="pageHeaderMovie">
                //     <MainMenuBar/>
                //     <div className="movieContent">
                //         <div className="movieContainer">
                //             <div className="imgContainer">
                //                 <img src={this.state.data.imgsrc} className="movieImage" alt="Movie Image"></img>
                //             </div>
                //             <div className="contentContainer">
                //                 <div className="titleContainer">
                //                     <h1 className="title">{this.state.data.title}</h1>
                //                 </div>
                //                 <div className="directorContainer">
                //                     <h1 className="titleMovie">Directed by {this.state.data.director}</h1>
                //                 </div>
                //                 <div id="starringContainer">
                //                     <h1>Starring</h1>
                //                     <div className="starringContainerDiv">
                //                         {
                //                             this.state.data.stars.map((obj) => {return(<h4
                //                             className="starringText">
                //                                 {obj}
                //                             </h4>);})
                //                         }
                //                     </div>

                //                 </div>
                //                 <div className="ratingContainer">
                //                     <p className="ratingText">
                //                         Audience Rating: 50%
                //                     </p>
                //                 </div>
                //                 <div className="descriptionContainerM">
                //                     <p className="description">{this.state.data.description}</p>
                //                 </div>
                //             </div>
                //        </div>
                //     </div>
                //     </div>
        );
    }
}

export default Movie;
