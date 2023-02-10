import React, { useState, useEffect } from "react";

import logo from './logo.png';
import { Link } from "react-router-dom";
import Logoicon from "./Logoicon";
import jQuery from "jquery";
// import ProductListing from "./Container/ProductListing";
  export default function NavBar() {
  const [image, setImage] = useState([]);
  const [id, setId] = useState("");
  const getUsers = async (id) => {
    // console.log('https://api.gyros.farm/api/AdminApi/ProductList'+id) 
    const response = await fetch('https://api.gyros.farm/api/AdminApi/ProductList');
    const getUsers = await response.json();

    let data = getUsers.result
    // console.log("getUsers",getUsers.result)
    data.map((res) => {
      res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
    })


    setImage(data)
  }

  useEffect(() => {
    // console.log("props",localStorage.getItem('product_id'))
    let p_id = localStorage.getItem("product_id2", id)
    setId(p_id)
    getUsers(p_id);
  }, []);

  function AboutproductDetails(id) {
    // console.log("dfghj",id)
    localStorage.setItem("product_id2", id)
  }

  

 

  return (
    // <div >
    //   <div class=" color ">
    //     <marquee> <a class="nav-link disabled"><b> DEAL OF THE DAY || NO COUPON REQUIRED </b></a></marquee>
    //   </div>

    //   <div className="navbox">
    //     <nav class="navbar ">


    //     <Link to="/">
    //       <div class="nav-logo">
    //           <img src={logo} width="200" height="150" className='lmg' />
    //       </div>
    //       </Link>



    //       <div class="nav-btn ">
    //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //           <span class="navbar-toggler-icon"></span>
    //         </button>
    //       </div>
    //       <div class="nav-links ">
    //         <div class="dropdown ">
    //           <a href="#" className="shop" >Shop
    //             <i class="fas fa-angle-down"></i>
    //             <div class="drop-content shopcontent" style={{ textAlign: "center", width: "180px" }}>

    //               <div class="row">
    //                 <div class="col-sm ">
    //                   <Link to="/Allproducts">
    //                     <h1 className='allprodtxt' href="#">All Products</h1>
    //                   </Link>
    //                 </div>


    //                 <div class="col-sm">
    //                   <Link to="/GiftBoxes">
    //                     <h1 className='allprodtxt' href="#">GiftBoxes</h1>
    //                   </Link>
    //                 </div>


    //                 <div class="col-sm">
    //                   <Link to="/Aboutproductdetails">
    //                     <div >
    //                       {image.map((data, index) => {

    //                         // console.log("data",data.id) 
    //                         return (
    //                           <h1 className="categoryname">{data.CategoryName}</h1>
    //                         )
    //                       })}
    //                     </div>
    //                   </Link>
    //                 </div>

    //               </div>


    //             </div>
    //           </a>
    //         </div>

    //         <div class="dropdown ">
    //           <a href="#" className="revol" >The Revolution
    //             <i class="fas fa-angle-down"></i>
    //             <div class="drop-content" style={{ textAlign: "center", width: "180px" }}>
    //               <div class="row">
    //                 <div class="col-sm">
    //                   <Link to="/Farmers">

    //                     <h1 className='allprodtxt' href="#">Work With Farmers</h1>
    //                   </Link>

    //                   <Link to="/Colaborate">
    //                     <h1 className='allprodtxt' href="#">Collaboration</h1>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </a>
    //         </div>


    //         <div class="dropdown">
    //           <a href="#" >Engagement
    //             <i class="fas fa-angle-down"></i>
    //             <div class="drop-content" style={{ textAlign: "center", width: "180px" }}>
    //               <div class="row">
    //                 <div class="col-sm">
    //                   <Link to="/Healthfood">

    //                     <h1 className='allprodtxt' href="#">Health and Food</h1>
    //                   </Link>

    //                   <Link to="/ExixtingReallife">
    //                     <h1 className='allprodtxt' href="#">Existing Real Life Stories</h1>
    //                   </Link>

    //                   <Link to="/Farmers">
    //                     <h1 className='allprodtxt' href="#">Farmers Book</h1>
    //                   </Link>
    //                   <Link to="/Testimonial">

    //                     <h1 className='allprodtxt' href="#">Testimonials</h1>
    //                   </Link>

    //                   <Link to="/FAQ">
    //                     <h1 className='allprodtxt' href="#">FAQ's</h1>
    //                   </Link>

    //                 </div>
    //               </div>
    //             </div>
    //           </a>
    //         </div>

    //         <Link to="/BestDeals">
    //           <a href="#" className="revolution2" >BestDeals</a>
    //         </Link>


           
    //         <a href="https://www.shiprocket.in/shipment-tracking/" target="_blank" className="track">Track Your Orders</a>

    //         <Link to="/Ourjourney">
    //           <a href="#" className="journey">Our Journey</a>
    //         </Link>


    //         <div class="dropdown revolution2">
    //           <a href="#" >Connect
    //             <i class="fas fa-angle-down"></i>
    //             <div class="drop-content" style={{ textAlign: "center", width: "150px" }}>
    //               <div class="row">
    //                 <div class="col-sm">

    //                   <Link to="/Career">

    //                     <h1 className='allprodtxt' href="#">Career</h1>
    //                   </Link>

    //                   <Link to="/Team">

    //                     <h1 className='allprodtxt' href="#">Team</h1>
    //                   </Link>

    //                   <Link to="/Frenchise">

    //                     <h1 className='allprodtxt' href="#">Frenchise</h1>
    //                   </Link>

    //                   <Link to="/Colaborate">

    //                     <h1 className='allprodtxt' href="#">Collaborate with Us</h1>
    //                   </Link>

    //                    <Link to="/Blog">
    //                    <h1 className='allprodtxt' href="#" >Blog</h1>
    //                    </Link>
    //                 </div> 
    //               </div>
    //             </div>
    //           </a>
    //         </div>
    //       </div>


    //       <div>
    //         <Logoicon />
    //       </div>
    //     </nav>

    //     <div className="navline">
    //       <hr />
    //     </div>
    //   </div>

    // </div>


    
    <div>

      <div class=" color ">
         <marquee> <a class="nav-link disabled"><b> DEAL OF THE DAY || NO COUPON REQUIRED </b></a></marquee>
      </div>
    


    </div>



  )
}