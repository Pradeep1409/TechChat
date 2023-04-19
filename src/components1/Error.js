import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Error = () => {
  return (
    <>
        
          
        <Container>
                <Row style={{ justifyContent: "center", padding: "5px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "10px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "5px",marginTop:"100px", justifyContent: "center" }}>
                        <pre className="purple">              This page could not be found </pre> <strong className="purple">404 Error</strong>
                        </h1>
                        {/* <Aboutcard /> */}
                    </Col>
                     
                </Row>
                <Row>
                <img style={{width:"700px",justifyContent:"center",marginTop:"-280px"}}src="https://i.imgur.com/qIufhof.png" />
                </Row>




            </Container>
    </>
  )
}

export default Error