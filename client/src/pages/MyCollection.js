import React, { useContext, useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { dataJurnal } from "../dummyData/dataJurnal"
import fakepdf from "../assets/fakePdf.png"
import AllNavbar from "../components/AllNavbar"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../components/context/userContext"
import { useQuery } from "react-query"
import { API } from "../config/api"

const MyCollection = () => {
    const navigate = useNavigate()
    // const params = useParams();
    const { id } = useParams()

    const [user, setUser] = useState(null);
    const [state, dispatch] = useContext(UserContext);
    const[collection,setCollection]= useState()


    console.log("ini data collection iniii:", state)


     const getCollection = async () =>{
        try {
            const response = await API.get("/collections/user")
            // const response = await API.get(`/colections/user/${state.user.id}`)
            // return response.data.data
            // const response2 = response.data.data.filter(
            //             (p) => p.user.id == state.user.id
            //           );
        // setCollection(response2.data.data)
        setCollection(response.data.data)
        console.log("getCollection", response.data.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getCollection()
    },[state])

    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
            <h2 className="text-white">My Colection</h2>
                <Row>
                <Col className="mt-3">
                    {collection?.length !== undefined ? (
                <Row>
                        {collection.map((item)=>(
                            <Col className="col-lg-3">
                                <div  className='card-sr'
                                    onClick={() => navigate(`/detail-literature/${item?.id}`)}
                                >
                                    <img alt="" src={fakepdf}/>
                                    <div className='mt-3 text-white ms-2'>
                                        <h4>
                                            {item?.literatur.title}
                                        </h4>
                                    </div>
                                    <div className='d-flex justify-content-between mt-1 text-white ms-2' style={{width:"50%"}}>
                                        <p>{item?.literatur.author}</p>
                                        <p>{item?.literatur.publication_date}</p>
                                    </div>
                                    <Button className="bg-maroon btn-auth w-30 my-4 py-1"
                                        onClick={async () => {
                                                const response = await API.delete(`/collection/${item.id}`);
                                                // refetch()
                                            }}
                                        >
                                            Delete
                                        </Button>
                                </div>
                            </Col>
                         ))} 

                        </Row>
                    ): null}
                        
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default MyCollection

