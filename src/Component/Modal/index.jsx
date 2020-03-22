import React, { Component } from 'react'

import Modal from "react-bootstrap/Modal";
export default class ModalTrailer extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
          <iframe
            className="trailer"
            src="https://www.youtube.com/embed/xirk18P889U"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Header>
        {/* <Modal.Body >
      
      </Modal.Body> */}
        {/* <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    );
  }
}



