import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Title() {

  const [image, setImage] = useState([]);
  const [id, setId] = useState("");
  const [flag, setFlag] = useState(false)
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')
  let Rgx = localStorage.getItem('Rgx')
  const [userid, setUserid] = useState("")
  const getUsers = async (id) => {
    // console.log('https://api.gyros.farm/api/AdminApi/FlashSale/'+id) 
    const response = await fetch('https://api.gyros.farm/api/AdminApi/ListTitle');
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
    let p_id1 = localStorage.getItem("product_id2", id)
    setId(p_id1)
    getUsers(p_id1);
  }, []);


  return (
    <div>
      {image.map((data, index) => {

        // console.log("data",data.id) 
        return (
          <div>
            <p style={{ marginTop: "-1rem" }} >{data.Title}</p>

            {/* {console.log('a6', data.Title)} */}
          </div>



        )
      })}
    </div>
  )
}