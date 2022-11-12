import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import bigfakepdf from "../assets/bigfakepdf.png"
import AllNavbar from '../components/AllNavbar'

function DetailLiteratur() {
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
                                    <h2>Title Jurnal</h2>
                                    <h5>Penulis</h5>
                                </div>
                                <div className='text-white mb-4'>
                                    <h5>Publication date</h5>
                                    <h6>April 2020</h6>
                                </div>
                                <div className='text-white mb-4'>
                                    <h5>Pages</h5>
                                    <h6>455</h6>
                                </div>
                                <div className='mb-4'>
                                    <h5 className='text-danger'>ISBN</h5>
                                    <h6 className='text-white'>9781789807554</h6>
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