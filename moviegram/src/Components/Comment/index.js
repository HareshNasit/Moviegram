import React from "react";
import "./styles.css";

class Comment extends React.Component {

  datetime = new Date().toLocaleString()

  render() {

    const { datetime, username, commentContent } = this.props

    return (
      <div id="comment">
        <span>{ datetime } | </span><span><b><i>{ username } : </i></b></span><span>{ commentContent }</span>
      </div>
    );
  }
}

export default Comment;
