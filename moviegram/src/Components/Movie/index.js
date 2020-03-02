
import React from 'react';
import './styles.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: this.props.description,
                      title: this.props.title,
                      imgsrc: this.props.imgsrc}
    }
    render() {
        return(
        <div className="movieContainer">
            <div className="imgContainer">
                <img src={this.props.imgsrc} className="movieImage" alt="Movie Image"></img>
            </div>
            <div className="contentContainer">
                <div className="titleContainer">
                    <h1 className="title">{this.props.title}</h1>
                </div>
                <div className="ratingContainer">
                    <p className="ratingText">
                        Audience Rating: 50%
                    </p>
                </div>
                <div className="descriptionContainer">
                    <p className="description">{this.props.description}</p>
                </div>
            </div>
        </div>)
    }
}

export default Movie;
