import React from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import AllNavbar from "../components/AllNavbar";

const EditProfile = () => {
    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
                <Row>
                <h3 className="text-white mb-4 mt-5">Edit Profile</h3>
                    <Col>
                        <Form
                            // onSubmit={(e) => handleSubmit.mutate(e)}
                        >
                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Title' controlId="floatingInput">
                                    <Form.Control 
                                    // onChange={handleChange} name="title" 
                                    type="title" 
                                    placeholder="Email" />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Full Name' controlId="floatingInput">
                                    <Form.Control 
                                    // onChange={handleChange} name="fullname" 
                                    type="title" 
                                    placeholder="Full Name" />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Gender' controlId="floatingInput">
                                    <Form.Control 
                                    // onChange={handleChange} name="fullname" 
                                    type="title" 
                                    placeholder="Gender" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Phone' controlId="floatingInput">
                                    <Form.Control 
                                    // onChange={handleChange} name="fullname" 
                                    type="number" 
                                    placeholder="Phone" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Address' controlId="floatingInput">
                                    <Form.Control 
                                    // onChange={handleChange} name="fullname" 
                                    type="text" 
                                    placeholder="Address" />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail"
                            // style={{width:"25%"}}
                            >
                                <Row>
                                    <Col className="d-flex col-lg-6">
                                        {/* <Form.Control type="file" placeholder="File"
                                        name="image"
                                        // onChange={handleChange}
                                        className="bg-maroon rounded text-white" /> */}
                                    </Col>
                                    <Col className="d-flex">
                                        <input type="file" className="form-control p-3" placeholder="Attach Book File" aria-label="Attach Book File" aria-describedby="basic-addon2" />
                                        <span className="input-group-text p-3" id="basic-addon2">.png/jpg</span>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="danger" type="submit" className="bg-maroon rounded p-2 my-3" style={{width:"30%", borderRadius:"5"}}>
                                    Edit Profile
                                </Button>
                            </div>
                                
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default EditProfile