import React from 'react';
import './styles.css'
import "./../universalStyles.css"
import { Button} from "react-bootstrap";
import MainMenuBar from './../MainMenuBar';
import AddMovie from './../AddMovie';
import ReviewsList from './../ReviewsList';
import Modal from 'react-modal';
import profileimgdef from './../MainMenuBar/profile.png';
import photo from './../UserProfile/ballon_dor.jpg';

import { getAllReviews } from './../../services/api';


class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state = {searched: "",
                  showModalAddMovie: false,
                  reviews: []
                 };
    this.handleOpenAddMovieModal = this.handleOpenAddMovieModal.bind(this);
    this.handleCloseAddMovieModal = this.handleCloseAddMovieModal.bind(this);
  }

  async componentDidMount() {
    let allReviews = await getAllReviews()
    allReviews = allReviews.data
    console.log(allReviews)
    allReviews = allReviews.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    this.setState({reviews: allReviews})
    console.log(this.state.reviews)
  }

  handleOpenAddMovieModal () {
    this.setState({showModalAddMovie: true})
  }

  handleCloseAddMovieModal () {
    this.setState({showModalAddMovie: false})
  }


  render() {
    const username = this.props.location.state.username;
    const auth = this.props.location.state.auth;
    return (
      <div id="AdminFeed">

        <MainMenuBar username={username} auth={auth}></MainMenuBar>

        <div id="pagesHeader">
         <h3 id="headersText">Admin Dashboard</h3>
        </div>
        <div className="AddMovieButton">
        <Button variant="primary"
                 type="click"
                 onClick={this.handleOpenAddMovieModal}>
                 Add Movie
        </Button>
        </div>
        <div className="Revs">
        <ReviewsList reviews={this.state.reviews}
                     type = "admin"
                     queueComponent={this}
                     authenticateduser= {username}/>
        </div>


         <Modal className = "addMovieModal"
          overlayClassName="Overlay"
          isOpen={this.state.showModalAddMovie}
          contentLabel="Minimal Modal Example"
          >
          <AddMovie cancelFunction={this.handleCloseAddMovieModal} />
         </Modal>
      </div>

    )
  }
}

export default Admin;
