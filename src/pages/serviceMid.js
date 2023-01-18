import React from 'react'
import hair1 from "../images/hair1.jpg"
import { Link } from 'react-router-dom'
const ServiceMid = () => {
  return (
    <div>
      <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color' style={{backgroundColor:"black"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-danger">Hair Care Services</h2>
                    <p class="card-text fs-3 text-light mt-4">Your hair is your crowning glory and it is only fair that you treat it like a precious gem. From the best hair care products to regular salon visits, you try to do everything to keep your hair in great condition. </p>
          <Link to="/contact"> <button class="text-light bg-primary text center"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-6 ">
                <img src={hair1} class="img-fluid" alt="home1"  style={{height:"450px" ,width:"100%"}}/>
            </div>
        </div>
  </div>  
  </div>
    </div>
  )
}

export default ServiceMid
