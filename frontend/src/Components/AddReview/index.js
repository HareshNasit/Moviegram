import React from "react";
import "./styles.css";
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
import ReactSearchBox from 'react-search-box';
import ErrorModal from './../ErrorModal';
import { addReview,getUserReviews,getMovieByName,getKeyMoviePairs,readCookie } from './../../services/api'

class AddReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movie: "",
                   review: "",
                   movies: [],
                   turnAlert: false,
                   error: ""};
    this.saveReview = this.saveReview.bind(this)
    this.handleMovieNameChange = this.handleMovieNameChange.bind(this)
    this.handleReviewContentChange = this.handleReviewContentChange.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  async componentDidMount() {
    await readCookie(this)
    const res = await getKeyMoviePairs()
    console.log(res)
    if(!res){
        console.log("Backend server is not running.")
        this.setState({movies: []})
    } else{
        const data = res.data

        this.setState({movies: data.map(obj => {
            return {key: obj._id, value: obj.title}
        })})
    }
  }

  closeModal(){
   this.setState({turnAlert: false})
  }

  async saveReview(queue, closeFunc, authenticateduser) {
    if(this.state.newComment === "" || this.state.movie === ""){
      this.setState({error: "Cannot post an empty/incomplete review. Make sure to fill in all fields"})
      this.setState({turnAlert: true})
    } else {
      let movie = await getMovieByName(this.state.movie)
      movie = movie.data
      const newReview = { username: authenticateduser, movie_title: this.state.movie, content: this.state.review,
                          spoilers: false, date: new Date().toLocaleString(), movie_id: movie._id}
      const added = await addReview(newReview)
      queue.state.reviews.unshift(newReview)
      closeFunc();
    }
  }

  handleMovieSelectEvent(movie) {
    this.setState({movie: movie})
  }

  handleMovieNameChange(event) {
    this.setState({movie:event.target.value})
  }

  handleReviewContentChange(event) {
    this.setState({review:event.target.value})
  }

  render() {

    const { queueComponent, cancelFunction, profImg, authenticateduser } = this.props

    return (
      <div id="addreviewmain">

         <div className="pageHeader">
            <h3 className="headerText">Add a New Review</h3>
         </div>

         <div className="add-review">
            <ul>
              <li className="reviewUserPicLi"><img className="reviewUserPic" src={profImg} alt="User DP"/></li>
              <li>{authenticateduser}</li>
            </ul>

            <div className="reviewMovieName">
              <span>Movie</span>
              <ReactSearchBox
                placeholder="Movie Name"
                data={this.state.movies}
                onSelect={event =>{ this.handleMovieSelectEvent(event.key) }}/>
            </div>

            <Form className="reviewForm">
              <Form.Group controlId="review.reviewContent">
                <Form.Label>Review</Form.Label>
                <Form.Control type="review" as="textarea" rows="8" placeholder="Add your Review here" onChange={this.handleReviewContentChange}/>
              </Form.Group>
              <Form.Group controlId="review.spoiler">
                <Form.Check type="checkbox" className="spoilerCheck">
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Spoilers?</Form.Check.Label>
                </Form.Check>
              </Form.Group>
            </Form>
            <Button variant="primary" className="saveReviewBtn" onClick={() => this.saveReview(queueComponent, cancelFunction, this.state.currentUser)} type="submit">Post Review</Button>
            <Button variant="primary" className="cancelAddRevPage" onClick={cancelFunction} type="submit">Cancel</Button>
            <ErrorModal closeModal={this.closeModal} show={this.state.turnAlert} error={this.state.error}></ErrorModal>
        </div>

      </div>
    );
  }
}

export default AddReview;
