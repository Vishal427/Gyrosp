
import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import HoverImage from "react-hover-image";
import Footer from "./Footer";
import Header from "./Header";
export default function GiftBoxes() {
  const [image, setImage] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://api.gyros.farm/api/AdminApi/Gift');
    const getUsers = await response.json();
    let data = getUsers.result
    data.map((res) => {
      res['ImageName'] = "https://api.gyros.farm/Images/" + res.ImageName
    })


    setImage(data)
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (

    <>

      <div>
        <Header />
      </div>
      <div className="">
        <h4 className="week  bestseller"><b>Gift Boxes</b></h4>
        <p class="buy allprotext">
          Health is the greatest gift. Come and choose from a wide assortment of gifts for your loved ones. Remind them to take care of themselves and always keep health first.
        </p>
      </div>

      <Carousel scrollSnap={true} cols={4} rows={1} gap={10} >
        {image.map((data, index) => {
          return (
            <Carousel.Item>
              <Link to="/Aboutproductdetails">
                <HoverImage className="hovrwdth1gif" src={data.ImageName}
                  hoverSrc={data.ImageName} />
              </Link>
              <h1 className="gheee" style={{marginLeft:"1rem"}}>{data.Name}</h1>
              {/* <div className="star">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span>(180)</span>
              </div> */}
              <div className="row">
                <div className="col-sm">

                  <Link to="/Cart">
                    <a href="#" class="btn btn-primary addtocartbstall " style={{marginLeft:"-7.5rem"}}>Add to Cart </a>
                  </Link>

                  <div className="dstc">
                    <h4 className="discount1"> <b>Save {data.DiscountPercentage}%</b></h4>
                    <h4 className="pricefinal"> <s>{data.Price}</s>₹  &nbsp; {data.FinalPrice}₹</h4>

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