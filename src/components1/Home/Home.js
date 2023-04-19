import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import ChatRoom from "./ChatRoom";
import Type from "./Type";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import MainForm from './components/MainForm';
 
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> TechChat</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              
                <Col md={5} style={{ paddingBottom: 20 }}>
                    <img
                      src={homeLogo}
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxHeight: "450px" }}
                    />


                  </Col>
                
                 
                  
                
              

              {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}


              {/* </Col>  */}
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
    </>
  );
}

export default Home;
