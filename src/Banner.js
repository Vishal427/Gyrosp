
import React, { useEffect, useRef } from "react";
import { useState } from "react";
export default function Banner() {

  const [users, setUsers] = useState([]);
  const [image, setImage] = useState([]);
  const [imgstr, setImg] = useState("");

  const getUsers = async () => {
    const response = await fetch('https://api.gyros.farm/api/AdminApi/PromotionImage');
    const getUsers = await response.json();
    let temp = []
    let img = []
    let d1 = ""
    // console.log(getUsers);
    temp.push(getUsers)
    setUsers(temp);
    // console.log("data",users)
    temp.map((retusers, index) => {
      // console.log("path",retusers)
      retusers.result.map((data) => {
        img.push("https://api.gyros.farm/Images/" + data.Promotional_BannerPath)
      })
    })
    // console.log("img",img)
    setImg(img[0])
    setImage(img)
  }

  useEffect(() => {
    getUsers();
  }, []);



  return (

    <React.Fragment>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          {image.map((data, index) => {
            return (
              <div style={{marginTop:"-6rem"}}>

                <div className={index == 0 ? "carousel-item active" : "carousel-item"}>

                  <img src={data} alt="image" width="100%" height="100%" class="img7" />

                </div>

              </div>
            )
          })}

        </div>
        
      </div>
    
    </React.Fragment>
  )
}