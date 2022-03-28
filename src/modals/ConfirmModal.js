import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";

class ConfirmModal extends Component {
  render(){
    return(
      <Modal show={this.props.show} onHide={this.props.onHide} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Cancel
          </Button>
          <Link to={this.props.redirect}>
            <Button variant={this.props.button_color} onClick={this.props.action}>
            {this.props.button_cnt}
          </Button></Link>
        </Modal.Footer>
      </Modal>
      )
  }
};

export default ConfirmModal