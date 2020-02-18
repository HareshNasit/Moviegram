import React from "react";
import "./styles.css";
import { Button, Form } from "react-bootstrap";

class NewsFeedScreen extends React.Component {

  render() {
    return (
      <div className="pageFeed">

        <Form className="webpage-menu">
          <Button variant="outline-primary" type="submit">Signup</Button>
        </Form>
      
      </div>
    );
  }
}

export default NewsFeedScreen;
