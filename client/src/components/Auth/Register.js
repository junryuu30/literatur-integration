import React from "react"
import { Button, Form, Modal } from "react-bootstrap"

const Register = ({modalRegister, setModalRegister, setModalLogin}) => {
    return(
        <>
            <Modal show={modalRegister} onHide={() => setModalRegister(false)}
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
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
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalRegister(false)}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Register