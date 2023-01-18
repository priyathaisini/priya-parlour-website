import React from 'react'
import one from "../images/blog1.jpg"
const BlogMain = () => {
  return (
    <div>
        <div style={{position:"relative"}} >
        <img src={one} alt="mid" className='w-100 ' style={{ height :"520px" }}/>
        <h3 className='im1  text-center  p-2'   style={{ backgroundColor:"black",color:"goldenrod", position:"absolute",top:"40%" ,left:"40%", fontSize:"50px",transform:"translate(-50%,-50%}"}}> Our Blog </h3>
      
    </div>
    </div>
  )
}

export default BlogMain
