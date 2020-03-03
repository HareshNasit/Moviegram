// import all react libraries
import React from "react";
import "./styles.css";

// Class for a Comment Feed Component
class Comment extends React.Component {

  render() {

    const { datetime, username, commentContent } = this.props

    return (
      <div id="comment">
        <span>{ datetime } </span><span>| <b><i>{ username } : </i></b></span><span>{ commentContent }</span>
      </div>
    );
  }
}

export default Comment;
