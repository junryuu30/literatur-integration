import React, { useState } from "react";
import { Button, Col, Container, Row,} from "react-bootstrap";
import logo from "../assets/logo.svg"
import headerimg from "../assets/headerimg.svg"
import Login from "../components/Auth/Login";
import { useNavigate } from "react-router-dom";
import Register from "../components/Auth/Register";

const LandingLi = () => {
    const [modalLogin, setModalLogin] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)
    // const navigate = useNavigate();

    return(
        <>
        <div className="bg-black h-page">
            <img className="" src={logo} alt="" style={{margin:"15px", width:"100px"}}/>
           <Container className="">
                <Row>
                    <Col className="">
                        <h1 className="text-white mt-3">source of intelligence</h1>
                        <h1 className="text-white">intelligence</h1>
                        <h5 className="text-white mt-3">
                            Sign-up and receive unlimited accesss to all of your literatur - share your literature.
                        </h5>

                        <Button className="bg-maroon btn-auth me-2 w-30"
                            onClick={() => setModalRegister(true)}
                        >
                            Sign Up
                        </Button>
                        <Button variant="light btn-auth me-2 w-30"
                            onClick={() => setModalLogin(true)}
                        
                        >Sign In
                        </Button>
                    </Col>
                    <Col>
                        <img src={headerimg} alt=""/>
                    </Col>
                </Row>
            </Container> 
        </div>
        <Login
        modalLogin={modalLogin}
        setModalLogin={setModalLogin}
        setModalRegister={setModalRegister}

        />
        <Register 
        modalRegister={modalRegister} 
        setModalRegister={setModalRegister} 
        setModalLogin={setModalLogin} />
        </>
    )
}

export default LandingLi
