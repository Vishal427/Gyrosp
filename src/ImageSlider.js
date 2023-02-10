import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
function Banner() {

    const [image, setImage] = useState([]);
    const [users, setUsers] = useState([]); 

    const getUsers = async () => {
        const { data } = await axios.get('https://api.gyros.farm/api/AdminApi/BannerImage');
        setImage(data.BannerImageList);
    }

    useEffect(() => {
        getUsers();
    }, []);
 

    return (
        <div className="w-full h-auto scndsec">
            <LazyLoad>
            <Carousel>
                {image.map((data, index) => {
                    return (
                        <Carousel.Item>
                            <div className="w-full h-64 md:h-screen">
                                <Link to="./Allproducts">
                                 
                                <img
                                     className="d-block w-full"
                                    src={`https://api.gyros.farm/Images/${data}`}
                                    alt="First slide"

                                />
                                
                                </Link>
                            </div>
                        </Carousel.Item>
                    )

                })}
            </Carousel>
            </LazyLoad>

        </div>
    );
}

export default Banner;