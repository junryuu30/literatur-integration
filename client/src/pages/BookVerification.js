import { Button, Container, Dropdown, Navbar, Table } from "react-bootstrap"
import React, { useEffect } from 'react'
import ceklis from "../../src/assets/ceklis.png"
import logo from "../../src/assets/logo.svg"
import jen from "../assets/jen.jpg"
import { useNavigate } from "react-router-dom"
import { useQuery } from "react-query"
import { API } from "../config/api"

const BookVerification =()=>{
    const navigate = useNavigate()
    let { data: literaturs }= useQuery('verificationliteraturCache',
      async() => {
        const response = await API.get('/literaturs')
        return response.data.data
      }
    )
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
                    <th>Action</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {literaturs?.map((item, index)=>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item?.author}</td>
                        <td>{item?.isbn}</td>
                        <td>{item?.title}.pdf</td>
                        <td>Approve</td>
                        <td className="d-flex justify-content-center">
                            <button className="btn bg-maroon text-white fw-bold w-30 me-3"
                              onClick={async () => {
                                const response = await API.delete(`/literatur/${item.id}`);
                                // refetch()
                            }}
                            >Cancel</button>
                            <button className="btn btn-success text-dark fw-bold w-30" >Approv</button>
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