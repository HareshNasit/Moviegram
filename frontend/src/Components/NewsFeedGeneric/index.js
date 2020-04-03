// import all react libraries
import React from "react";
import {Link} from 'react-router-dom';
// import all stylesheets
import "./styles.css";
import "./../universalStyles.css";
// import all needed Components
import MainMenuBar from './../MainMenuBar';
import ReviewsList from './../ReviewsList';
// import functions/api calls for backend and database requets to server
import { getAllReviews, getUserImage,readCookie } from './../../services/api'

// Class for a Review Component
class NewsFeedGeneric extends React.Component {

  // Constructor function that stores the react STATE variable that holds dynamically changing data. Constructor
  // used to bind the implemented methods to this class that need to access variables of defined inside the constructor.
  constructor(props) {
    super(props)
    this.state = { reviews: [] };
  }

  async componentDidMount() {
    await readCookie(this)
    let reviews = await getAllReviews()
    reviews = reviews.data
    // sort all the reviews from the curr users friends in order of latest to oldest
    for(let i=0; i<reviews.length; i++) {
      const userImg = await getUserImage(reviews[i].username)
      reviews[i]["image_url"] = userImg.data;
    }
    reviews = reviews.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    this.setState({reviews: reviews})
  }

  render() {

    const authenticateduser = this.state.currentUser

    return (
      <div id="pageFeed">
        {/*The menu bar is just reused from the Component MainMenuBar */}
        <MainMenuBar username={authenticateduser}/>

          {/*Title of the review news feed page */}
          <div className="pageHeader">
          <h3 className="headerText">All Reviews</h3>
          </div>

          {/* Reviews List here to display all reviews from friends of current user */}
          <ReviewsList reviews={this.state.reviews}
                    type={"generic"}
                    queueComponent={this}
                    authenticateduser= {authenticateduser}/>
      </div>
    )
  }


}

export default NewsFeedGeneric;
