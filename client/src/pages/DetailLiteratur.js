import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import bigfakepdf from "../assets/bigfakepdf.png"
import AllNavbar from '../components/AllNavbar'
import { UserContext } from '../components/context/userContext'
import { API } from '../config/api'
import Swal from 'sweetalert2'

function DetailLiteratur() {

    const [state] = useContext(UserContext);


    let { id } = useParams();

    // const params = useParams()
    const navigate = useNavigate()
    // console.log("ini params......", params)

    let { data: detailliteratur } = useQuery("detailCache", async ()=> {

        const response = await API.get("/literatur/" + id);
        // const response = await API.get(`literatur/${params.id}`)
        // console.log("mana datanya yang detaillll", response.data.data)
        return response.data.data

    })


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const body = JSON.stringify({
                literatur_id: parseInt(id),
            });
            await API.post("/collection", body, config);
            navigate(`/my-collection/${state.user.id}`);
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <>
        <AllNavbar/>
        <div className='bg-black profile-page'>
            <Container>
                <Row>
                    <Col className='col-12 col-lg-5'>
                        <img src={bigfakepdf} 
                         alt=""
                        />
                    </Col>
                    <Col>
                        <Row>
                            <Col className='col-12 col-lg-8'>
                                <div className='text-white mb-4'>
                                    <h2>{detailliteratur?.title}</h2>
                                    <h5>{detailliteratur?.author}</h5>
                                </div>
                                <div className='text-white mb-4'>
                                    <h5>Publication date</h5>
                                    <h6>{detailliteratur?.publicationdate}</h6>
                                </div>
                                <div className='text-white mb-4'>
                                    <h5>Pages</h5>
                                    <h6>{detailliteratur?.pages}</h6>
                                </div>
                                <div className='mb-4'>
                                    <h5 className='text-danger'>ISBN</h5>
                                    <h6 className='text-white'>{detailliteratur?.isbn}</h6>
                                </div>

                                {/* <Button className="bg-maroon btn-auth w-30 mb-3">
                                    Download
                                </Button> */}
                                <a href={detailliteratur?.attache}
                                    className="bg-maroon btn-auth w-30 mb-3 py-3 text-white"
                                    style={{paddingLeft:"10px", paddingRight:"10px", borderRadius:"10px", textDecoration:"none"}}
                                >  Read and Download</a>

                                {/* <a 
                                style={{ color: "white", textDecoration: "none" }} 
                                href={detailliteratur?.attache} target="_blank" className="bg-maroon">
                                    Download</a> */}
                            </Col>
                            <Col>
                                <Button className="bg-maroon btn-auth w-30 my-4 py-2"
                                onClick={handleSubmit}
                                >
                                    Add My Collection
                                </Button>
                                            
                                {/* ================== */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default DetailLiteratur