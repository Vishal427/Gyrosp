import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import Header from "./Header";
export default function Sitemap() {

    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [userid, setUserid] = useState("")
    const getUsers = async (id) => {
        // console.log('https://api.gyros.farm/api/AdminApi/FlashSale/'+id) 
        const response = await fetch('https://api.gyros.farm/api/AdminApi/BestSale');
        const getUsers = await response.json();

        let data = getUsers.result
        // console.log("getUsers",getUsers.result)
        data.map((res) => {
            res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
        })


        setImage(data)
    }

    useEffect(() => {
        // console.log("props",localStorage.getItem('product_id'))
        let p_id = localStorage.getItem("product_id2", id)
        setId(p_id)
        getUsers(p_id);
    }, []);

    function AboutproductDetails(id) {
        // console.log("dfghj", id)
        localStorage.setItem("product_id2", id)
    }

    return (
        <div>

            <div class="nav-logo">
                <Header />
            </div>

            <nav className="fstsec">
                <div className="healthee">
                    <h1 className="fstcareer">Sitemap</h1>
                </div>
            </nav>

            <div>
                <h1 style={{ marginTop: "5rem", marginLeft: "4rem" }}><b>Products</b></h1>
            </div>

            <div className="">
                <div >
                    {image.map((data, index) => {

                        // console.log("data", data)
                        return (
                            <div>
                               
                                <Link to="/Aboutproductdetails">
                                    <h1 className="gheee4" onClick={() => AboutproductDetails(data.Id)} >{data.ProductName}</h1>
                                </Link>

                            </div>

                        )
                    })}
                </div>
            </div>

        </div>
    )
}