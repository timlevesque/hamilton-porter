import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import Logo from "../images/hp-logo.svg"

const Header = ({ siteTitle }) => ( <header >
    <Container>
    <Navbar expand = "md" className = "container" >
    <Navbar.Brand href = "/" >
    <img src = { Logo } height = "40px" alt = "Hamilton-Porter" />
    </Navbar.Brand> 
    <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
    <Navbar.Collapse id = "responsive-navbar-nav" >
    <Nav className = "ml-auto" as = "li" >

    <Link to = "/clients" className = "nav-link py-5 py-md-2"activeClassName = "active" > Clients </Link> 
    <Link to = "/candidates" className = "nav-link py-5 py-md-2"
    activeClassName = "active" > Candidates </Link> 
    <Link to = "/about" className = "nav-link py-5 py-md-2" activeClassName = "active" > About Us </Link> 
    { /* <Link  to="/blog" className="nav-link py-5 py-md-2" activeClassName="active">Blog</Link> */ }

    </Nav>
    </Navbar.Collapse>
    </Navbar>
    </Container>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header