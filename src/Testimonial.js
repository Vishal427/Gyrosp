import Footer from "./Footer";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import HoverImage from "react-hover-image";
import "./testimonial.css"
export default function Testimonial() {
  const [image, setImage] = useState([]);
  const [id, setId] = useState("");
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')
  let Rgx = localStorage.getItem('Rgx')
  const [userid, setUserid] = useState("")
  const getUsers = async (id) => {
    console.log('https://api.gyros.farm/api/AdminApi/Testimonial')
    const response = await fetch('https://api.gyros.farm/api/AdminApi/Testimonial');
    const getUsers = await response.json();

    let data = getUsers.result
    console.log("getUsers", getUsers.result)
    data.map((res) => {
      res['Image'] = "https://api.gyros.farm/Images/" + res.Image
    })


    setImage(data)
  }

  useEffect(() => {
    console.log("props", localStorage.getItem('product_id'))
    let p_id = localStorage.getItem("product_id2", id)
    setId(p_id)
    getUsers(p_id);
  }, []);


  return (
    <>

      <div>
        < Header />
      </div>

      <nav className="fstsec">
        <div className="healthee">
          <h1 className="fstcareer"><b>Testimonials</b></h1>
        </div>
      </nav>

      <div style={{ marginTop: "5rem" }}>
        <Carousel scrollSnap={true} cols={1} rows={1} gap={0}  >
          {image.map((data, index) => {

            console.log("data", data)
            return (
              <Carousel.Item>

                <HoverImage src={data.Image}
                  hoverSrc={data.Image} />
              </Carousel.Item>

            )
          })}
        </Carousel>
      </div>

      <div className="footerproductdetail">
        <Footer />
      </div>

    </>
  )
}