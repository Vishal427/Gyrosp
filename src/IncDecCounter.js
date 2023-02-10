import React, { useState, useEffect } from "react";
import Alert from 'react-s-alert';
export default function IncDecCounter(props) {
    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [countData, setCountData] = useState("");
    const [price, setPrice] = useState("");
    const [priceupdate, setPriceupdate] = useState("");


    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id'))
        let P_id = localStorage.getItem("product_id2", id)
        setId(P_id)
        // Addtocart3(props.product_id);


    }, []);


    function Addtocart3(pId) {

        let data = { Id }


        console.log("alll", Id)
        data = { "Id": Id }
        fetch("https://api.gyros.farm/api/ProductApi/PlusAddToCart/" + pId,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)
            }).then(async (response) => {
                const result = await response.json();
                Alert.success(result.message)
                console.log("result", result.Count);

                setCountData(result.Count)
                setPrice(result.Price)
            })
    }



    function Addtocart4(ppId) {

        let data = { Id }
        console.log("alll", Id)
        data = { "Id": Id }
        fetch("https://api.gyros.farm/api/ProductApi/DeleteAddToCart/" + ppId,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)
            }).then(async (response) => {
                const result = await response.json();
                Alert.success(result.message)
                console.log("result", result.Count);

                setCountData(result.Count)
                setPriceupdate(result.priceupdate)
            })
    }

    return (
        <>
            <div className="col-md-6 incd incd1" >
                <div class="input-group" style={{ justifyContent: "space-evenly" }}>
                    <div class="input-group-prepend">

                        <button class="btn btn-outline-primary " type="button" onClick={() => Addtocart4(props.product_id)} >-</button>

                    </div>


                    <p>{props.countdata}</p>


                    <div class="input-group-prepend">
                        <button class="btn btn-outline-primary" type="button" onClick={() => Addtocart3(props.product_id)}>+</button>
                    </div>

                    {/* <p>{price}</p>
                    <p>{priceupdate}</p> */}

                </div>
            </div>
        </>
    );
}