import React from 'react'
import { Link } from 'react-router-dom'
import men01 from "../images/men01.jpg"

const Men1 = () => {
  return (
    <div>
      <div class="container w-100">
        <div class="card mt-5">
        <div class="row no-gutters">
          
            <div class="col-md-6 bg" id='color' style={{backgroundColor:"pink"}}>
                <div class="card-block px-2">
                    <h2 class="card-title bride text-danger">Hair Cut & styling</h2>
                    <p class="card-text fs-3  text-dark  mt-4">Hair spa treatments are meant to give your hair a little bit of TLC (tender loving care) to make it go back to its healthy state. But if you depend on salons for your hair spa treatments, you might end up spending a lot of money on your hair treatments out of your monthly budget.</p>
          <Link to="/contact"> <button class="text-light bg-primary text center"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-6 ">
                <img src={men01} class="img-fluid" alt="home1"  style={{height:"450px" ,width:"100%"}}/>
            </div>
        </div>
  </div>        
      
    </div>
    </div>
  )
}

export default Men1
