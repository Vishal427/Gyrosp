
import HoverImage from "react-hover-image";
import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
export default function VideoSlider() {
  const [image, setImage] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://api.gyros.farm/api/AdminApi/GifList');
    const getUsers = await response.json();
    let data = getUsers.result
    data.map((res) => {
      res['GifName'] = "https://api.gyros.farm/Images/" + res.GifName
    })

    setImage(data)
  }

  useEffect(() => {
    getUsers();
  }, []);
  function productDetails(id) {
    console.log("dfghj", id)
    localStorage.setItem("product_id", id)
  }
  return (


    <div>
      <div className="contentsec">
        <h4 className="week  bestseller"><b>Featured Collection </b></h4>
        <h6 className="straightt"><b>Straight from the Villages</b></h6>
      </div>
      <div className="featuredcollection" >

        <div style={{ marginLeft: "1.6rem" }}>
          <Carousel scrollSnap={true} cols={4} rows={1} gap={10} className="row " >
            {image.map((data, index) => {
              return (
                <Carousel.Item className="" >
                  <div className="prodsec">
                    <Link to="/ProductsDetails">
                      <HoverImage onClick={() => productDetails(data.Id)} className= "hovrwdthvidsldr hovrwdthvidsldr4" src={data.GifName}
                        hoverSrc={data.GifName} />
                    </Link>

                    <div className="gifbtn" >

                      <Link to="/ProductsDetails">
                        <p onClick={() => productDetails(data.Id)} class="btn btn-primary addtocart3 ">Explore</p>
                      </Link>
                    </div>
                  </div>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>


      </div>
      <hr></hr>
    </div>


  )
}



