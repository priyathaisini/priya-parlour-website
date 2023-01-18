import React from 'react'
import { Link } from 'react-router-dom'
import "./midMen.css"
import midMen from "../images/midMen.jpg"
const MidMen = () => {
  return (
    <div>
       <div class="container-fluid ms-0 me-0 " style={{backgroundcolor:"red"}}>
    
    <img src={midMen} class="img-fluid w-100" alt="Wild Landscape" style={{width:"100%",height:"550px"}} />
         <p class="text-white" id="para1"> Stay Unique & create Your Identity </p>
         <Link to ="/contact" class="btn btn-dark" type='button'> book us</Link>
</div>
    </div>
  )
}

export default MidMen
