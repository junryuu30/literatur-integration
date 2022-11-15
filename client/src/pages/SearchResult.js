import React, { useState } from 'react'
import { Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import btseacrh from "../assets/btseacrh.svg"

import fakepdf from "../assets/fakePdf.png"
import AllNavbar from '../components/AllNavbar'
import { API } from '../config/api'
// import { dataJurnal } from '../dummyData/dataJurnal'

function SearchResult() {
    const navigate = useNavigate()
    const [query, setQuery] = useState("")
    const [form, setForm] = React.useState({
        year:'',
      });

  const { year } = form;


      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }

    let { data: searchs }= useQuery('searchliteraturCache',
      async() => {
        const response = await API.get('/literaturs/approve')
        return response.data.data
      }
    )

    console.log("ini data literatur", searchs)
  return (
    <>
        <AllNavbar/>
        <div className='bg-black profile-page'>
            <Container>
                <Row>
                    <Col className="col-12 col-lg-7">
                        <div className="d-flex">
                            <InputGroup className="mb-3 me-3">
                                <Form.Control
                                type="text"
                                placeholder="Search for literatur"
                                className=""
                                onChange={(e)=> setQuery(e.target.value)}
                                />
                            </InputGroup>
                            <div>
                                <img src={btseacrh} alt="" style={{width:"40px", position: "absolute", buttom: "75px"}}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-lg-2 me-3">
                        <h5 className='text-danger mb-2'>Anytime</h5>
                        <Form.Select aria-label="Default select example" value={year} name="year" onChange={(e)=> setQuery(e.target.value)}>
                            <option value="">Since Tahun</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2022</option>
                        </Form.Select>
                    </Col>
                    <Col className="mt-3">

                        <Row>

                        {/* {searchs?.map((item, index)=>( */}
                        
                        {searchs?.filter((item)=>{
                            return query.toLocaleLowerCase() === '' ? item : item.title.toLocaleLowerCase().includes(query);
                        })
                        .map((item, index)=>(
                            <Col key={index} 
                            // onClick={()=>navigate("/detail-literature")}
                            
                            >
                        <div  className='card-sr text-white' style={{width:"200px"}}
                        onClick={() => navigate(`/detail-literature/${item?.id}`)}
                        >
                            {/* <img alt="" src={fakepdf}/> */}
                            <img alt="" src={item?.cover}/>
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
  )
}

export default SearchResult