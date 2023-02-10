import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Paymentsucess.css';
export const Walletsucess = (props) => {


    setInterval(function () {
        var div = document.querySelector("#counter");
      var count = div.textContent * 1 - 1;
      div.textContent = count; 
        if (count <= 0) {
            window.location.replace("https://gyros.farm/Wallet");

        }

    }, 1000);

  

    const UserId = localStorage.getItem('ID')
    const [money, setMoney] = useState("");
    alert("congratulations ! Money Added Sucessfully")

    useEffect(() => {

        
            let Money = localStorage.getItem("money")
    
         
            let data = { "Money": Money, "UserId": UserId }
            console.log("alll", UserId)
            console.log("pppp", Money)
    
            fetch("https://api.gyros.farm/api/AdminApi/AddWalletMoney",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
    
                    },
    
                    body: JSON.stringify(data)
                }).then((result) => {
                    console.log("result", result);
    
                })
        
    }, []);

    return (
        <div>


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
                    Sucessfully Added Your Amount
                    <br />
                </p>


                <div id="counter">
                    <Link to="/Wallet">
                        <button class="btn btn-primary mt-2 ml-24 ">5</button>
                    </Link>

                </div>



            </div>

        </div>
    )
}
