import React, { useContext, useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import { API } from "../config/api"
import { UserContext } from "./context/userContext"

const AllNavbar = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try{
      const response = await API.get(`/user/${state.user.id}`);

      setUser(response.data.data.data);
      // console.log("isi response", response);
    } catch(err) {
        // console.log(err)
    }
   
  };
  // console.log(user, "isi user");

  // useEffect(() => {
  //   if (state.user) {
  //     getUser();
  //   }
  // }, [state]);

  useEffect(()=>{
    getUser()
  },[])



  const handleLogut = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

    return(
        <>
        <Navbar className="bg-black nav" bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
            {/* <Link to={`/profile/${state.user.id}`}> */}
              <Nav.Link
                onClick={() => navigate("/profile")}
                // onClick={() => navigate("/profile/"+ state.user.id)}
              >Profile</Nav.Link>
              <Nav.Link
              // onClick={() => navigate("/my-collection")}
              onClick={() => navigate(`/my-collection/${state.user.id}`)}
              >My Collection</Nav.Link>
              <Nav.Link
              onClick={() => navigate("/add-literature")}
              >Add Literature</Nav.Link>
              <Nav.Link
              // onClick={()=> navigate('/')}
              onClick={handleLogut}
              >Logout</Nav.Link>
              
            </Nav>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
            onClick={()=>navigate("/search")}
            >
            <img src={logo} alt=""
            w={12}
            />
            </Navbar.Text>
          </Navbar.Collapse>
          </Container>
      </Navbar>
        </>
    )
}

export default AllNavbar