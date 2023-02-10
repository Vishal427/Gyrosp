import React, { useEffect, useState } from "react";
import Carousel from 'react-grid-carousel';
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HoverImage from "react-hover-image";
export default function ProductsDetails(props) {

  const [image, setImage] = useState([]);
  const [id, setId] = useState(""); 
  const getUsers = async (id) => {
    console.log("hello", id)
    console.log('https://api.gyros.farm/api/AdminApi/SubcategoryList/' + id)
    const response = await fetch('https://api.gyros.farm/api/AdminApi/SubcategoryList/' + id);
    const getUsers = await response.json();
    // console.log("getUsers",getUsers.result)
    let data = getUsers.result
    data.map((res) => {
      res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
    })

    setImage(data)
  }

  useEffect(() => {
    console.log("props", localStorage.getItem('product_id'))
    let p_id = localStorage.getItem('product_id')
    setId(p_id)
    getUsers(p_id);
  }, []);

  function AboutproductDetails(id) {
    console.log("dfghj", id)
    localStorage.setItem("product_id2", id)
  }

  return (

    <>
      <div >
        <Header />
      </div>
      <Carousel scrollSnap={true} cols={4} rows={1} gap={10} className="row ">
        {console.log("image", image)}
        {image.map((data, index) => {

          console.log("data", data.id)
          return (

            <Carousel.Item className="col-sm-3" >
              <div className="productimg">
                <Link to="/Aboutproductdetails">
                  <HoverImage className="hovrwdth3" onClick={() => AboutproductDetails(data.id)} src={data.Product_Image}
                    hoverSrc={data.Product_Image} />
                </Link>

                <h1 className="gheee">{data.ProductName}</h1>


                {/* <div className="row">
                  <div className="col-sm">
                    <a href="#" class="btn btn-primaryprodtls  ">Add to Cart </a>

                    <div className="productdetailprice">
                      <h4 className="discount1"> Discount : {data.Discount}%</h4>
                      <h4 class="" > Price :{data.Price}₹</h4>
                    </div>

                  </div>
                </div> */}

              </div>


            </Carousel.Item>
          )
        })}

      </Carousel>
      <div className="footerproductdetail">
        <Footer />
      </div>

    </>
  )
}