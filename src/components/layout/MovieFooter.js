import React from 'react'
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import Typist from 'react-typist'
const MovieFooter = () => {
    return (
        <Navbar sticky="bottom"  variant="dark" style={{marginTop:'55vh'}} bg="dark">
               <Col lg={{span:6,offset:3}} md={{span:8,offset:2}} sm={{span:10,offset:1}} xs={{span:12,offset:0}} >
               <Typist>
               <span style={{color:'white',fontSize:'25px'}}>Developed by  </span>
                   <span style={{color:'#79ffb7',fontSize:'25px'}}> Sanjay Garg </span>
                   <span style={{color:'white',fontSize:'25px'}}> using  </span>
                   <span style={{color:'#79ffb7',fontSize:'25px'}}>  React </span>
                   <span style={{color:'white',fontSize:'25px'}}> and </span>
                   <span style={{color:'#79ffb7',fontSize:'25px'}}> Redux </span>
                </Typist>
                  
               </Col> 
        </Navbar>
    )
}

export default MovieFooter
