import React, { useState, useEffect } from "react";
import $ from 'jquery'
import { textAlign } from "@mui/system";
export default function CouponList() {

    // $(document).ready(function () {
    //     //  $("#remove").hide();
    //     // $("#apply").show();
    //     $("#apply").click(function () {
    //         // $("#apply").hide();  
    //         $("#remove").show();
    //     });
    //     $("#remove").click(function () {
    //         $("#apply").show();
    //         $("#remove").hide();
    //     });

    // });

    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const [flag, setFlag] = useState(false)
    const UserId = localStorage.getItem('ID')
    const [companyCoupon, setCompanyCoupon] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [userid, setUserid] = useState("")
    const getUsers = async (id) => {
        // console.log('https://api.gyros.farm/api/Adminapi/CouponList')
        const response = await fetch(' https://api.gyros.farm/api/Adminapi/CouponList');
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


    const [message, setMessage] = useState(null);

    function Coupon(companyCoupon, e) {
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
                console.log("result", result);

                 console.log("result", result.status);
                 if(result.status==200){
                    alert("Coupon Applied SuccessFully")
                 }
                 else{
                    alert("Coupon not applied")
                 }

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
                        <div style={{ marginTop: "0.8rem", marginBottom: -"1.5rem" }}>

                            <p className="couponborder" style={{ fontSize: "1rem", color: "rgb(44, 3, 3)", backgroundImage: "linear-gradient(to right, rgb(247 241 38 / 33%), rgb(253 131 5))", marginLeft: "-12rem", width: "40%", fontFamily: "math", boxShadow: "#a7afa5 5px 5px 8px -1px" }}>{data.CouponCode} </p>

                            <a href="#d1"> <button type="submit" class=" btn btn-block send-button02 " onClick={() => { Coupon(data.CouponCode) }} style={{ marginTop: "-1.7rem", marginLeft: "11rem" , backgroundColor:"#4a9032" }}>Apply</button></a>
                            {/* <button id="apply">Apply</button>
                            <button id="remove">Remove</button> */}
                            <p style={{ marginTop: "0.8rem", textAlign: "left", fontSize: "0.9rem", color: "darkgreen", fontFamily: "math" }}><b>{data.Name}</b></p>

                            {/* {console.log('a6', data)} */}


                        </div>




                    )
                })}
            </div>

        </div>
    )
}