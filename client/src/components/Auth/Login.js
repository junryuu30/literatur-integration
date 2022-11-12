import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function Login({modalLogin}, {setModalLogin}) {

    const handleClose = () => setModalLogin(false)
    const handleShow = () => modalLogin(true)

  return (
    <>
        {/* <Modal show={handleShow} onHide={handleClose}> */}
            {/* <Modal.Header closeButton>
                <Modal.Title>
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className='mb-3'>
                        <input input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className='mb-3'>
                        <input input type="password" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Password"/>
                    </div>

                </Form>
            </Modal.Body>
        </Modal> */}

            <Modal show={modalLogin} onHide={() => setModalLogin(false)}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" className="bg-grayinput rounded-0"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Password" className="bg-grayinput rounded-0" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="File Name"
                className="bg-grayinput rounded-0"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Phone"
                className="bg-grayinput rounded-0"/>
                </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalLogin(false)}>
                    Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button> */}
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default Login