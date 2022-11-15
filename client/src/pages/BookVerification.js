import { Button, Container, Dropdown, Navbar, Table } from "react-bootstrap"
import React, { useContext, useEffect, useState } from 'react'
import ceklis from "../../src/assets/ceklis.png"
import logo from "../../src/assets/logo.svg"
import jen from "../assets/jen.jpg"
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"
import { API } from "../config/api"
import { UserContext } from "../components/context/userContext"

const BookVerification =()=>{
    const navigate = useNavigate()

    const [state, dispatch] = useContext(UserContext);
    const [idLiteratur, setIdLiteratur] = useState();

    let { data: literaturs, refetch }= useQuery('verificationliteraturCache',
      async() => {
        const response = await API.get('/literaturs')
        return response.data.data
      }
    )

    console.log(literaturs)

    const [form] = useState({
      statusverification: "cancel",
    });
  
    const [formProgress] = useState({
      statusverification: "approve",
    });


    const handleSubmitCancel = async (idLiteratur) => {
      try {
        const formData = new FormData();
        formData.set("statusverification", form.statusverification);
  
        const response = await API.patch(
          `/literatur/${idLiteratur}`,
          formData
        );

  
        refetch();
        setIdLiteratur("");
      } catch (error) {
        console.log(error);
      }
    };

    const handleSubmitApprove = async (idLiteratur) => {
      try {
  
        const formData = new FormData();
        formData.set("statusverification", formProgress.statusverification);
  

        const response = await API.patch(
          `/literatur/${idLiteratur}`,
          formData
        );
        console.log(response);
  
        refetch();
        setIdLiteratur("");
      } catch (error) {
        console.log(error);
      }
    };



  //   React.useEffect(() => {
  //     refetch()
  // }, [])

//   useEffect(() => {
//     refetch()
// }, [])
    return(
        <>
        <Navbar className="bg-black nav" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand
          onClick={()=>navigate("/search-result")}
          >
            <img src={logo} alt=''/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-scroll" className='justify-content-end'>
            
            <Dropdown>
            <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={jen} alt="" width={40} height={40} className="rounded-circle" />
                  </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> navigate('/profile')}>
                <img src={jen} alt="" width={40} height={40} className="rounded-circle" />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"
                  onClick={()=> navigate('/')}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
          </Container>
      </Navbar>

        {/* --------------------- */}
        <div className="bg-white">
            <Container>
                <h3 className="my-3">Book verification</h3>
            <Table striped>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>User Or Author</th>
                    <th>ISBN</th>
                    <th>Literatur</th>
                    <th>Status</th>
                    <th className="d-flex justify-content-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {literaturs?.map((item, index)=>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item?.author}</td>
                        <td>{item?.isbn}</td>
                        <td>{item?.title}.pdf</td>
                        <td>
                        {item.statusverification === "pending" ? (<span className="text-warning">Waiting to be verifed</span>) : 
                        item.statusverification === "cancel" ? ( <span className="text-danger"> cancel </span>) :
                        item.statusverification === "approve" ? (<span className="text-success">Approve </span>) :
                       (<span> </span>)}


                        </td>
                        <td className="d-flex justify-content-center">
                          {item.statusverification === "pending" ?(
                            <span> 
                              <div>
                                <button className="btn bg-maroon text-white fw-bold w-30 me-3"
                                //   onClick={async () => {
                                //     const response = await API.delete(`/literatur/${item.id}`);
                                //     // refetch()
                                // }}
                                onClick={(e) => {
                                  setIdLiteratur(item?.id);
                                  handleSubmitCancel(item?.id)}}
                                >
                                  Cancel
                                </button>

                                <button className="btn btn-success text-dark fw-bold w-30" onClick={(e) => {
                                 setIdLiteratur(item?.id);
                                 handleSubmitApprove(item?.id);}}>
                                  Approv
                                </button>
                            </div>

                            </span>
                          ): item.statusverification === "cancel" ? 
                          (<span>Gambar X</span>) :
                          item.statusverification === "approve" ?
                          ( <span> <img src={ceklis} alt=""/></span>) :
                          (<span> 
                             
                          </span>)
                          }
                            
                        </td>
                    </tr>
                      ))}

                       
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Approve</td>
                        <td className="d-flex justify-content-center">
                          <img src={ceklis} alt=""/>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </Container>

        </div>
        </>
    )
}

export default BookVerification