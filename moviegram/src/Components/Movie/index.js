
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
                    <h1 class="title">{this.props.title}</h1>
                </div>
                <div className="descriptionContainer">
                    <p class="description">{this.props.description}</p>
                </div>
            </div>
        </div>)
    }
}

export default Movie;