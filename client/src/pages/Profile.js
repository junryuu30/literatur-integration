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


    let { data: literaturbyuser } = useQuery('literaturbyuserCache', async () => {
        const response = await API.get(`/literaturs/user/${params.id ? params.id : user.id}`)
        console.log("ini dataatata my literatur", response.data.data)
        // return response.data.data

    })
    console.log("ini data literatur id", literaturbyuser)

    const getUser = async () => {
        try{
            const response = await API.get("/user/" + state.user.id)
            // const response = await API.get(`/user/${state.user.id}`)
            setUser(response.data.data)
        } catch(err) {
            console.log(err)
        }
        
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
                        <Row className="text-start d-flex align-items-center mb-2">
                            <Col className="col-1"> <p><img src={mail} alt="" className="float-left"/></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0 text-white">{user?.email}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Email</p>

                            </Col>
                        </Row>

                        <Row className="text-start d-flex align-items-center mb-2 text-white">
                            <Col className="col-1"> <p><img src={gender} alt="" className="float-left"/></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">{user?.gender ? user?.gender : "unknown"}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Gender</p>

                            </Col>
                        </Row>

                        <Row className="text-start d-flex align-items-center mb-2 text-white">
                            <Col className="col-1"> <p><img src={tlpn} alt="" className="float-left"/></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">{user?.phone ? user?.phone : "unknown"}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Mobile Phone</p>

                            </Col>
                        </Row>

                        <Row className="text-start d-flex align-items-center mb-2 text-white">
                            <Col className="col-1"> <p><img src={maps} alt="" className="float-left"/></p></Col>
                            <Col className="col-11">
                                <p className="ff-avn fs-14 fw-bold m-0">{user?.address ? user?.address : "unknown"}</p>
                                <p className="fs-12" style={{ color: '#8A8C90' }}>Adress</p>

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
                        {literaturbyuser?.map((item, index)=>(
                            <Col key={index}>
                                <div  className='card-sr'>
                            <img alt="" src={fakepdf}/>
                            <div className='mt-3 text-white m-2'>
                                <h4>
                                    {item?.title}
                                </h4>
                            </div>
                            <div className='d-flex justify-content-between mt-1 text-white m-2' style={{width:"50%"}}>
                                <p>{item?.author}</p>
                                <p>{item?.publicationdate}</p>
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