import React from 'react'
import { Link } from 'react-router-dom'
import b1 from "../images/b1.jpg"
import b2 from "../images/b2.jpg"
import b3 from "../images/b3.jpg"
import b4 from "../images/b4.jpg"
import b5 from "../images/b5.jpg"


const BrideMid1 = () => {
  return (
    <div className>
       <div className='container  mt-3'>
        <h2 className='text center text-dark mt-5'> Our Bridal Services</h2>
        <div class="card mt-5 border border-light">
        <div class="row no-gutters ">
            <div class="col-md-7">
                <img src={b1} class="img-fluid" alt="home1"  style={{height:"520px" ,width:"100%"}}/>
            </div>
            <div class="col-md-5 m-0  mt-5" style={{backgroundColor:"black"}}>
                <div class="card-block  ">
                    <h2 class="card-title bride mt-5"style={{color:"red"}}>Our Wedding Looks Bring All Your Dreams To Life!  </h2>
                    <p class="card-text fs-3 text-light">Indian weddings are larger than life! With the number of events involved, such as mehendi, cocktail, sangeet, haldi, muhurtham, and reception, it is natural for the bride and the groom to want the best of looks ranging from traditional to contemporary. .</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
        <div className='cards border border-light'>
        <div class="row no-gutters ">
            <div class="col-md-6  " style={{backgroundColor:"black" , marginTop:"20px"}} >
            <div class="card-block px-2  ">
                    <h2 class="card-title bride" style={{color:"green"}}>Make-Up</h2>
                    <p class="card-text fs-3">Our celebrity artists create the bride and groom makeup looks depending on different face shapes and complexions to highlight their natural features and make them look stellar. With the help of professional equipment and techniques, our expert stylists create everything from classic, traditional looks to chic, modern looks for women and sharp, dapper looks for men.</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-6 mt-5">
               
                <img src={b2} class="img-fluid" alt="home1"  style={{height:"520px" ,width:"100%"}}/>

            </div>
        </div>
        </div>
        <div class="card  border border-light">
        <div class="row no-gutters ">
            <div class="col-md-7" style={{marginTop:"90px"}}>
                <img src={b3} class="img-fluid" alt="home1"  style={{height:"520px" ,width:"100%"}}/>
            </div>
            <div class="col-md-5 mt-5" style={{backgroundColor:"black", marginTop:"130px"}}>
                <div class="card-block px-2 mt-5">
                    <h2 class="card-title bride mt-5" style={{color:"pink"}}>Hairstyles</h2>
                    <p class="card-text fs-3 text-light">Hairstyling is just as important as wedding day makeup. Our stylists work magic on your hair to create anything from trendy to traditional styles that perfectly complement your outfit and the occasion. Not just that, we customize accessories based on your outfit and makeup style to tie the whole look together.</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
        <div class="card  border border-light">
        <div class="row no-guttersborder border-light ">
            <div class="col-md-7  "style={{backgroundColor:"black", marginTop:"30px"}}>
            <div class="card-block px-2">
                    <h2 class="card-title bride" style={{color:"orange"}}>Mehandi</h2>
                    <p class="card-text fs-3 text-light">Weddings are incomplete without Mehendi. Nowadays, it is more than just tradition. Brides and grooms can adorn their hands with beautiful visual stories or even abstract art by skilled artists. From minimal designs to extravagant artworks, the professional Mehendi artists at Naturals will help you achieve the look you want for your special day.</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
            <div class="col-md-5 " style={{marginTop:"80px"}}>
               
                <img src={b4} class="img-fluid" alt="home1"  style={{height:"520px" ,width:"100%"}}/>

            </div>
        </div>
        </div>
  </div>  

  <div class="card  border border-light ">
        <div class="row no-gutters ">
            <div class="col-md-6" style={{marginTop:"90px"}}>
                <img src={b5} class="img-fluid" alt="home1"  style={{height:"520px" ,width:"100%"}}/>
            </div>
            <div class="col-md-6  mt-5" style={{backgroundColor:"black"}}>
                <div class="card-block px-2 ">
                    <h2 class="card-title bride mt-5" style={{color:"violet"}}>Groomsmen & Maids Of Honour</h2>
                    <p class="card-text fs-3 mb-5">Prepare for the special occasion with your friends and family! A wedding is a celebration not just for the bride and groom but all their loved ones, and we at Naturals extend our cache services to accommodate the same. We offer pre-wedding beauty and spa services, not just for the bride and groom but the entire wedding party.</p>
          <Link to="/contact"> <button class="text-light bg-primary"> KNOW MORE</button></Link>
                </div>
            </div>
        </div>
  </div>  
  </div>  
       </div>
    </div>
  )
}

export default BrideMid1
