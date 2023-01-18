import React from 'react'
import { Link } from 'react-router-dom'

const TheirServices = () => {
  return (
    <div>
      <div class="container">
        <div class=" row text-center">
        <div class="col">
         <Link to="/services"> <button class="text-light bg-dark btn-lg ps-5 pe-5"> For HER </button></Link>
         </div>
         <div class="col">
         <Link to="/himServices"> <button class="text-light bg-dark btn-lg ps-5 pe-5"> For HIM</button></Link>
         </div>
      </div>
</div>
    </div>
  )
}

export default TheirServices
