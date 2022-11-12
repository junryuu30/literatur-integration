import * as React from "react";


import logo from "../assets/logo.svg"
import headerimg from "../assets/headerimg.svg"

import { useNavigate } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import Login2 from "../components/Auth/Login2";
import Register2 from "../components/Auth/Register2";

const Home = () => {
  const [modalLogin, setModalLogin] = React.useState(false);
  const [modalRegister, setModalRegister] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar variant="dark" className="bg-darkblue py-3" fixed="top">
        <Container>
          <Navbar.Brand className="click" 
          onClick={() => navigate("/")}
          >
            <img src={logo} height={35} className="d-inline-block align-top" alt="React Bootstrap logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <section className="bg-black pt-5 vh-100">
        <div className="container mt-35">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-12 order-lg-1 order-2">
              <h1 className="title fw-bold text-light display-2">source of intelligence</h1>
              <h5 className="description text-light my-lg-4 my-3 text-justify">Sign-up and receive unlimited accesss to all of your literatur - share your literature.</h5>
              <button className="btn bg-maroon text-white fw-bold w-30 me-3" 
              onClick={() => setModalRegister(true)}
              >
                Sign Up
              </button>
              <button className="btn btn-light text-dark fw-bold w-30" 
              onClick={() => setModalLogin(true)}
              >
                Sign In
              </button>
            </div>
            <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-1 mb-lg-0 mb-3">
              <img src={headerimg} alt="book-img" width="100%" />
            </div>
          </div>
        </div>
      </section>
      <Login2 modalLogin={modalLogin} setModalLogin={setModalLogin} setModalRegister={setModalRegister} />
      <Register2 modalRegister={modalRegister} setModalRegister={setModalRegister} setModalLogin={setModalLogin} />
    </>
  );
};

export default Home;