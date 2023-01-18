import React from 'react'
import "./time.css"
const Time = () => {
  return (
    <>
     <div class="container " style={{backgroundColor:"sienna"}}>
<div class="main-timeline">

                        <div class="timeline">
                            <h3 className='text-center text-dark mb-5 mt-5'style={{fontSize:"40px"}}> OUR JOURNEY </h3>
                            <div class="date-content bg-danger  ">
                                <div class="date-outer ">
                                    <span class="date">
                                    <span class="year">2022</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content" style={{backgroundColor:"tomato"}}>
                                <h5 class="title">Launched & Success</h5>
                                <p class="description text-dark">
                                   We spread across 25 cities in India with best provided services and utmost care.
                                </p>
                            </div>
                        </div>
                        
                        <div class="timeline">
                            <div class="date-content"  style={{backgroundColor:"PaleVioletRed"}}>
                                <div class="date-outer">
                                    <span class="date">
\                                    <span class="year" style={{marginTop:"1px"}}>2021</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content" style={{backgroundColor:"plum"}}>
                                <h5 class="title">Best Bridal Services</h5>
                                <p class="description text-dark">
                                  Certification For best Bridal Services in chennai    </p>
                            </div>
                        </div>
                     
                        <div class="timeline">
                            <div class="date-content" style={{backgroundColor:"coral"}}>
                                <div class="date-outer">
                                    <span class="date">
                                    <span class="year">2020</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content"style={{backgroundColor:"steelblue"}}>
                                <h5 class="title">New Openings</h5>
                                <p class="description text-dark">
                                   Our services spread over 10places across Tamilnadu
                                </p>
                            </div>
                        </div>
                       
                        <div class="timeline">
                            <div class="date-content" style={{backgroundColor:"burlywood"}}>
                                <div class="date-outer">
                                    <span class="date">
                                    <span class="year">2019</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content"style={{backgroundColor:"hotpink"}}>
                                <h5 class="title">First Franchise</h5>
                                <p class="description text-dark">
                                Our first franchise we got in chennai with 11 staffs   </p>
                            </div>
                        </div>

                    </div>
</div> 
    </>
  )
}

export default Time
