import React, { useContext, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { dataJurnal } from "../dummyData/dataJurnal"
import fakepdf from "../assets/fakePdf.png"
import AllNavbar from "../components/AllNavbar"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../components/context/userContext"
import { useQuery } from "react-query"
import { API } from "../config/api"

const MyCollection = () => {
    const navigate = useNavigate()
    const params = useParams();
    const [user, setUser] = useState(null);
    const [state, dispatch] = useContext(UserContext);


    let { data: collectionbyuser } = useQuery("collectionbyuserCache", async () => {
        const response = await API.get(
          `/collection/${params.id ? params.id : user.id}`
        );
        // console.log("ini dataatata my literatur.data2:", responseliteratur.data.data)
        return response.data.data;
      });

    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
            <h2 className="text-white">My Colection</h2>
                <Row>
                <Col className="mt-3">
                <Row>
                        {collectionbyuser?.map((item, index)=>(
                            <Col key={index} 
                            onClick={() => navigate(`/detail-literature/${item?.id}`)}
                            className="col-lg-3"
                            >
                                <div  className='card-sr'>
                            <img alt="" src={fakepdf}/>
                            <div className='mt-3 text-white ms-2'>
                                <h4>
                                    {item?.title}
                                </h4>
                            </div>
                            <div className='d-flex justify-content-between mt-1 text-white ms-2' style={{width:"50%"}}>
                                <p>{item?.author}</p>
                                <p>{item?.publicationdate}</p>
                            </div>
                        </div>
                            </Col>
                        ))}

                        </Row>
                    {/* ================ */}
                        <Row>
                        {dataJurnal.map((item, index)=>(
                            <Col key={index} onClick={() => navigate(`/detail-literature/${item?.id}`)}
                            className="col-lg-3"
                            >
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

