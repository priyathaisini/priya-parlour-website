import React from 'react'
import "./servicesMain.css"
import one from "../images/services1.jpg"
import { Link } from 'react-router-dom'

const ServicesMain = () => {
  return (
    <div>
       <div class="container-fluid">
    
      <img src={one} class="img-respomsive" alt="Wild Landscape" style={{width:"100%",height:"550px"}} />
         <p class="text-white" id="para1"> Stay Unique & create Your Identity </p>
         <Link to ="/contact" class="btn btn-dark" type='button'> book us</Link>
</div>
    </div>
  )
}

export default ServicesMain
