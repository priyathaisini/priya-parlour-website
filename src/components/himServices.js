import React from 'react'
import Booking from '../pages/booking';
import Footers from '../pages/footers';
import Men1 from '../pages/men1';
import Men2 from '../pages/men2';
import Men3 from '../pages/men3';
import Men4 from '../pages/men4';
import Men5 from '../pages/men5';
import Men6 from '../pages/men6';
import MidMen from '../pages/midMen';
import Navbar from '../pages/navbar';

const HimServices = () => {
  return (
    <div>
       <Navbar/>
       <MidMen/>
       <Men1/>
    <Men2/>
    <Men3/>
    <Men4/>
    <Men5/>
    <Men6/>
       <Booking/>
       <Footers/>
    </div>
  )
}

export default HimServices;