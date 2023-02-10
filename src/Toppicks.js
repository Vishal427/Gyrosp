import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import HoverImage from "react-hover-image";
import ProductListing from "./Container/ProductListing";
export default function Toppicks() {

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
    //  console.log("props",localStorage.getItem('product_id'))
    let p_id = localStorage.getItem("product_id2", id)
    setId(p_id)
    getUsers(p_id);
  }, []);

  function AboutproductDetails(id) {
    // console.log("dfghj", id)
    localStorage.setItem("product_id2", id)
  }


  function Addtocart1(id) {
    // console.warn({ name, email_id, mobile_no, password, confirmpassword });
    let data = { Id }
    console.log("alll", Id)
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
        console.warn("result", result);
      })
  }

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  const getUsers4 = async (id) => {
    console.log('  https://api.gyros.farm/api/AdminApi/ViewReview/' + id)
    const response = await fetch('https://api.gyros.farm/api/AdminApi/ViewReview/' + id);
    const getUsers4 = await response.json();

    let data = getUsers4.result
    console.log("getUsers", getUsers4.result)
    data.map((res) => {
      res['Image'] = "https://api.gyros.farm/Images/" + res.Image
    })


    setImage(data)
  }

  useEffect(() => {
    // console.log("props", localStorage.getItem('product_id'))
    let p_id = localStorage.getItem("product_id2", id)
    setId(p_id)
    getUsers(p_id);
  }, []);


  return (
    <>

      <div className="">
        <div className="picktop">
          <h4 className="week  bestseller"><b>Gyros Top Picks</b></h4>
        </div>
        {/* <div className=" w-full pb-2 valbtn">
          <div className=" mx-auto w-9/12  h-20 ">
            <div className="justify-center flex space-x-4 p-4">
              <button className="text-white bg-green-600 font-bold p-2 w-80 rounded-full ">Products on Choice</button>
              <Link to="/BestDeals">
                <button className="border border-2 border-green-600 hover:bg-green-600  font-bold p-2 w-80 rounded-full text-black">Best Seller</button>
              </Link>
            </div>
          </div>  
        </div> */}

        <div class="containe">
          <button class="button">Product on Choice</button>&nbsp;
          <button class="button">Best Seller</button>
        </div>


        <Carousel scrollSnap={true} cols={4} rows={1} gap={20} >
          {image.map((data, index) => {

            // console.log("data",data.id) 
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

                <div>
                  {image.map((data, index) => {
                      return (
                    <div className="flex ">
                      <p className="aboutdesc">{data.Rating1}</p>
                      <p className="aboutdesc">{data.Rating2}</p>
                      <p className="aboutdesc">{data.Rating3}</p>
                      <p className="aboutdesc">{data.Rating4}</p>
                      <p className="aboutdesc">{data.Rating5}</p>
                    </div>
                      )
                    console.log("data", data)
                      
                  })}


                </div>

              </Carousel.Item>

            )
          })}
        </Carousel>
        <br></br>
        <div>
          <hr></hr>
        </div>

      </div>


    </>
  )
}


