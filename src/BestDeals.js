
import React, {useState,useEffect} from "react";
import Carousel from 'react-grid-carousel';
 import { Link } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer"; 
import HoverImage from "react-hover-image/build";
export default function BestDeals(){

      const [image, setImage] = useState([]);
      const getUsers = async () => {
      const response = await fetch('https://api.gyros.farm/api/AdminApi/BestSale');
      const getUsers = await response.json();
      let data = getUsers.result 
      data.map((res)=>{
            res['Product_Image']="https://api.gyros.farm/Images/" + res.Product_Image
      })
      
      setImage(data)
     }
    
     useEffect(() => {
       getUsers();
     }, []);
  
    return(
        <>
    <div> 
      < Header />
    </div>

    <h4 className="week  bestseller"><b>Best Deals</b></h4>

   <Carousel scrollSnap={true} cols={4} rows={1} gap={10} >
        {image.map((data,index)=>{
                      return(
                        <Carousel.Item >

            <div className="bstdll">
    <Link to="/Aboutproductdetails">
      <HoverImage className="hovrwdth1" src={data.Product_Image} 
       hoverSrc={data.Product_Image}    />
      </Link>
             
             <h1 className="gheee">{data.ProductName}</h1>
             <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  <span>(180)</span>
                  </div>
            <div className="row">
                  <div className="col-sm">

                    <Link to="/Cart">
                  <a href="#" class="btn btn-primary bstdls ">Add to Cart </a>
                  </Link>

                  <div className="dstc">
                      <h4 className="discount1"> <b>Save {data.DiscountPercentage}%</b></h4>
                      <h4 className="pricefinal"> <s>{data.Price}</s>₹  &nbsp; {data.FinalPrice}₹</h4>

                    </div>
                  
                  </div> 
                  </div>

     </div> 


  </Carousel.Item>
                      
  
  )
})}

        </Carousel>
   
        <div className="gheefilef">
        <Footer />
        </div>
</>
    )
}