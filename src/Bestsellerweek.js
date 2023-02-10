import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import HoverImage from "react-hover-image";
import ProductListing from "./Container/ProductListing";
export default function Addtocart() {
  const [image, setImage] = useState([]);
  const [id, setId] = useState("");
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')
  let Rgx = localStorage.getItem('Rgx')
  const [userid, setUserid] = useState("")
  const getUsers = async (id) => {
    // console.log('https://api.gyros.farm/api/AdminApi/FlashSale/'+id) 
    const response = await fetch('https://api.gyros.farm/api/AdminApi/BestSale');
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


  const getUsers1 = async (id) => {
     console.log('https://api.gyros.farm/api/AdminApi/OverallRating/'+id) 
    const response = await fetch('https://api.gyros.farm/api/AdminApi/OverallRating/' + id);
    const getUsers1 = await response.json();

    let data1 = getUsers1
     console.log("getUsers1",getUsers1)
    // data1.map((res) => {
    //   res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
    // })


    setImage(data1)
  }

  function AboutproductDetails(id) {
    // console.log("dfghj", id)
    localStorage.setItem("product_id2", id)
  }


  function Addtocart1(id) {
    // console.warn({ name, email_id, mobile_no, password, confirmpassword });
    let data = { Id }
    // console.log("alll", Id)
    data = { "Id": Id }
    fetch("https://api.gyros.farm/api/ProductApi/AddToCart/" + id,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth}`,
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
      }).then((result) => {
        // console.warn("result", result);
      })
  }


  return (

    <div className="weeekbstlr">
      <h4 className="week  bestseller"><b>Bestsellers of The Week</b></h4>
      <p className="bestseller wholesome"><b>Natural and Wholesome</b></p>



      <div className="featuredcollection">
        <Carousel scrollSnap={true} cols={4} rows={1} gap={20} >
          {image.map((data, index) => {

            // console.log("data", data)
            return (
              <Carousel.Item>
                <Link to="/Aboutproductdetails">
                  <HoverImage className="hovrwdthbstslr" onClick={() => AboutproductDetails(data.Id)} src={data.Product_Image}
                    hoverSrc={data.Product_Image} />
                </Link>
                <h4 className="bstqty  bstqty1" > <b>{data.Quentity}1 Liter</b> &nbsp;(Glass Bottel)</h4>
                <Link to="/Aboutproductdetails">
                  <h1 className="gheee gheee1">{data.ProductName}</h1>
                </Link>


                <div className="star starm">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                  &nbsp; (<span>{data.Review}</span>)

                </div> 


                <div className="row">
                  <div className="col-sm addtocartbsbtn addtocartbsbtnm">

                    <a


                    >
                      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <a class="btn btn-primarybst addtocartbstslr  " onClick={() => Addtocart1(data.Id)} style={{ color: "white" }}>Add to Cart </a>
                      </button>

                      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                          <h5 id="offcanvasRightLabel">Your Cart</h5>

                          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>

                        </div>
                        <div style={{ backgroundColor: "black", Color: "white" }}>Enjoy Free Shipping on Prepaid Orders</div>
                        <div class="offcanvas-body">
                          <ProductListing />
                        </div>
                      </div>

                    </a>


                    <div className="dstc">
                      <h4 className="discount2"> <b>Save {data.DiscountPercentage} % </b></h4>
                      <h4 className="bstfprc6"> <s>{data.Price}</s>₹  &nbsp; {data.FinalPrice}₹</h4>

                    </div>
                  </div>
                </div>

              </Carousel.Item>

            )
          })}
        </Carousel>
      </div>

      {image.map((data1, index) => {

//  console.log("data1",data1) 
return (
  <div>
    <p  >{data1.Rating}</p>

   
  </div>



)
})}
      <p></p>
      <br></br>
      <div style={{ marginTop: "-1.5rem" }}>
        <hr></hr>
      </div>
    </div>






  )
}