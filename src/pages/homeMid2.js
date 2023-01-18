import React from 'react'
import { Link } from 'react-router-dom'
import home1 from "../images/makeup1.jpg"
const HomeMid2 = () => {
  return (
    <div>
      <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color' style={{backgroundColor:"black"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride" style={{color:"goldenrod"}}>Skin Care Makeup</h2>
                    <p class="card-text fs-3">The skin's clarity of acne, wrinkles, and sunburns is merely an assistance to their stature of confidence. Having healthy skin is a step to confidence. Becoming worry-free of appearances good sleeping, eating, and drinking habits lead to the success of a healthy looking person.</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-6">
                <img src={home1} class="img-fluid" alt="home1"  style={{height:"420px" ,width:"100%"}}/>
            </div>
        </div>
  </div>  
    </div>
    </div>
  )
}

export default HomeMid2
