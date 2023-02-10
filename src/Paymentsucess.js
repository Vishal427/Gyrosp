import React, { useState, useEffect } from "react";
import Header from "./Header";
import './Paymentsucess.css';
import { Link } from "react-router-dom";
import $ from 'jquery'
export default function Paymentsucess() {

  const [id, setId] = useState("");

  const Id = localStorage.getItem('ID')
  const auth = localStorage.getItem('loginToken')
  const UserId = localStorage.getItem('ID')

    setInterval(function() {
      var div = document.querySelector("#counter");
      var count = div.textContent * 1 - 1;
      div.textContent = count;
      if (count <= 0) {
          window.location.replace("https://gyros.farm");
            
          }

      
  }, 1000);

  useEffect(() => {
        
    let data = { Id }
    console.log("alll", Id)
    data = { "Id": Id }
    fetch("https://api.gyros.farm/api/Order/Orders/" + Id,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth}`,
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data)
      }).then((result) => {
        console.log("result", result);
      })
  }, []);


  

  


  // function Ordersucess(id) {

  //   let data = { Id }
  //   console.log("alll", Id)
  //   data = { "Id": Id }
  //   fetch("https://api.gyros.farm/api/Order/Orders/" + Id,
  //     {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${auth}`,
  //         "Content-Type": "application/json",

  //       },
  //       body: JSON.stringify(data)
  //     }).then((result) => {
  //       console.log("result", result);
  //     })
  // }
  

  
  return (
    <div>
      {/* <Header /> */}

      <div className="cardss">


        <div
          style={{
            borderRadius: 200,
            height: 200,
            width: 200,
            background: "#F8FAF5",
            margin: "0 auto"
          }}
        >
          <i className="checkmark checkk">✓</i>
        </div>
        <h1 className="sucess">Success</h1>
        <p className="purchase">
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>

        <div id="counter">
      <Link to="/">
          <button  class="btn btn-primary mt-2 ml-24 ">5</button>
          </Link>

        </div>

      </div>

    </div>
  )
}