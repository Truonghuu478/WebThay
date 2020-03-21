import React from 'react';
import {Button}from "react-bootstrap";
function Modal(props) {
  

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yybrQGVpYuM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Modal.Header>
        {/* <Modal.Body>
          Woohoo, you're reading this text in a modal!
          </Modal.Body> */}
        {/* <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
export default Modal;