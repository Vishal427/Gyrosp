import React, { useState, useEffect } from "react";

import $ from "jquery";
export default function Newusercoupon() {


    const [image, setImage] = useState([]);
    const UserId = localStorage.getItem('ID')
    const [id, setId] = useState(""); 
    const [flag, setFlag] = useState(false)
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [userid, setUserid] = useState("")
    const getUsers = async (id) => {
        // console.log('https://api.gyros.farm/api/AdminApi/NewUserCoupon')
        const response = await fetch('https://api.gyros.farm/api/AdminApi/NewUserCoupon');
        const getUsers = await response.json();

        let data = getUsers.result
        // console.log("getUsers", getUsers.result)
        data.map((res) => {
            res = "https://api.gyros.farm/Images/" + res
        })


        setImage(data)
    }

    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id'))
        let p_id1 = localStorage.getItem("product_id2", id)
        setId(p_id1)
        getUsers(p_id1);
    }, [image]);

    function Coupon(companyCoupon) {
        // console.log('companyCoupon', companyCoupon)
        let data = { companyCoupon, UserId } 
        // console.log("alll", UserId)

     

        fetch("https://api.gyros.farm/api/ProductApi/EmployeeDiscountCoupon",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },

                body: JSON.stringify(data)
            }).then((result) => {
                // console.log("result", result);
                alert("congratulations ! Coupon Applied Sucessfully")
            })
    }  

    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id'))
        // let P_id = localStorage.getItem("product_id2", id)

        // console.log("Product Id", P_id);
        // setId(P_id)
        // Coupon(props.product_id);


    }, [Coupon]);




    return (

        <div>

            <div>
                {image.map((data, index) => {

                    // console.log("data", data.id)
                    return (
                        <div style={{ marginTop: "1rem",     marginBottom: -"1.5rem" , textAlign: "left" }}>

                            <p className="couponborder" style={{ fontSize: "1rem" , width:"12%" , textAlign:"center", color:"#2c0303", backgroundColor: "rgb(240 243 59 / 43%)" , boxShadow: "#a7afa5 5px 5px 8px -1px" , backgroundColor: "rgb(249 148 61/ 58%)" }} >{data.Coupon}%</p> <p className="couponborder" style={{ fontSize: "1rem" , width: "40%" , textAlign :"center" , boxShadow: "#a7afa5 5px 5px 8px -1px" , color:"#2c0303", backgroundImage: "linear-gradient(to right, rgb(247 241 38 / 33%), rgb(5 201 83))" } } >{data.CouponCode} </p>
                            <a href="#d1"> <button type="submit" class=" btn btn-block send-button02 "  onClick={()=>{Coupon(data.CouponCode)}} style={{ marginTop: "-1.7rem", marginLeft: "11rem" , backgroundColor:"#4a9032" }}>Apply</button></a><br></br>
                            {/* <button type="button" id="remove" class=" btn btn-block send-button8 " style={{ marginTop: "-2.7rem", marginLeft: "21.8rem" }}>Remove</button> */}
                            <p style={{ marginTop: "-1rem", textAlign: "left" , fontSize:"0.9rem" , color:"darkgreen", fontFamily:"math" }}><b>{data.Name}</b></p>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}