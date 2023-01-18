import React from 'react'
import { Link } from 'react-router-dom'
import home1 from "../images/bridalhome.jpg"
const HomeMid1 = () => {
  return (
    <>
    <div class="container w-100">
      <div class="card mt-5">
        <div class="row no-gutters">
            <div class="col-md-6">
                <img src={home1} class="img-fluid" alt="home1"  style={{height:"420px" ,width:"100%"}}/>
            </div>
            <div class="col-md-6" style={{backgroundColor:"black"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride" style={{color:"goldenrod"}}>Bridal Makeup </h2>
                    <p class="card-text fs-3">There are plenty of things to prepare for your special day. But the 
                    Your big day is just around the corner. You have everything planned  from all your outfits to your makeup and hair for each and every event. Youve packed all your essential makeup products  in your makeup kit too. .</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
  </div>  
  </div>
    </>
  )
}

export default HomeMid1
