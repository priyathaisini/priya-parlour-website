import React from 'react'
import { Link } from 'react-router-dom'
import body1 from "../images/body1.jpg"
const ServiceMid3 = () => {
  return (
    <div>
       <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color' style={{backgroundColor:"black"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-danger">Body Care Services</h2>
                    <p class="card-text fs-3 text-light mt-4">Every woman likes to have smooth, soft skin which radiates amongst others and sets them apart from the crowd. For that part, they extensively spend large sums of money in buying skin creams, which offer promises of providing more beautiful and a smoother skin to touch</p>
          <Link to="/contact"> <button class="text-light bg-primary text center"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-6 ">
                <img src={body1} class="img-fluid" alt="home1"  style={{height:"450px" ,width:"100%"}}/>
            </div>
        </div>
  </div>  
    </div>
    </div>
  )
}

export default ServiceMid3
