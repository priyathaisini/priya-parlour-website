import React from 'react'
import { Link } from 'react-router-dom'
import spa from "../images/spam.jpg"
const Men5 = () => {
  return (
    <div>
       <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color' style={{backgroundColor:"tan"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-danger">Hair Spa </h2>
                    <p class="card-text fs-3 text-dark mt-4">Experience the joy of a hair salon just like home with our services. Naturals spa is a miracle booster that every human needs. 
             </p>
          <Link to="/contact"> <button class="text-light bg-primary text center"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-6 ">
                <img src={spa} class="img-fluid" alt="home1"  style={{height:"450px" ,width:"100%"}}/>
            </div>
        </div>
  </div>        
      
    </div>
    </div>
  )
}

export default Men5
