import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import HoverImage from "react-hover-image";
export default function Standout() {
 
    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [userid, setUserid] = useState("")
    const getUsers = async (id) => {
        // console.log('https://api.gyros.farm/api/AdminApi/StandOut/' + id)
        const response = await fetch('https://api.gyros.farm/api/AdminApi/StandOut/' + id);
        const getUsers = await response.json();

        let data = getUsers.result
        // console.log("getUsers", getUsers.result)
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

   

    return (
        <div>
            <Carousel scrollSnap={true} cols={4} rows={1} gap={20} >
                {image.map ((data, index) => {

                    // console.log("data", data)
                    return (
                        <Carousel.Item> 

                            <HoverImage className="hovrwdthbstslrs"  src={data.Image}
                                hoverSrc={data.Image} />

                            <h4 className="bstqtyT" > <b>{data.Title}</b></h4>

                            <p className="aboutdesc">{data.Description}</p>


                        </Carousel.Item>

                    )
                })}
            </Carousel>
        </div>
    )
}