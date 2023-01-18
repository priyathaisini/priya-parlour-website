import React from 'react'
import { Link } from 'react-router-dom'
import straight from "../images/straight.jpg"
const Men6 = () => {
  return (
    <div>
        <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color'>
            <img src={straight} class="img-fluid" alt="home1"  style={{height:"515px" ,width:"100%"}}/>

            </div>
            <div class="col-md-6 " style={{backgroundColor:"plum"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-danger">Head straightening & Smoothening</h2>
                    <p class="card-text fs-3 text-light mt-4">Mane matters for every man at Naturals hair care comes first and our salonists prescribe the best style first and smoothening next.Scalp treatment (Anti hair fall & Anti dandruff)We take care of everything from hair fall and dandruff. Naturals redefines you with its best hair care treatment. Style it with Naturals.</p>
          <Link to="/contact"> <button class="text-light bg-primary text center"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
  </div>        
      
    </div> 
    </div>
  )
}

export default Men6
