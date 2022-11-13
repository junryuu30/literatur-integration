import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import bigfakepdf from "../assets/bigfakepdf.png"
import AllNavbar from '../components/AllNavbar'
import { API } from '../config/api'

function DetailLiteratur() {

    const params = useParams()
    const navigate = useNavigate()
    console.log("ini params", params)

    let { data: detailliteratur, refatch } = useQuery("detailCache", async ()=> {
        const response = await API.get(`literatur/${params.id}`)
        console.log("mana datanya yang detaillll", response.data.data)
        return response.data.data

    })



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

                                <Button className="bg-maroon btn-auth w-30 mb-3">
                                    Download
                                </Button>
                            </Col>
                            <Col>
                                <Button className="bg-maroon btn-auth w-30 mb-3">
                                    Add My Collection
                                </Button>
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