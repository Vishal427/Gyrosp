import React, { useState, useEffect } from "react";

export const OrderSucess = () => {

    const [id, setId] = useState("");

    const Id = localStorage.getItem('ID')
    const auth = localStorage.getItem('loginToken')
    const UserId = localStorage.getItem('ID')
    const [companyCoupon, setCompanyCoupon] = useState("");


    function Ordersucess(id) {
        
        let data = { Id }
        // console.log("alll", Id)
        data = { "Id": Id }
        fetch("https://api.gyros.farm/api/Order/Orders/" + id,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)
            }).then((result) => {
                // console.warn("result", result);
            })
    }
    useEffect(() => {
     

    }, []);

    return (
        <div>


        </div>
    )
}
