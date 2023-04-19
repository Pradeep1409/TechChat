import React from 'react'
import { Container, Row, Col,Form,Button } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
import cont from "../../Assets/about.png";

const Contact = () => {
    return (
        <>

            <Container Container  mx-40 style={{width:"100%" ,marginLeft:"35px" }}>
                <Row >
                    <Col>
                        <Row>
                            <h3 className='purple mt-5' >Contact US</h3>
                        </Row>
                        <Row>
                        
                            <Form.Label htmlFor="inputPassword5" className='purple d-flex h5'>Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="Name"
                                aria-describedby="passwordHelpBlock"
                            />  
                        </Row>
                        <Row>
                        
                            <Form.Label htmlFor="inputPassword5" className='purple d-flex h5'>Gmail</Form.Label>
                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />  
                        </Row>
                        <Row>
                        
                            <Form.Label htmlFor="inputPassword5" className='purple d-flex h5 '>Subject</Form.Label>
                            <Form.Control
                                type="Subject"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />  
                        </Row>
                        <Row>
                        
                            <Form.Label htmlFor="inputPassword5" className='purple d-flex h5'>Message</Form.Label>
                            <Form.Control
                                type="textarea"
                                id="message"
                                className='container-fluid'
                                aria-describedby="passwordHelpBlock"
                                style={{
                                    height:"300px",
                                    // width:"250px"
                                }}
                            />  
                        </Row>
                         
                         <Row>
                        <Button variant="primary">Submit</Button>
                        

                         </Row>

                    </Col>
                    

                    <Col  className='mt-5 align-items-center' md={5} style={{ paddingBottom: 20 }}>
                  <img 
                 
                src={cont}
                alt="home pic"
                className="img-fluid mt-5 justify-content-center"
                style={{ maxHeight: "450px" }}
              />
               </Col>
           
                </Row>
            </Container>
        </>
    )
}

export default Contact