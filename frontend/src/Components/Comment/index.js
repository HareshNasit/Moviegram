// import all react libraries
import React from "react";
import "./styles.css";

// Class for a Comment Feed Component
class Comment extends React.Component {

  render() {

    const { date, content, username } = this.props
    
    return (
      <div id="comment">
        <span>{ date } </span><span>| <b><i>{username} : </i></b></span><span>{ content }</span>
      </div>
    );
  }
}

export default Comment;
