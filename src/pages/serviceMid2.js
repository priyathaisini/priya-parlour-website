import React from 'react'
import skin2 from "../images/skin2.jpg"
import { Link } from 'react-router-dom'
const ServiceMid2 = () => {
  return (
    <div>
       <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color'>
            <img src={skin2} class="img-fluid" alt="home1"  style={{height:"450px" ,width:"100%"}}/>

            </div>
            <div class="col-md-6" style={{backgroundColor:"black"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-secondary ">Skin Care Makeup</h2>
                    <p class="card-text fs-3 mt-4" style={{color:"pink"}}>The skin's clarity of acne, wrinkles, and sunburns is merely an assistance to their stature of confidence. Having healthy skin is a step to confidence. Becoming worry-free of appearances good sleeping, eating, and drinking habits lead to the success of a healthy looking person.</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
  </div>  
    </div>
    </div>
  )
}

export default ServiceMid2
