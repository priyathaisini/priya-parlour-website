import React from 'react'
import { Link } from 'react-router-dom'
import home1 from "../images/hairhome..jpg"
const HomeMid3 = () => {
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
                    <h2 class="card-title bride" style={{color:"goldenrod"}}>Healthy Hair Care </h2>
                    <p class="card-text fs-3">Your hair is crowning glory and it is fair that you treat it like a precious gem. From the best hair care products to regular salon visits, you try to do everything to keep your hair in great condition.but pollution, stress, genetics along with many other factors can lead  problems</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
  </div> 
  </div> 
    </>
  )
}

export default HomeMid3
