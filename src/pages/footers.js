import { faFacebook, faInstagram, faLinkedinIn, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footers = () => {
  return (
    <>
      <footer className='text-white pt-5 pb-4' style={{backgroundColor:"black"}}>
      <div className='container text-center text-md-left '>
            <div className='row text-center text-md-left'>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h5 className='mb-4 font-weight-bold text-warning '> PRIVEE PARLOUR</h5>
                <p>Our Company serves the best services and we treat our customers atmost care of with all basic and necessary amenities.We work for the name than money and its game</p>
              </div>
              <div  className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Our Services </h5>

                <div><Link to="/bridal" className='text-decoration-none  text-white' >Bridal Services</Link></div>
                <div>  <Link to="/services" className='text-decoration-none  text-white' >Hair Care</Link></div>
                <div><Link to="/services" className='text-decoration-none  text-white' >Skin Care</Link></div>
                <div><Link to="/services" className='text-decoration-none  text-white' >Body Care</Link></div>

              </div>
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> Useful Links </h5>
                <div><Link to="/about" className='text-decoration-none  text-white' >About Us</Link></div>
                <div>  <Link to="/blog" className='text-decoration-none  text-white' >Blog </Link></div>
                <div><Link to="/services" className='text-decoration-none  text-white' >Services</Link></div>
                <div><Link to="/contact" className='text-decoration-none  text-white' >Contact</Link></div>

              </div>
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                  <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> Contact Us </h5>
               <div><FontAwesomeIcon icon={faHome} className="me-3"/> No 184A Anna Nagar ,Chennai</div>
               <div  class="mt-2 "><FontAwesomeIcon icon={faPhone}  className="me-3"/>91+ 8979829100</div>
               <div  class="mt-2 "><FontAwesomeIcon icon={faEnvelope}  className="me-3"/>priyaeka1213@gmail.co</div>



              </div>
            </div>
            <hr className='mb-4'/>
            <div className='row align-items-center'>
              <div className='col-md-7 col-lg-8'>
                <p> Copyright &copy; All rights Reserved By: <span className='text-warning' > Privee Parlour
                </span></p>
              </div>
              <div className='col-md-5 col-lg-4'>
                <div className='text-center text-md-right'>
                  <ul className='list-unstyled list-inline'>
                    <li className='list-inline-item'>
                      <Link to="" className='btn-floating btn-sm text-white me-2' style={{fontSize:"25px"}}> <FontAwesomeIcon icon={faFacebook}/> </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="" className='btn-floating btn-sm text-white me-2' style={{fontSize:"25px"}}> <FontAwesomeIcon icon={faInstagram}/> </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="" className='btn-floating btn-sm text-white me-2' style={{fontSize:"25px"}}> <FontAwesomeIcon icon={faWhatsapp}/> </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="" className='btn-floating btn-sm text-white me-2' style={{fontSize:"25px"}}> <FontAwesomeIcon icon={faLinkedinIn}/> </Link>
                    </li>
                    <li className='list-inline-item'>
                      <Link to="" className='btn-floating btn-sm text-white' style={{fontSize:"25px"}}> <FontAwesomeIcon icon={faTelegram}/> </Link>
                    </li>
                     </ul>
                </div>
              </div>
            </div>
      </div>
      </footer>
    </>
  )
}

export default Footers
