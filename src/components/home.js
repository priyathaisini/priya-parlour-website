import React from 'react'
import Booking from '../pages/booking'
import Footers from '../pages/footers'
import Gallery from '../pages/gallery'
import HomeMid1 from '../pages/homeMid1'
import HomeMid2 from '../pages/homeMid2'
import HomeMid3 from '../pages/homeMid3'
import MidImagehome from '../pages/midImagehome'
import Navbar from '../pages/navbar'
import Stylist from '../pages/stylist'
import Testimonial from '../pages/testimonial'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <MidImagehome/>
      <HomeMid1/>
      <HomeMid2/>
      <HomeMid3/>
      <Stylist/>
      <Testimonial/>
      <Gallery/>
      <Booking/>
      <Footers/>

    </div>
  )
}

export default Home
