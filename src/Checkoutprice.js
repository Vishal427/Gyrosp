import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Checkoutprice() {
    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const location = useLocation()

    const getUsers = async () => {
        const responseData =

        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${auth}`,
                "Content-Type": "application/json",
            },

        }

        fetch('https://api.gyros.farm/api/ProductApi/Checkout/' +  Id )
            .then(async (response) => {

                
                // console.log('erf', Id)
                const getUsers1 = await response.json();
                let temp = []
                // console.log(getUsers1);
                temp.push(getUsers1)
                setUsers(temp);
                // console.log("data", temp)
                temp.map((retusers, index) => {

                    // console.log("path", users)
                })

            })

    }
    useEffect((image) => {
        getUsers(); 
    }, [users]);

    return (
        <div>
            <div>
                {users.map((data, index) => {
   
                    return (

                        <div>
                            <div style={{ textAlign: "left", marginLeft: ".7rem" }}  >
                                {<h6> <b style={{ marginLeft: ".1rem" }}>Total Price :</b> <b style={{ marginLeft: "1rem" }} > {data.result != null ? data.result.TotalCost : 0}</b></h6>}
                            </div>

                            <br></br>

                             <p className="coup coup1"><b>Coupon :</b></p>  <p style={{marginLeft:"-3rem" , marginTop:"-1.4rem"}}> {data.result != null ?  data.result.Coupon : " not applied"}</p>
                             <br></br>
                        </div>

                       

                    )
                })}
            </div>
        </div>
    )
}