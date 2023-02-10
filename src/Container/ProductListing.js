import React, { useEffect, useState } from "react";
import HoverImage from "react-hover-image";
import { Link } from "react-router-dom";
import Checkoutprice from "../Checkoutprice";
import Coupon from '../Coupon'
import CouponList from "../CouponList";
import Newusercoupon from "../Newusercoupon";
import $ from 'jquery'
import IncDecCounter from "../IncDecCounter";
export default function ProductListing() {

  const [disable, setDisable] = useState(true);
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState([]);
  const [imgstr, setImg] = useState("");
  const [token, setToken] = useState("");
  const [finalData, setFinalData] = useState([]);
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')


  let Rgx = localStorage.getItem('Rgx')
  // console.log("rgxx", Rgx)
  // console.log("aut", auth)
  const getUsers = async () => {
    const responseData =

    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },

    }
    // console.log("==========", 'https://api.gyros.farm/api/ProductApi/AddToCartListWeb/' + Rgx)

    if (Rgx != null) {
      fetch('https://api.gyros.farm/api/ProductApi/AddToCartListWeb/' + Rgx, responseData)
        .then(async (response) => {
           console.log('erf', responseData)
          const getUsers1 = await response.json();
          let temp = []
          let img = []
          let d1 = ""
          // console.log(getUsers); 
          temp.push(getUsers1)
          setUsers(temp);
          // console.log("data",temp)
          temp.map((retusers, index) => {
            retusers.result.map((data) => {
              img.push("https://api.gyros.farm/Images/" + data.Name)
              data.Image = "https://api.gyros.farm/Images/" + data.Image

            })
            // console.log("path", retusers.result)
            setFinalData(retusers.result)
          })
           console.log("img", img)

          setImg(img[0])
          setImage(img)


        })
    }


  }




  function Couponcode(id) {
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

  useEffect(() => {
    getUsers();
  }, [finalData]);


  if (Rgx != null) {
    return (

      <div>

        <div >
         {console.log('finalData', finalData)}

          {finalData.map((data, index) => {

             console.log("data", data)
            if (finalData != null) {
              return (

                <>

                  <div className="row" style={{ marginTop: "-2rem" }}>

                    <div className="col-sm-6">
                      <Link to="/Aboutproductdetails">
                        <HoverImage className="hovrwdthbstslrcrt" src={data.Image}
                          style={{ marginLeft: "-.4rem" }}
                          hoverSrc={data.Image} />
                      </Link>
                    </div>

                    <div className="col-sm" >
                      <h4 className="crtname crtname1" >{data.ProductName}</h4>

                      <h4 className="bstfprcqty bstfprcqty1" >{data.Qty} {data.Matrix}</h4>
                      <span className="crtprc crtprc1" ><s> ₹{data.Price}</s> {data.FinalAmount}</span>
                    </div>
                    <div className="incd incd1">
                      <IncDecCounter product_id={data.Id} countdata={data.Count} />
                    </div>
                  </div>
                  <br />
                  <hr style={{ marginTop: "-1rem" }}></hr>
                  <br />
                </>

              )
            }


          })}

        </div>
        <div>



          <div>
            <Checkoutprice /> <br></br>
            <div >
              <p><b >Available Offers</b></p> <br></br>
              <hr style={{ marginTop: "-1rem" }}></hr>
            </div>

            <div style={{ marginTop: "1.8rem" }}>
              <CouponList />


            </div>

            <div>
              <Newusercoupon />
            </div>

            <br></br>
            <br></br>

            <hr style={{ marginTop: "-1rem" }}></hr>

            <div>
              <br></br>
              <section id="id"> <p style={{ marginLeft: "-3rem" }}><b>Got a Coupon code ? Enter it here</b></p></section>
              <Coupon />
            </div>



          </div>

        </div>
        <div>


        </div>

        {Id != "" && Rgx != "" ?

          < Link to="/Checkkout">
            <button type="submit" class=" btn btn-block send-button4 loginfont1 loginfont" style={{ marginTop: "1rem", marginLeft: "0rem" }}>Confirm</button>
          </Link>

          : <button type="submit" class=" btn btn-block send-button4 loginfont1 loginfont" style={{ marginTop: "1rem", marginLeft: "0rem" }}>Confirm</button>

        }

      </div >

    );
  }
  else {
    return (
      <>
        <Link to="/accountlogin">
          <button type="submit" class=" btn btn-block send-button4 loginfont1 loginfont" style={{ marginTop: "1rem" }}>Kindly Login</button>
        </Link>
      </>
    )
  }

};