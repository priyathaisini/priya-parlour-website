import React from 'react'
import one from "../images/blog01.jpg"
import two from "../images/blog02.jpg"
import three from "../images/blog03.jpg"
import four from "../images/blog04.jpg"
import five from "../images/blog05.jpg"
import six from "../images/blog06.jpg"
import { Link } from 'react-router-dom'


const BlogCenter = () => {
  return (
    <div className='container  mt-5'>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card" style={{width:"20rem"}}>
      <img src={one} class="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div class="card-body bg-dark">
        <h5 class="card-title text-danger">Skin care at Home .What to do for smooth and shining Skin.</h5>
        <p class="card-text text-light">
        Your skin is the largest organ that you have, so you want to take care of it. Glowing skin is typically seen as a sign of health and vitality. Dull or dry skin, on the other hand, can make you feel less than your best.
        </p>
        <Link to="/"> <button class="text-light bg-primary"> KNOW MORE</button></Link>

      </div>
    </div>
  </div>
  <div class="col -md-4">
    <div class="card" style={{width:"20rem"}}>
      <img src={two} class="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div class="card-body bg-dark">
        <h5 class="card-title text-danger">Simple makeup for  Beginners.</h5>
        <p class="card-text text-light">
        Makeup may do magical things, but it doesn't have to be a mystery. Applying a basic, natural look doesn't require a lot of skill or tools. You can do lots of the blending with your fingertips, and choose to leave out certain products if they don't appeal to you.
        </p>
        <Link to="/"> <button class="text-light bg-primary"> KNOW MORE</button></Link>

      </div>
    </div>
  </div> <div class="col">
    <div class="card" style={{width:"20rem"}}>
      <img src={three} class="card-img-top"
        alt="Hollywood Sign on The Hill" />
      <div class="card-body bg-dark">
        <h5 class="card-title text-danger"> Eye makeup for Beginners.</h5>
        <p class="card-text text-light">
        Simple eye makeup is an art of the goddesses and what it does to your face is beyond mesmerizing. It instantly changes your entire face, making you look fierce and fabulous. All it takes to master the art of flawless eye makeup is practice.
        </p>
        <Link to="/"> <button class="text-light bg-primary"> KNOW MORE</button></Link>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width:"20rem"}}>
      <img src={four} class="card-img-top"
        alt="Palm Springs Road" />
      <div class="card-body bg-dark">
        <h5 class="card-title text-danger ">How to maintain a Healthy hair at Home? </h5>
        <p class="card-text text-light">
        Bad hair days are a bummer; that's a beauty truth. But they are no joke. Women say a bad hair day makes them feel less confident. So, when your hair is in good shape, it undoubtedly looks better, and the chances of that happening are far less likely.
        </p>
        <Link to="/"> <button class="text-light bg-primary"> KNOW MORE</button></Link>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width:"20rem"}}>
      <img src={five} class="card-img-top" alt="Los Angeles Skyscrapers" />
      <div class="card-body bg-dark">
        <h5 class="card-title text-danger">Step-by-Step Bridal Makeup At home</h5>
        <p class="card-text text-light ">
        If you had to pick one moment for your makeup to well and truly play ball, your wedding day would likely be up there. Dewy, but not disco ball-esque, natural but not dull - and it has to be sweat-proof and camera-proof for obvious reasons. 
        </p>
          <Link to="/"> <button class="text-light bg-primary"> KNOW MORE</button></Link>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{width:"20rem"}}>
      <img src={six} class="card-img-top"alt="Skyscrapers" />
      <div class="card-body bg-dark ">
        <h5 class="card-title text-danger">Concealer or Moisturizer which comes first?</h5>
        <p class="card-text text-light">  
        Start by cleaning your skin with a cleanser and following it up with a moisturiser. Don’t forget to apply an under-eye cream to ensure your concealer goes on smoothly and does not settle into creases. Concealer in makeup can do a lot of things.
        </p>
        <Link to="/"> <button class="text-light bg-primary"> KNOW MORE</button></Link>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BlogCenter