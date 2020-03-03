import React from 'react';
import './styles.css'
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import ReactSearchBox from 'react-search-box'
import MainMenuBar from './../MainMenuBar';
import ReviewsList from './../ReviewsList';
import profileimgdef from './../MainMenuBar/profile.png';


class Admin extends React.Component{
  constructor(props){
    super(props);
    this.state = {searched: "",
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
                               commentsSection: [] }]
                 };
  }


  render() {
    return (
      <div id="AdminFeed">
        <h1>Admin Dashboard</h1>
        <ReviewsList reviews={this.state.reviews}
                     queueComponent={this}/>

      </div>

    )
  }
}

export default Admin;
