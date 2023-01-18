import React from 'react'
import one from "../images/g1.jpg"
import two from "../images/g2.jpg"
import three from "../images/g3.jpg"
import four from "../images/g4.jpg"
import five from "../images/g5.jpg"
import six from "../images/g7.jpg"



const Gallery = () => {
  return (
    <>
    <div class="container">
        <h3 class="text-center text-dark mt-2 mb-5"> Our Gallery</h3>
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={one}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={two}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={three}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={four}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={five}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={six}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
</div>
    </>
  )
}

export default Gallery
