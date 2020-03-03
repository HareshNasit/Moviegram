
import React from 'react';
import './styles.css';
import MainMenuBar from './../MainMenuBar';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: this.props.description,
                      title: this.props.title,
                      imgsrc: this.props.imgsrc}
         // We will retrieve this data from the movies collection in MongoDB
        this.data = {"Dangal": {description:
                        "Mahavir Singh Phogat, a former amateur wrestler trained in the pehlwani style of Indian wrestling, " +
                        "was a national wrestling champion residing in Balali." +
                        "He was forced by his father to give up the sport in order to obtain gainful employment." +
                        " Dejected that he could not win a medal for his country, he vows that his unborn son will." +
                        " Disappointed upon having four daughters, he gives up hope. But when his older daughters Geeta" +
                        " and Babita come home after beating up two boys in response to derogatory comments, " +
                        " he realises their potential to become wrestlers and begins coaching them. ",
                        director:"Amir Fhan",
                    stars: ["Amir Khan", "Mahavir Phogat"]},
                    "Mission Impossible 5" : {description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong. ",
                                            director: "Christopher McQuarrie",
                                            stars: ["Tom Cruise", "Henry Cavill"]},
                    "Interstellar" : {description: " A team of explorers travel through a wormhole in space in an attempt "+
                                                    "to ensure humanity's survival. ", director: "Christopher Nolan",
                                                    stars: ["Matthew McConaughey", "Anne Hathaway"]},
                    "Avengers: Endgame":  {description: " After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, "+
                                                        " the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. ",
                    director: "Director's Name",
                    stars: ["Robert Downey Jr.", "Chris Evans"]},
                    "Fate of the Furious":
                    {description: "When a mysterious woman seduces Dominic Toretto (Vin Diesel)" +
                    " into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test" +
                    " them as never before. ",
                    director: "F. Gary Gray",
                    stars: ["Vin Diesel",  "Jason Statham", "Dwayne Johnson"]}}
    }

    render() {
        return(
                <div className="pageHeaderMovie">
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
                                    <h1 class="titleMovie">Directed by {this.data[this.props.title].director}</h1>
                                </div>
                                <div id="starringContainer">
                                    <h1>Starring</h1>
                                    <div className="starringContainerDiv">
                                        {
                                            this.data[this.props.title].stars.map((obj) => {return(<h4
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
