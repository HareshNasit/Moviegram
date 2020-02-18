import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";
import MainMenuBar from './../MainMenuBar'

class NewsFeedScreen extends React.Component {

  render() {
    return (
      <div className="pageFeed">

        {/*The menu bar is just reused from the Component MainMenuBar */}
        <MainMenuBar/>
        
        <Form className="searchMovieform">
          <Form.Group>
            <Form.Control type="searchMovie" placeholder="Search Movie" />
          </Form.Group>
        </Form>

        <div className="pageHeader">
         <h3 className="headerText">Reviews Feed</h3>
        </div>

      </div>
    );
  }
}

export default NewsFeedScreen;
