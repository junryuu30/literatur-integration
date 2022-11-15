import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

// image
import mail from "../assets/mail.png";
import gender from "../assets/gender.png";
import tlpn from "../assets/tlpn.png";
import maps from "../assets/maps.png";
import jen from "../assets/jen.jpg";
import AllNavbar from "../components/AllNavbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../components/context/userContext";

const Profile = () => {
  const [state] = React.useContext(UserContext);
  // console.log("ini stateeee", state);
  // const params = useParams();
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = React.useState();

  // var idid = state.user.id;

  // let { data: literaturbyuser, refetch } = useQuery(
    // "literaturbyuserCache",
    // async () => {
      // const responseliteratur = await API.get(`/user/${id}`);
      // `/literaturs/user/${params.id ? params.id : user.id}`
      // console.log("ini dataatata my lit  eratur.data2:", responseliteratur.data.data)
      // return responseliteratur.data.data;
    // }
  // );

  // LITERATURby user

  // console.log(id);

  const config = {
    method: "GET",
    headers: {
      Authorization: "Basic " + localStorage.token,
    },
  };

  let { data: literturID } = useQuery("literaturbyuserCache2", async () => {
    const responseliteratur = await API.get(`/literaturs/user/${id}`, config);
    // console.log("jhihan user id,", state.user.id);
    // console.log("jihan response literature hehe,", responseliteratur.data.data);
    return responseliteratur.data.data;
  });
  // console.log("ini data literatur id", literaturbyuser)

  console.log("ini data literatur",literturID);

  const getUser = async () => {
    try {

      const response = await API.get("/user", config);

      console.log('bebas response',response);
      // console.log("data get user", response.data.data)
      // const response = await API.get(`/user/${state.user.id}`)
        setUser(response.data.data);
      // console.log(`func getUser : ${response.data.data}`);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("ini userrrr", user)

  React.useEffect(() => {

    getUser();
  }, []);

  
  return (
    <>
      <AllNavbar />
      <div className="bg-black profile-page">
        <Container>
          <h3 className="text-white">Profile</h3>
          <Row className="profile-detail mt-4 rounded p-3 d-flex justify-content-between">
            <Col>
              <Row className="text-start d-flex align-items-center mb-2">
                <Col className="col-1">
                  {" "}
                  <p>
                    <img src={mail} alt="" className="float-left" />
                  </p>
                </Col>
                <Col className="col-11">
                  <p className="ff-avn fs-14 fw-bold m-0 text-white">
                    {/* {state.user?.email} */}
                    {user?.email}
                  </p>
                  <p className="fs-12" style={{ color: "#8A8C90" }}>
                    Email
                  </p>
                </Col>
              </Row>

              <Row className="text-start d-flex align-items-center mb-2 text-white">
                <Col className="col-1">
                  {" "}
                  <p>
                    <img src={gender} alt="" className="float-left" />
                  </p>
                </Col>
                <Col className="col-11">
                  <p className="ff-avn fs-14 fw-bold m-0">
                    {user?.gender ? user?.gender : "unknown"}
                    {/* {state.user?.gender} */}
                  </p>
                  <p className="fs-12" style={{ color: "#8A8C90" }}>
                    Gender
                  </p>
                </Col>
              </Row>

              <Row className="text-start d-flex align-items-center mb-2 text-white">
                <Col className="col-1">
                  {" "}
                  <p>
                    <img src={tlpn} alt="" className="float-left" />
                  </p>
                </Col>
                <Col className="col-11">
                  <p className="ff-avn fs-14 fw-bold m-0">
                    {user?.phone ? user?.phone : "unknown"}
                    {/* {state.user?.phone} */}
                  </p>
                  <p className="fs-12" style={{ color: "#8A8C90" }}>
                    Mobile Phone
                  </p>
                </Col>
              </Row>

              <Row className="text-start d-flex align-items-center mb-2 text-white">
                <Col className="col-1">
                  {" "}
                  <p>
                    <img src={maps} alt="" className="float-left" />
                  </p>
                </Col>
                <Col className="col-11">
                  <p className="ff-avn fs-14 fw-bold m-0">
                    {user?.address ? user?.address : "unknown"}
                    {/* {state.user?.address} */}
                  </p>
                  <p className="fs-12" style={{ color: "#8A8C90" }}>
                    Adress
                  </p>
                </Col>
              </Row>
            </Col>

            <Col className="col-lg-3">
              <div>
                <img src={user?.image ? user?.image : jen} alt="" style={{ width: "100%" }} />
                {/* <img src={state.user?.image} alt="" style={{ width: "100%" }}/> */}
              </div>
              {/* <Button
                className="mt-3 bg-maroon"
                style={{ width: "100%" }}
                onClick={() => navigate("/edit-profile")}
              >
                Change Profile
              </Button> */}
              <Link to={`/edit-profile/${state.user.id}`}>
                <Button className="mt-3 bg-maroon" style={{ width: "100%" }}>
                  Change Profile
                </Button>
              </Link>
            </Col>
          </Row>
          {/* ========================================================== */}

          <Row>
            <Col className="mt-3">
              <h2 className="text-white mb-4">My Literature</h2>
              <Row>
                {literturID?.map((item, index) => (
                  <Col
                    key={index}
                    className="col-lg-3 d-flex align-items-start"
                  >
                    <div
                      className="card-sr text-white"
                      style={{ width: "200px" }}
                      onClick={() => navigate(`/detail-literature/${item?.id}`)}
                    >
                      {/* <img alt="" src={fakepdf}/> */}
                      <img alt="" src={item?.cover} />
                      <h4 className="mt-3">{item.title}</h4>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>{item.author}</p>
                        </div>
                        <div>
                          <p>{item.publicationdate}</p>
                        </div>
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
  );
};

export default Profile;
