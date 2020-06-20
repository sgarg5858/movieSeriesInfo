import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const MovieNavbar = () => {
    return (
        <Navbar  variant="dark" bg="dark">
            <Navbar.Brand ><span style={{color:'#79ffb7',fontSize:'30px'}}>MovieSeriesInfo</span></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link  href="#memes">
                <span className="fab fa-imdb fa-4x" style={{color:'#79ffb7'}}></span>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MovieNavbar
