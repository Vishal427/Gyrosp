import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import HoverImage from "react-hover-image";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { DynamicStar } from 'react-dynamic-star';
import Addreview from "./Addreview";
import Rating from '@mui/material/Rating';
export default function Review() {



    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [userid, setUserid] = useState("")
    const getUsers = async (id) => {
        console.log('  https://api.gyros.farm/api/AdminApi/ViewReview/' + id)
        const response = await fetch('https://api.gyros.farm/api/AdminApi/ViewReview/' + id);
        const getUsers = await response.json();

        let data = getUsers.result
        console.log("getUsers", getUsers.result)
        data.map((res) => {
            res['Image'] = "https://api.gyros.farm/Images/" + res.Image
        })


        setImage(data)
    }

    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id'))
        let p_id = localStorage.getItem("product_id2", id)
        setId(p_id)
        getUsers(p_id);
    }, []);




    const Rating1 = Rating1;
    const Rating2 = Rating2;
    const Rating3 = Rating3;
    const Rating4 = Rating4;
    const Rating5 = Rating5;

    return (
        <div>
            <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "2rem" }} className="bestseller wholesome"><b>Review</b></p>

            <div>
                <Addreview />


                <div>
                    {image.map((data, index) => {

                        console.log("data", data)
                        return (
                            <div style={{ marginLeft: "3.5rem" }}>

                                <HoverImage style={{ width: "5rem" }} src={data.Image}
                                    hoverSrc={data.Image} />

                                <div > <p className="aboutdesc"  ><i class="fas fa-thumbs-up "></i> <b>{data.Name}</b></p></div>

                                {/* <p className="aboutdesc">{data.Mobile}</p>
                                <p className="aboutdesc">{data.Email}</p> */}
                                <p className="aboutdesc">{data.Title}</p>
                                <p className="aboutdesc">{data.Description}</p>

                                {console.log('hello', data.Rating1)}
                                {console.log('hello', data.Rating2)}
                                {console.log('hello', data.Rating3)}
                                {console.log('hello', data.Rating4)}
                                {console.log('hello', data.Rating5)}

                                <div className="rating ratings" style={{color: "yellow"}}>
                                    {data.Rating1 == true && (<i class="fas fa-star"></i>)}
                                    {data.Rating2 == true && (<i class="fas fa-star"></i>)}
                                    {data.Rating3 == true && (<i class="fas fa-star"></i>)}
                                    {data.Rating4 == true && (<i class="fas fa-star"></i>)}
                                    {data.Rating5 == true && (<i class="fas fa-star"></i>)}

                                </div>
                                {/* <div className="flex ">
                                    <p className="aboutdesc">{data.Rating1}</p>
                                    <p className="aboutdesc">{data.Rating2}</p>
                                    <p className="aboutdesc">{data.Rating3}</p>
                                    <p className="aboutdesc">{data.Rating4}</p>
                                    <p className="aboutdesc">{data.Rating5}</p>
                                </div> */}


                                <div style={{ marginTop: "1rem", marginLeft: "2rem" }}>
                                    <div className="star starm" >



                                    </div>
                                </div>

                                <hr></hr>

                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}