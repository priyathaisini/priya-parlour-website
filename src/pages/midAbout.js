import React from 'react'
import one from "../images/abouts.jpg"
const MidAbout = () => {
  return (
    <div style={{position:"relative"}} >
        <img src={one} alt="mid" className='w-100 ' style={{ height :"520px" }}/>
        <h3 className='im1 text-dark text-center'   style={{ position:"absolute",top:"20%" ,left:"40%", fontSize:"50px",transform:"translate(-50%,-50%}"}}> About Us</h3>
      
    </div>
  )
}

export default MidAbout
