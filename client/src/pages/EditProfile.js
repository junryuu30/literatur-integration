import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import AllNavbar from "../components/AllNavbar";
import { UserContext } from "../components/context/userContext";
import { API } from "../config/api";

const EditProfile = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [state] = useContext(UserContext)
    const [preview, setPreview] = useState(null)




    const [form, setForm] = useState(
    {
        fullname:"",
        email:"",
        password:"",
        gender: "",
        phone:"",
        image:"",
    })
    

    let { data: userprofile, refetch } = useQuery("editprofileCache", async ()=>{
        const response = await API.get(`/user`);

        console.log("data sebelum di editprofile", response.data.data)
        return response.data.data;
    });
    

    useEffect(()=>{
        if(userprofile){
            setPreview(userprofile.image);
            setForm({
                ...form,
                id: userprofile.id,
                fullname: userprofile.fullname,
                email: userprofile.email,
                password: userprofile.password,
                gender: userprofile.gender,
                phone: userprofile.phone,
                address: userprofile.address,
            })
        }
    },[userprofile])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value
        })
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0])
            setPreview(url)
        }
    }

    console.log(form);

    const handleSubmit = async (e) => {
        try {
          e.preventDefault();
          // return console.log("ini data form", form);
    
          // Store data with FormData as object
          const formData = new FormData();
          if (form.image) {
            formData.set("image", form?.image[0], form?.image[0]?.name);
          }
            formData.set("fullname", form.fullname);
            formData.set("email", form.email);
            formData.set("phone", form.phone);
            formData.set("address", form.address);
    
          // Insert product data
          const response = await API.patch(`/user/${form.id}`, formData);
          
          refetch()
          console.log("ini data updated user", response.data);
          navigate("/profile/" + id);
        } catch (error) {
          console.log(error);
        }
      };



    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
                <Row>
                <h3 className="text-white mb-4 mt-5">Edit Profile</h3>
                    <Col>
                        <Form
                            onSubmit={(e) => handleSubmit(e)}
                            // onSubmit={(e) => handleSubmit.mutate(e)}
                        >
                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Full Name' controlId="floatingInput">
                                    <Form.Control 
                                    value={form?.fullname} 
                                    onChange={handleChange} 
                                    name="fullname" 
                                    type="title" 
                                    placeholder="Email" />
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Email' controlId="floatingInput">
                                    <Form.Control 
                                    value={form?.email} 
                                    onChange={handleChange} 
                                    name="email"
                                    type="title"/>
                                </FloatingLabel>
                            </Form.Group>

                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Gender' controlId="floatingInput">
                                    <Form.Control 
                                    value={form?.gender} 
                                    onChange={handleChange} 
                                    name="gender"
                                    type="title" 
                                    placeholder="Gender" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Phone' controlId="floatingInput">
                                    <Form.Control 
                                    value={form?.phone} 
                                    onChange={handleChange} 
                                    name="phone" 
                                    type="number" 
                                    placeholder="Phone" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-4" >
                                <FloatingLabel label='Address' controlId="floatingInput">
                                    <Form.Control 
                                    value={form?.address} 
                                    onChange={handleChange} 
                                    name="address"
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
                                        <input type="file" className="form-control p-3"
                                        name="image" onChange={handleChange} 
                                        placeholder="Attach Book File" aria-label="Attach Book File" aria-describedby="basic-addon2" />
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