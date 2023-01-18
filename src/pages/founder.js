import React from 'react'
import b1 from "../images/f1.jpg"
const Founder = () => {
  return (
    <>
         <div className=' mt-5'>
       <div className='container  '>
        <h2 className='text center text-dark mt-5'> Our Founding Pillar </h2>
        <div class="card mt-5 border border-light">
        <div class="row no-gutters ">
            <div class="col-md-6">
                <img src={b1} class="img-fluid" alt="home1"  style={{height:"520px" ,width:"100%"}}/>
            </div>
            <div class="col-md-6 m-0  mt-5" style={{backgroundColor:"black"}}>
                <div class="card-block  ">
                    <h2 class="card-title bride mt-5" style={{color:"goldenrod"}}>PRIYATHARISINI  </h2>
                    <p class="card-text fs-3 text-light">The main segment of the population that is targeted by the salon is the younger generation, which is the youth. It has been noticed that adolescents like different and new looks, which are apart from others. They like to look very special and The Makeover Beauty Salon has all the means to satisfy the needs of the main targeted group.

</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>


    </>
  )
}

export default Founder
