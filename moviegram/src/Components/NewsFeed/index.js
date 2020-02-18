import React from 'react';
import './styles.css';
import { Button, Form } from 'react-bootstrap';

class NewsFeed extends React.Component {

  state = {
  };

  render() {
    return (
      <div className="App">
        <Grid id="webpage-menu" container spacing={4}>
            <Button variant="outline-primary">Home</Button>
            <Button variant="outline-primary">Profile</Button>
            <Button variant="outline-primary">Add Review</Button>
        </Grid>
      </div>
    );
  }
}

export default NewsFeed;
