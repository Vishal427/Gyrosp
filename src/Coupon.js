
import React, { useState, useEffect } from "react";
export default function Coupon(props) {


    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const UserId = localStorage.getItem('ID')
    const [companyCoupon, setCompanyCoupon] = useState("");


    function btn6() {
        const [show, toggleShow] =
            useState(true);
    }

    function Coupon() {
        let data = { companyCoupon, UserId }
        console.log("alll", UserId)

        alert("congratulations ! Coupon Applied Sucessfully")

        fetch("https://api.gyros.farm/api/ProductApi/EmployeeDiscountCoupon",
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
    }

    useEffect(() => {


    }, []);

    return (
        <div>

            <form  >
                {/* <input type="text" placeholder="Enter Coupon Code here" style={{ marginTop: "3rem", marginLeft: "-2rem" }}></input> */}
                <input

                    className="appearance-none border rounded w-55   py-2 px-10 p-2 text-grey-darker"
                    id="first_name"
                    type="text"
                    placeholder="Enter Your Coupon"
                    style={{ marginTop: "3.2rem", marginLeft: "-7rem" }}
                    value={companyCoupon} onChange={(e) => { setCompanyCoupon(e.target.value) }}

                />
            </form>


            <a href="#d1" >  <button type="submit" class=" btn btn-block send-button8 " onClick={Coupon} style={{ marginTop: "-4rem", marginLeft: "14rem", boxShadow: "#bedb21 3px 4px 6px -1px" }}>Apply</button></a>


        </div>
    )
}