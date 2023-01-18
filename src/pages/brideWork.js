import React from 'react'
import one from "../images/brides01.jpg"
import two from "../images/brides02.jpg"
import three from "../images/brides03.jpg"
import four from "../images/brides05.jpg"
import five from "../images/brides04.jpg"
import six from "../images/brides07.jpg"
import seven from "../images/brides08.jpg"
import eight from "../images/brides06.jpg"

const BrideWork = () => {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center'> Our Bridal Works</h2>
        <div className='row'>
            <div className='col'>
               <img src={one} className='img-fluid' alt="bride image"/>
            </div>
            <div className='col'>
            <img src={two} className='img-fluid' alt="bride image"/>

            </div>
             <div className='col'>
            <img src={three} className='img-fluid' alt="bride image"/>
             </div>
             <div className='col'>
            <img src={four} className='img-fluid' alt="bride image"/>
             </div>
             </div>
             <div className='row mt-5' >

             <div className='col'>
            <img src={five} className='img-fluid' alt="bride image"/>
             </div>
             <div className='col'>
            <img src={six} className='img-fluid' alt="bride image"/>
             </div>
             <div className='col'>
            <img src={seven} className='img-fluid' alt="bride image"/>
             </div>
             <div className='col'>
            <img src={eight} className='img-fluid' alt="bride image"/>
             </div>
        </div>

      </div>
    </div>
  )
}

export default BrideWork
