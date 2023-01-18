import React from 'react'
import "./midImagehome.css"
import mid from "../images/midimage.jpg"
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'
const MidImagehome = () => {
  return (
    <>
      <div class="one" style={{position:"relative"}}>
    
        <img src={mid} class="img-fluid" alt="Wild Landscape" style={{width:"100%",height:"550px"}} />
             <p class="text-white" id="para1" style={{position:"absolute",top:"50%",left:"80%"}}> Stay Unique & create Your Identity </p>
             <Link to ="/contact" class="btn btn-dark" type='button' style={{position:"absolute",top:"80%",left:"80%"}}> book us</Link>
    </div>
      
</>
  )
}

export default MidImagehome
 