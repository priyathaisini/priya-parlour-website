import React from 'react'
import one from "../images/trial.jpeg"
import { Link } from 'react-router-dom'
import "./trial.css"
const Trial = () => {
  return (
    <div >
        <div>
         <img src={one} class="img-responsive" alt="Wild Landscape" style={{width:"100%",height:"590px"}} />
           <form id="one">
           <h2 className=''> Book for a Free Trial</h2>
           <div class="form-group">
             <label for="exampleInputEmail2">Enter you Name</label>
                <input type="name" class="form-control" id="exampleInputEmail2" placeholder='Enter your name'/>
            </div>
            <div class="form-group">
             <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder='Enter your Email'/>
            </div>
            <div class="form-group">
             <label for="exampleInputEmail3">Date for a Trial</label>
                <input type="date" class="form-control" id="exampleInputEmail3" placeholder='Enter your date'/>
            </div>
            <div class="form-group mt-3">
             <label for="exampleInputEmail4">Choose the Event</label>
             <select className='ms-4'><br/>
                 <option value="">select your event</option>
                  <option value="sangeeth"> Sangeeth</option>
                  <option value="baby shower">Baby Shower</option>
                    <option value="haldi">Haldi/Mehandi</option>
                      <option value="wedding">Wedding</option>
                      <option value="Reception">Reception</option>
                      <option value="party">party</option>

                      </select>
            </div>
            <div class="form-group mt-4">
             <label for="exampleInput5">Mobile number</label>
                <input type="number" class="form-control" id="exampleInput5" placeholder='Enter your Mobile Number'/>
         
            </div>
            <div class="form-group mt-5">

            <Link to =""> <div class="btn btn-primary" type="buttom"> Book us</div></Link>
</div>
           </form>

         </div>
         </div>
  )
}

export default Trial
