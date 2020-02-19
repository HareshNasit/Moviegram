import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";

class UserProfile extends React.Component {

  render() {

    const { username, movieName, reviewContent, commentsSection} = this.props;

    return (
      <div id="review">
        <ul>
          <li>User : {username}</li>
          <li>Movie : {movieName}</li>
        </ul>
        <span className="content">{reviewContent}</span>
        <div className="comments">
          {commentsSection}
        </div>
      </div>
    );
  }
}

export default UserProfile;
