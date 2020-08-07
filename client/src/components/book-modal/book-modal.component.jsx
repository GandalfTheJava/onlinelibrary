import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function BookModal({ showModal, bookTitle, bookDescription, imageURL }) {
    const [show, setShow] = useState(showModal);
    const handleClose = () => setShow(false);
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton> <Modal.Title>{bookTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{bookDescription}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Rating
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BookModal;
