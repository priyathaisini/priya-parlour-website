import React from 'react'
import { Link } from 'react-router-dom'
import beard1 from "../images/beard.jpg"
const Men2 = () => {
  return (
    <div>
      <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color'>
            <img src={beard1} class="img-fluid" alt="home1"  style={{height:"450px" ,width:"100%"}}/>

            </div>
            <div class="col-md-6 " style={{backgroundColor:"rosybrown"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-danger">Beard Trim / Shave </h2>
                    <p class="card-text fs-3 text-light mt-4">Style your hair with the best hands. At naturals, we create nice looks for all events. Be a show-stopper at all events with our “go-to hairdressers.”</p>
          <Link to="/contact"> <button class="text-light bg-primary text center"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
  </div>        
      
    </div>
    
    </div>
  )
}

export default Men2
