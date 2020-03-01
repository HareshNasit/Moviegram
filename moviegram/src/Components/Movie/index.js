
import React from 'react';
import './styles.css';
import MainMenuBar from './../MainMenuBar';


class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: this.props.description, 
                      title: this.props.title,
                      imgsrc: this.props.imgsrc}
        this.data = {"Dangal": {description: 
                        "Mahavir Singh Phogat, a former amateur wrestler trained in the pehlwani style of Indian wrestling, " + 
                        "was a national wrestling champion residing in Balali." +
                        "He was forced by his father to give up the sport in order to obtain gainful employment." +
                        "Dejected that he could not win a medal for his country, he vows that his unborn son will." +
                        "Disappointed upon having four daughters, he gives up hope. But when his older daughters Geeta" + 
                        "and Babita come home after beating up two boys in response to derogatory comments, " + 
                        "he realises their potential to become wrestlers and begins coaching them. ",
                        director:"Amir Fhan",
                    stars: ["Amir Khan", "Mahavir Phogat"]},
                    "Mission Impossible 5" : {description: "Nothing to see here", director: "Christopher Nolan",
                    stars: []},
                    "Interstellar" : {description: "Nothing to see here", director: "Director's Name",stars: []},
                    "Avengers: Endgame":  {description: "Nothing to see here", director: "Director's Name",stars: []},
                    "Fate of the Furious":  {description: "Nothing to see here", director: "Director's Name",stars: []}}
    }
    
    render() {
        return(
                <div className="pageHeader">
                    <MainMenuBar/>
                    <div className="movieContent">
                        <div className="movieContainer">
                            <div className="imgContainer">
                                <img src={this.props.imgsrc} className="movieImage" alt="Movie Image"></img>
                            </div>
                            <div className="contentContainer">
                                <div className="titleContainer">
                                    <h1 class="title">{this.props.title}</h1>
                                </div>
                                <div className="directorContainer">
                                    <h1 class="title">Directed by {this.data[this.props.title].director}</h1>
                                </div>
                                <div id="starringContainer">
                                    <h1>Starring</h1>
                                    <div>
                                        {
                                            this.data[this.props.title].stars.map((obj) => {return(<h3>
                                                {obj}
                                            </h3>);})
                                        }
                                    </div>
                                    
                                </div>
                                <div className="ratingContainer">
                                    <p className="ratingText">
                                        Audience Rating: 50%
                                    </p>
                                </div>
                                <div className="descriptionContainer">
                                    <p class="description">{this.data[this.props.title].description}</p>
                                </div>
                            </div>
                       </div>
                    </div>
                    </div>


        )
    }
}

export default Movie;