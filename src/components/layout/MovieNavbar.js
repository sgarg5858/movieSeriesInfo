import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
const MovieNavbar = () => {
    return (
        <Navbar  variant="dark" bg="dark">
            <Navbar.Brand ><Link to="/" style={{color:'#79ffb7',fontSize:'30px'}}>MovieSeriesInfo</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav>
                {/* <Nav.Text >
                <span className="fab fa-imdb fa-4x" style={{color:'#79ffb7'}}></span>
                </Nav.Text> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MovieNavbar
