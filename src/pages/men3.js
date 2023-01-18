import React from 'react'
import { Link } from 'react-router-dom'
import haircol1 from "../images/haircol1.jpg"
const Men3 = () => {
  return (
    <div>
      <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color' style={{backgroundColor:"lightpink"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-danger">Hair Colouring </h2>
                    <p class="card-text fs-3 text-light mt-4">Hairstyles shine and luster with good chemical free colours. Give that dash of spunk with our super friendly services.

</p>
          <Link to="/contact"> <button class="text-light bg-primary text center"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-6 ">
                <img src={haircol1} class="img-fluid" alt="home1"  style={{height:"450px" ,width:"100%"}}/>
            </div>
        </div>
  </div>        
      
    </div>
    
    </div>
  )
}

export default Men3
