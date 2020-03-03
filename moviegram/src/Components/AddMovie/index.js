import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";

class AddMovie extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: "",
                  director: "",
                  stars: [],
                  description: ""}
    this.handleMovieNameChange = this.handleMovieNameChange.bind(this)
    this.handleDirectorChange = this.handleDirectorChange.bind(this)
    this.handleCastChange = this.handleCastChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.saveMovie = this.saveMovie.bind(this)

  }

  handleMovieNameChange(event) {
    this.setState({title:event.target.value})
  }
  handleDirectorChange(event) {
    this.setState({director:event.target.value})
  }
  handleCastChange(event) {
    const stars_arr = event.target.value.split(",");
    this.setState({stars:stars_arr});
  }
  handleDescriptionChange(event) {
    this.setState({description:event.target.value});
  }

  saveMovie (closeFunc) {
    closeFunc();
  }

  render() {
    const {cancelFunction} = this.props;
    return(
      <div id = "AddMovieMain">

        <div className = "Add-Movie">
          <div className="Header">
            <h3 className="headerText">Add a New Movie</h3>
          </div>
          <Form className="MovieForm">
            <Form.Group>
              <Form.Label>Movie</Form.Label>
              <Form.Control type="name" placeholder="Movie Name" onChange={this.handleMovieNameChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Director</Form.Label>
              <Form.Control type="name" placeholder="Director's Name" onChange={this.handleDirectorChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Cast</Form.Label>
              <Form.Control type="list" placeholder="Enter the Stars seperated by comma" onChange={this.handleCastChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="description" as="textarea" rows="8" placeholder="Add a description for the movie" onChange={this.handleDescriptionChange}/>
            </Form.Group>
          </Form>
          <Button variant="primary" className="saveReviewBtn" onClick={() => this.saveMovie(cancelFunction)} type="submit">Add Movie</Button>
          <Button variant="primary" className="cancelAddMoviePage" onClick={cancelFunction} type="submit">Cancel</Button>
        </div>
      </div>
    )
  }
}

export default AddMovie;
