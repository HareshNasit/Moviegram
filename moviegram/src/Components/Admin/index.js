import React from 'react';
import './styles.css'
import "./../universalStyles.css"
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import ReactSearchBox from 'react-search-box'
import MainMenuBar from './../MainMenuBar';
import AddMovie from './../AddMovie';
import ReviewsList from './../ReviewsList';
import Modal from 'react-modal';
import profileimgdef from './../MainMenuBar/profile.png';
import photo from './../UserProfile/ballon_dor.jpg'


class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state = {searched: "",
                  showModalAddMovie: false,
                  reviews: [{ id: 0,admin: true, username: "Bhavya" , movieName: "Avengers" , profImg: profileimgdef, datetime: "1/28/2020, 11:57:15 PM",
                             reviewContent: "This movie is lit, and I mean lit af. My god what an awesome time I had and it was even more fun because I watched it with my close friends which made the experience amazing. 15/10 stars. Definitely go watch it pleaseeeeeeeee!!!!!!!!!!!" ,
                             commentsSection: [{datetime:"2/28/2020, 8:57:15 PM", username:"Hassan", commentContent:"Yess!!!!!"}] },
                             { id: 1,admin: true, username: "Harsh" , movieName: "Messi Rocks" , profImg: profileimgdef, datetime: "1/26/2020, 9:57:15 AM",
                               reviewContent: "I think this movie is better than any movie ever made about any footballer or any movie that will be made about any footballer because Messi by far is the GOAT football player to ever live and anyone who disagrees and says Ronaldo is the best is RIGHT cause messi sucks HaHaHa tricked you there didn't I." ,
                               commentsSection: [{datetime:"2/28/2020, 5:57:15 PM", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                             { id: 2,admin: true, username: "Dhruv" , movieName: "Dangal" , profImg: profileimgdef, datetime: "12/20/2019, 9:00:15 AM",
                               reviewContent: "Ab toh dangal hoga dangal bhenchooodddddd !!!!!!" ,
                               commentsSection: [] },
                             { id: 3,admin: true, username: "Yosef" , movieName: "Stalingrad" , profImg: profileimgdef, datetime: "12/31/2019, 12:00:15 AM",
                               reviewContent: "Thomas Kretschmann is the best actor I have ever witnessed in my whole damn life and man is he hot." ,
                               commentsSection: [] },
                             { id: 4,admin: true, username: "username1" , movieName: "Avengers" , profImg: photo, datetime: "1/28/2020, 11:57:15 PM",
                               reviewContent: "Endgame definitively closes a few chapters in the Avengers saga in highly satisfying fashion. It is a tremendously entertaining intergalactic trip. 15/10 stars. Definitely go watch it Marvel fans!" ,
                               commentsSection: [{datetime:"2/28/2020, 8:57:15 PM ", username:"Harsh", commentContent:"That is so true i loved the movie so much it was amazing"}, {datetime:"2/04/2020, 8:17:00 AM", username:"Dhruv", commentContent:"Yess!!!!! OMG yes!!!!!! it is the best movie ever"}, {datetime:"2/18/2020, 5:50:15 PM", username:"Hassan", commentContent:"Yess!!!!!"}, {datetime:"2/02/2020, 4:37:15 PM", username:"Ramesh", commentContent:"Nooooo!!!!! DC is a better universe"}] },
                             { id: 5,admin: true, username: "username1" , movieName: "Intersteller" , profImg: photo, datetime: "1/25/2020, 9:57:15 PM",
                               reviewContent: "Christopher Nolan's spectacular film is filled with frustration, anger, and guilt, and also strives for acceptance and even redemption." ,
                               commentsSection: [{datetime:"1/28/2020, 3:50:05 PM ", username:"Mark", commentContent:"Messi is the best player i have witnessed tbh"}] },
                             { id: 6,admin: true, username: "username1" , movieName: "Anabelle Comes Home" , profImg: photo, datetime: "1/10/2020, 1:57:15 PM",
                               reviewContent: "Super scary, in a truly fun way, even if a bit over the top. I love diving into the world of the Warren families' 'room of evil things.' This made me want to see a movie about their daughter Judy, who already sees ghosts." ,
                               commentsSection: [] },
                             { id: 7,admin: true, username: "username1" , movieName: "Shawshank Redemption" , profImg: photo, datetime: "1/6/2020, 4:57:15 PM",
                               reviewContent: "This is an engagingly simple, good-hearted film, with just enough darkness around the edges to give contrast and relief to its glowingly benign view of human nature. Morgan Freeman you are a legend." ,
                               commentsSection: [] }]
                 };
    this.handleOpenAddMovieModal = this.handleOpenAddMovieModal.bind(this);
    this.handleCloseAddMovieModal = this.handleCloseAddMovieModal.bind(this);

  }

  handleOpenAddMovieModal () {
    this.setState({showModalAddMovie: true})
  }

  handleCloseAddMovieModal () {
    this.setState({showModalAddMovie: false})
  }


  render() {

    return (
      <div id="AdminFeed">

        <h1>Admin Dashboard</h1>
        <Button variant="outline-primary"
                 type="click"
                 onClick={this.handleOpenAddMovieModal}>
                 Add Movie
                 </Button>
        <Modal className = "addMovieModal"
         overlayClassName="Overlay"
         isOpen={this.state.showModalAddMovie}
         contentLabel="Minimal Modal Example"
         >
         <AddMovie cancelFunction={this.handleCloseAddMovieModal} />
        </Modal>
        <ReviewsList reviews={this.state.reviews}
                     queueComponent={this}/>
      </div>

    )
  }
}

export default Admin;
