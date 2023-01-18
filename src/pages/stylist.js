import React from 'react'
import "./stylist.css"
import professional1 from "../images/01.jpeg"
import professional2 from "../images/on.jpg"
import professional3 from "../images/t1.jpg"


const Stylist = () => {
  return (
    <>
        
      <div class="container">
      <h1 class="text-center mb-5" style={{color:"black"}}>  OUR POPULAR SPECIALIST</h1>
        <div class="row">
         <div class="col-md-4">
             <div class="content"> <div>
                     <div class="content-overlay"></div> <img class="content-image" src={professional1}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">TEJASINI</h3>
                         <h4 class="content-text text-light">Bridal Artist</h4>
                     </div>
                 </div> </div>
         </div>
         <div class="col-md-4">
             <div class="content"> <div>
                     <div class="content-overlay"></div> <img class="content-image" src={professional2}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">SUJEESH</h3>
                         <h4 class="content-text text-light">Hair Specialist</h4>
                     </div>
                 </div> </div>
         </div>
         <div class="col-md-4">
             <div class="content"> <div>
                     <div class="content-overlay"></div> <img class="content-image "  src={professional3}/>
                     <div class="content-details fadeIn-bottom">
                         <h3 class="content-title">ELENTIYA</h3>
                         <h4 class="content-text text-light"> Makeup Artist</h4>
                     </div>
                 </div> </div>
         </div>
     </div>
 </div>
    </>
  )
}

export default Stylist
