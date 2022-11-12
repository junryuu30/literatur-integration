import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import AllNavbar from "../components/AllNavbar"
import { API } from "../config/api"

const AddLiterature =()=> {

    const navigate = useNavigate()

    const [form, setForm] = React.useState({
        title: "",
        publication_date:"",
        pages: "",
        isbn: "",
        author:"",
        attache:"",
        cover:"",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === "file" ? e.target.files : e.target.value
        })
    }
    console.log(form)

    const handleSubmit = useMutation(async(e)=>{
        try {
            e.preventDefault()

            const formData = new FormData()
            formData.set("title", form.title)
            formData.set("publication_date", form.publication_date)
            formData.set("pages", form.pages)
            formData.set("isbn", form.isbn)
            formData.set("author", form.author)
            formData.set("attache", form.attache[0], form.attache[0].name)
            formData.set("cover", form.cover[0], form.cover[0].name)

            const data = await API.post("/literatur", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            navigate("/search-result")

        } catch (err) {
            console.log(err)
        }
    })


    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
                <h2 className="text-white mb-4">Add Literature</h2>
                <Row>
                    <Col>
                        <Form
                            onSubmit={(e) => handleSubmit.mutate(e)}
                        >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="title" placeholder="Title" 
                                className="bg-grayinput rounded-0"
                                onChange={handleChange} name="title"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="date" placeholder="Date"
                                onChange={handleChange} name="publication_date"
                                className="bg-grayinput rounded-0" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="number" placeholder="Pages"
                                className="bg-grayinput rounded-0"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="ISBN" 
                                className="bg-grayinput rounded-0"
                                onChange={handleChange} name="isbn"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Author"
                                onChange={handleChange} name="author"
                                className="bg-grayinput rounded-0"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail"
                            // style={{width:"25%"}}
                            >
                                <Row>
                                    <Col className="d-flex col-lg-6">
                                        <Form.Control type="file" placeholder="File"
                                        name="attache"
                                        onChange={handleChange}
                                        className="bg-grayinput rounded-0" />
                                        <Button className="btn-light rounded-0">pdf</Button>
                                    </Col>
                                    <Col className="d-flex">
                                        <Form.Control type="file" 
                                        placeholder="File"
                                        name="cover"
                                        onChange={handleChange}
                                        className="bg-grayinput rounded-0" />
                                        <Button className="btn-light rounded-0">png</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="danger" type="submit" className="bg-maroon rounded-0" style={{width:"30%", borderRadius:"5"}}>
                                    Submit
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

export default AddLiterature