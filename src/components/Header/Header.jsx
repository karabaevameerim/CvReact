import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import"../Header/Header.css"


const Header = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container style={{display: "flex", justifyContent: "space-between"}}>
          <Navbar.Brand style={{fontFamily: 'Cinzel Decorative, cursive'}}>JSdevP</Navbar.Brand>
          <Nav style={{display: "flex", justifyContent: "space-between"}}>
           <Link style={{ textDecoration: 'none'}} to="/"><Navbar.Brand style={{marginLeft: "50px"}}>Home</Navbar.Brand></Link>
          <Link style={{ textDecoration: 'none'}} to="/about">  <Navbar.Brand style={{marginLeft: "50px"}}>About</Navbar.Brand></Link>
            <Link style={{ textDecoration: 'none'}} to='/portfolio'><Navbar.Brand style={{marginLeft: "50px"}}>Portfolio</Navbar.Brand></Link>
            <Link style={{ textDecoration: 'none'}} to='/exp'><Navbar.Brand style={{marginLeft: "50px"}}>Experience</Navbar.Brand></Link>
            <Link style={{ textDecoration: 'none'}} to='/contact'><Navbar.Brand style={{marginLeft: "50px"}}>Contact</Navbar.Brand></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header