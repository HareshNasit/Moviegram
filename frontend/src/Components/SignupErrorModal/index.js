
import React from 'react';
import {Modal } from 'react-bootstrap';

class SignupErrorModal extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <Modal
        show={this.props.show}
        onHide={() => this.props.closeModal()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Error
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.error}
        </Modal.Body>
      </Modal>);
    }
}
export default SignupErrorModal;
