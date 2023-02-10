import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import HoverImage from "react-hover-image";
import $ from 'jquery'
export default function Productfaq() {


    $(document).ready(function () {
        $('.accordion a').click(function () {
          $(this).toggleClass('active');
          $(this).next('.content').slideToggle(400);
        });
      });

    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')
    const [userid, setUserid] = useState("")
    const getUsers = async (id) => {
        // console.log('https://api.gyros.farm/api/AdminApi/ListFaq/' + id)
        const response = await fetch('https://api.gyros.farm/api/AdminApi/ListFaq/' + id);
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

            <div>
                {image.map((data, index) => {
                    // console.log("data", data)
                    return (
                        <div>

                            <div className="accordion">
                                <div className="accordion-item">
                                    <a>{data.Title}</a>
                                    <div className="content">
                                        <p>
                                            {data.Description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}