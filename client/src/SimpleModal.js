import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function SimpleModal({ show, setShow, title, body }) {
  const handleClose = () =>  setShow(false)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {title ? (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        ) : null}
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SimpleModal
