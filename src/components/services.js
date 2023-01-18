import React from 'react'
import Booking from '../pages/booking'
import Footers from '../pages/footers'

import Navbar from '../pages/navbar'
import ServiceMid from '../pages/serviceMid'
import ServiceMid2 from '../pages/serviceMid2'
import ServiceMid3 from '../pages/serviceMid3'
import ServicesMain from '../pages/servicesMain'
import TheirServices from '../pages/theirServices'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <ServicesMain/>
      <TheirServices/>
      <ServiceMid/>
      <ServiceMid2/>
      <ServiceMid3/>
      <Booking/>
      <Footers/>
    </div>
  )
}

export default Services
