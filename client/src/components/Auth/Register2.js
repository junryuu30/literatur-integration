import * as React from "react"
// import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { API } from "../../config/api";

const Register2 = ({ modalRegister, setModalRegister, setModalLogin }) => {

  const [message, setMessage] = React.useState(null)

  const [form, setForm] = React.useState({
    email: '',
    password: '',
    fullname: '',
    gender:'',
    phone:'',
    address:'',
  });

  const { email, password, fullname, gender, phone, address } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = useMutation(async(e) =>{
    try{
      e.preventDefault();
      const response = await API.post("/register", form)

      const alert = (
        <Alert variant="success">Registrasi berhasil</Alert>
      )
      setModalRegister(false)
      setModalLogin(true)
      setMessage(alert);

    } catch (err){
      console.log(err);
      const alert =(
        <Alert variant="danger">Registrasi gagal</Alert>
      )
      setMessage(alert);
    }
  })


// alert blm muncul dan tampilkan set login

  return (
    <>
      <Modal show={modalRegister} onHide={() => setModalRegister(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="modal-body">
          <h2 className="text-darkblue mb-4">Sign Up</h2>
          {message && message}
          <form onSubmit={(e) => handleSubmit.mutate(e)}>
            <div className="mb-3">
              <input type="email" 
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp" 
              placeholder="Email" 
              onChange={handleChange} 
              name="email" 
              value={email}
              />
            </div>
            <div className="mb-3">
              <input type="password" 
              className="form-control" 
              id="password" 
              aria-describedby="emailHelp" placeholder="Password" 
              onChange={handleChange} 
              name="password" 
              value={password}
              />
            </div>
            <div className="mb-3">
              <input type="text" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Full Name" 
              onChange={handleChange} 
              name="fullname"
              value={fullname}
              />
            </div>
            <div className="mb-3">
              <select class="form-select" aria-label="Default select example"
              value={gender}
              name="gender"
              onChange={handleChange}
              >
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <input type="number" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Phone"
              name="phone" 
              onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input type="text" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Address"
              name="address"
              onChange={handleChange}
              />
            </div>
            <Button type="submit" 
            className="btn bg-maroon text-light fw-bold w-100 mb-4"
            >
              Sign Up
            </Button>
          </form>
          <p className="text-center">
            Already have an account ? Click{" "}
            <span
              className="click-here fw-bold"
              onClick={() => {
                setModalLogin(true);
                setModalRegister(false);
              }}
              style={{cursor: "pointer"}}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register2;