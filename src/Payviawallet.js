import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRazorpay from "react-razorpay";
import Header from "./Header";
import Footer from './Footer'

export const Payviawallet = () => {

    const [id, setId] = useState("");

    const Id = localStorage.getItem('ID')
    const auth = localStorage.getItem('loginToken')
    const Razorpay = useRazorpay();
    const [amount, setamount] = useState('');

    const [ path8 , Path8] = useState('');
    // const location = useLocation()
    // const { price } = location.state
    const handleSubmit = (e) => {
        // e.preventDefault();


        setInterval(function() {
            var div = document.querySelector("#counter");
            var count = div.textContent * 1 - 1;
            div.textContent = count;
            if (count <= 0) {
                window.location.replace("https://gyros.farm");
                  
                }
      
            
        }, 1000);

        

        let path8 = localStorage.getItem("path6")
        console.log('amount', path8)
        setamount(path8)
        const amount1 = path8
        if (amount1 === "") {
            alert("please enter amount");
        } else {


            const options = {
                // key: "rzp_live_sTN4TNvGmEs3C1",

                key: "rzp_test_qkvWoVAUxLt3M4",
                amount: amount1 * 100,
                currency: "INR",

                description: "Payment Sucessful",
                handler: function (response) {

                    if (!alert("Order Placed Sucessfully")) document.location = 'https://gyros.farm/Paymentsucess'

                },


                prefill: {
                    name: "",
                    email: "care@gyros.farm",
                    contact: "8950800633"
                },

                // this redirects to the bank page from my website without opening a new window


                notes: {
                    address: "Gyros Farm"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const rzp1 = new Razorpay(options);

            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });


            const rzpay = new Razorpay(options);
            rzpay.open();


        }

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
    }



    return (
        <div>

            <div>
                <Header />
            </div>

            <div>


            </div>

           


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
         Payment Sucessful 
          <br /> Payment deducted via wallet
        </p>

        <div id="counter">
        <Link to="/">
            <button type="button" class="btn btn-primary" >5</button>
            </Link>
        </div>

      </div>

    </div>
            <div>
                <Footer />
            </div>


        </div>
    )
}
