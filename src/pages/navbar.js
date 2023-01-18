import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import logo from "../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    
  return (
    <>
      <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
      <FontAwesomeIcon icon={faBars}/>

      </label>
      <label class="logo">
      <img src={logo} style={{width:"150px"}} alt="logoimg1"/> 

      </label>
      <ul>
      <li><Link to ="/services">Our Services </Link> </li>
            <li><Link to ="/bridal">Bridal </Link></li>
            <li><Link to ="/about">About Us </Link></li>
            <li> <Link to ="/blog">Blog </Link>  </li>
            <li> <Link to ="/contact">Contact Us </Link></li>
      </ul>
    </nav>
   
    <section></section>

    </>
  )
}

export default Navbar