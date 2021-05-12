import { Link } from "gatsby"
import React from "react"
import Logo from "../images/hp-logo-white.svg"
import {Container, Nav, Row, Col } from 'react-bootstrap'


const Footer = () => (
    <footer className="bg-footer  pt-5">
      <Container>
          <Row className="py-5">
              <Col xs="12" lg="4" className=" py-4 align-self-center text-center text-lg-left">
                <img className="" src={Logo} height="40px"  alt="Hamilton-Porter"/>
                </Col> 

                <Col xs="12" lg="4" className="py-4 text-white align-self-center text-center">
                    <p className="text-white" >&copy;{(new Date().getFullYear())} Hamilton-Porter LLC</p>
                    <p><a className="text-white" href="https://www.google.com/maps/place/3700+Campus+Dr+Ste+104,+Newport+Beach,+CA+92660/@33.6626794,-117.876138,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcde5448c59a45:0x62c942e7efd3418e!8m2!3d33.6626794!4d-117.8739493">3700 Campus Drive, Suite 104, Newport Beach, CA 92660</a></p>
                </Col>
                <Col xs="4" className="py-4 align-self-center mx-auto"> 
                <Nav  className="" as="li">
                    <Nav.Item className="mx-auto ml-lg-auto mx-lg-0">   
                        <Link to="#" className="nav-link fb-icon m-1" activeClassName="active"></Link>
                    </Nav.Item>
                    <Nav.Item className="mx-auto mx-lg-0">
                        <Link  to="#" className="nav-link in-icon m-1" activeClassName="active"></Link>
                    </Nav.Item>
    </Nav>
                </Col>
           </Row>
      </Container> 
    </footer>
  )
  

  
  export default Footer