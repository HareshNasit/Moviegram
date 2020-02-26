
import React from 'react';


class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: this.props.description, 
                      title: this.props.title,
                      imgsrc: this.props.imgsrc}
    }
    render() {

        <div className="movieContainer">
            <div className="imgContainer">
                <img src={this.props.imgsrc} alt="Movie Image"></img>
            </div>
            <div className="titleDescriptionContainer">
                <div className="titleContainer">
                    <p>{this.props.title}</p>
                </div>
                <div className="descriptionContainer">
                    <p>{this.props.description}</p>
                </div>
            </div>
        </div>
    }
}