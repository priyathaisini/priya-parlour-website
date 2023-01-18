import React from 'react'
import one from "../images/fin.jpg"
const MidFin = () => {
  return (
    <div>
        <div style={{position:"relative"}} >
        <img src={one} alt="mid" className='w-100 ' style={{ height :"520px" }}/>
        <h3 className='im1  text-center  p-2'   style={{ color:"goldenrod", position:"absolute",top:"50%" ,left:"47%", fontSize:"30px"}}> Thanks For your  Confirmation!!!</h3>
      
    </div>
    </div>
  )
}

export default MidFin
