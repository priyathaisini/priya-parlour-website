import React from 'react'
import { Link } from 'react-router-dom'
import book1 from "../images/book.jpg"

const Booking = () => {
  return (
    <div>
      <div class="container-fluid  d-flex justify-content-center  bg-dark w-100 m-0">
        <div class="container">
    <div class="row my-2 mx-2 main">
        <div class="col-md-4 col-12 mycol">
            <img src={book1}width="100%" height="100%" alt='bookingimage'/>
        </div>
        <div class="col-md-8 col-12 xcol">
            <h2 class="title pt-5 pb-3 text-light">BOOK US</h2>
            <form class="myform mt-5" >
                <div class="row rone">
                    <div class="form-group col-md-6  py-3">
                        <input type="text" class="form-control" placeholder="First name"/>
                    </div>
                    <div class="form-group col-md-6  py-3">
                        <input type="text" class="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <div class="row rtwo">
                    <div class="form-group col-md-6  py-3">
                        <input type="tel" class="form-control jk" placeholder="Phone 123-456-7890"pattern="^\d{4}-\d{3}-\d{4}$" required/>
                    </div>
                    <div class="form-group col-md-6  py-3">
                        <input type="email" class="form-control lm" placeholder="mailId@gmail.com"/>
                    </div>
                </div>
                <div class="form-group col-md-6  py-3">
                <textarea class="form-control" id="textAreaExample" rows="4" placeholder='Your Message'></textarea>
                  </div>
               
            </form>
            <div class="container text-center mb-5">
            <Link to="/confirm"> <button class="text-light bg-primary "> BOOK US</button></Link>

            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Booking
