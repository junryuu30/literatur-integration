import React from "react"
import { Button, Container, Form, InputGroup } from "react-bootstrap"
import literaturbig from "../assets/literaturbig.svg"
import btseacrh from "../assets/btseacrh.svg"
import AllNavbar from "../components/AllNavbar"
import { useNavigate } from "react-router-dom"


const Search = () =>{
    const navigate = useNavigate()

    return(
        <>
        <AllNavbar/>
        <div className="bg-black pages d-flex justify-content-center">
            <Container >
                <img src={literaturbig} alt="" style={{width:"150"}}
                    className="mx-auto d-block mt-4 mb-4 bg-black"
                />
                <div className="d-flex justify-content-center">
                    {/* <InputGroup className="mb-3 me-3">

                        <Form.Control
                        type="text"
                        placeholder="Search for literatur"
                        className=""
                        />
                    </InputGroup> */}
                    <Button style={{padding:"10px"}} className="bg-maroon"
                        onClick={()=>navigate("/search-result")}
                    >
                        Search Literatur Here
                    </Button>

                    <div >
                        {/* navigate nya harus diberi kondisi agar bisa ngesearch */}

                        {/* <img src={btseacrh} alt="" style={{width:"40px", position: "absolute", buttom: "75px"}}/> */}
                    </div>
                </div>
                
            </Container>
        </div>

        </>
    )
}

export default Search