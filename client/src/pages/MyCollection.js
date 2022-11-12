import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { dataJurnal } from "../dummyData/dataJurnal"
import fakepdf from "../assets/fakePdf.png"
import AllNavbar from "../components/AllNavbar"
import { useNavigate } from "react-router-dom"

const MyCollection = () => {
    const navigate = useNavigate()

    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
            <h2 className="text-white">My Colection</h2>
                <Row>
                <Col className="mt-3">
                        <Row>
                        {dataJurnal.map((item, index)=>(
                            <Col key={index} onClick={() => navigate(`/detail-literature/${item?.id}`)}>
                                <div  className='card-sr'>
                            <img alt="" src={fakepdf}/>
                            <div className='mt-3 text-white ms-2'>
                                <h4>
                                    {item.title}
                                </h4>
                            </div>
                            <div className='d-flex justify-content-between mt-1 text-white ms-2' style={{width:"50%"}}>
                                <p>{item.penulis}</p>
                                <p>{item.tahun}</p>
                            </div>
                        </div>
                            </Col>
                        ))}

                        </Row>
                        
                        
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default MyCollection

