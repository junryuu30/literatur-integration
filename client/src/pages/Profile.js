import * as React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap"

// image
import mail from "../assets/mail.png"
import gender from "../assets/gender.png"
import tlpn from "../assets/tlpn.png"
import maps from "../assets/maps.png"
import jen from "../assets/jen.jpg"
import { dataJurnal } from "../dummyData/dataJurnal"
import fakepdf from "../assets/fakePdf.png"
import AllNavbar from "../components/AllNavbar"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { API } from "../config/api"
import { UserContext } from '../components/context/userContext'

const Profile =()=>{
    const [state, dispatch] = React.useContext(UserContext)

    const params = useParams()
    const navigate = useNavigate()
    const [user, setUser] = React.useState(null)
    // let { data: literaturbyuser } = useQuery('literaturbyuserCache', async()=>{
    //     const response = await API.get(`literaturs/${params.id ? params.id : user.id}`)
    //     return response.data.data

    // })

    // let { data: user } = useQuery('userCache', async () => {
    //     const response = await API.get(`/user/${params.id}`)
    //     // console.log(user.products.title)
    //     return response.data.data
    // })

    const getUser = async () => {
        const response = await API.get(`/user/${state.user.id}`)
        setUser(response.data.data)
    }

    React.useEffect(()=>{
        if (state.user){
            getUser()
        }
    },[state])

    return(
        <>
        <AllNavbar/>
        <div className="bg-black profile-page">
            <Container>
                <h3 className="text-white">Profile</h3>
                <Row className="profile-detail mt-4 rounded p-3 d-flex justify-content-between">
                    <Col>
                        <Row>
                            <Col>
                                <Row className="perkategori mb-2">
                                    <Col className="col-lg-2 col-md-2 col-sm-3">
                                        <img src={mail} alt="" className="float-left"/>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h5 className="text-white">{user?.email}</h5>
                                                <h6 className="text-white">Mail</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                

                                <Row className="perkategori mb-2">
                                    <Col className="col-lg-2 col-md-2 col-sm-3">
                                        <img src={gender} alt="" className="float-left"/>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h5 className="text-white">{user?.gender ? user?.gender : "unknown"}</h5>
                                                <h6 className="text-white">Gender</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className="perkategori mb-2">
                                    <Col className="col-lg-2 col-md-2 col-sm-3 align-items-center">
                                        <img src={tlpn} alt="" className=""/>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h5 className="text-white">{user?.phone ? user?.phone : "No Phone Number Has Been Registered"}</h5>
                                                <h6 className="text-white">Mobile Phone</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className="perkategori mb-2">
                                    <Col className="col-lg-2 col-md-2 col-sm-3">
                                        <img src={maps} alt="" className="float-left"/>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h5 className="text-white">{user?.address ? user?.address : "No Address Has Been Submitted"}</h5>
                                                <h6 className="text-white">Adress</h6>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="col-lg-3">
                        <div>
                            <img src={jen} alt="" style={{width:"100%"}}/>
                        </div>
                        <Button className="mt-3 bg-maroon"
                        style={{width:"100%"}}
                        onClick={()=>navigate("/edit-profile")}
                        >
                            Change Profile
                        </Button>
                        </Col>
                </Row>
                        {/* ========================================================== */}

                <Row>
                <Col className="mt-3">
                    <h2 className="text-white mb-4">
                        My Literature
                    </h2>
                        <Row>
                        {dataJurnal?.map((item, index)=>(
                            <Col key={index}>
                                <div  className='card-sr'>
                            <img alt="" src={fakepdf}/>
                            <div className='mt-3 text-white m-2'>
                                <h4>
                                    {item.title}
                                </h4>
                            </div>
                            <div className='d-flex justify-content-between mt-1 text-white m-2' style={{width:"50%"}}>
                                <p>{item.author}</p>
                                <p>{item.publicationdate}</p>
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

export default Profile