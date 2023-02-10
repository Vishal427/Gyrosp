import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
export default function Orderplaced() {
  const [amount, setamount] = useState('');
  const location = useLocation()
  const { price } = location.state
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('amount', e)
    setamount(e)
    const amount1 = e
    if (amount1 === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_live_sTN4TNvGmEs3C1",
        amount: amount1 * 100,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Velmurugan",
          email: "mvel1620r@gmail.com",
          contact: "7904425033"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (

    <div>

      <div>
        <Header />
      </div>

      <div style={{marginTop:"3rem"}}>
        <h1 style={{ textAlign: "center" }}> Payment Gateway</h1>
        <br />
        <input type="text" placeholder='Enter Amount' value={price} onChange={(e) => setamount(price)} />
        <br /><br />
        <button class="btn btn-primary" style={{ backgroundColor: "green", color: "white" }} type="button" onClick={() => handleSubmit(price)}>Proceed</button>
      </div>
    </div>


  )
}