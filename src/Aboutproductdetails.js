import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import HoverImage from "react-hover-image/build";
import Carousel from 'react-grid-carousel';
import './aboutproduct.css';
// import bottel1 from './bottel1.jpg';
// import bottel2 from './bottel2.jpg';
// import bottel3 from './bottel3.jpg';
// import bottel4 from './bottel4.jpg';
import Testing from './Testing.png';
import have1 from './have1.jpg';
import have2 from './have2.jpg';
import have3 from './have3.jpg';
import have4 from './have4.jpg';
import environment1 from './environment1.jpeg';
// import skinhair1 from './skinhair1.jpeg';
import nourishment from './nourishment.jpg';
// import boots from './boots.jpg';
import 'react-multi-carousel/lib/styles.css';
import Fulldescriptionimage from "./Fulldescriptionimage";
import { data } from "jquery";
import Standout from "./Standout";
import Productfaq from "./Productfaq";
import Review from "./Review";
import { Fulldescriptionupdate } from "./Fulldescriptionupdate";
export default function Aboutproductdetails(props) {
    const [image, setImage] = useState([]);
    const [imagee, setImagee] = useState([]);
    const [id, setId] = useState("");
    const getUsers = async (id) => {
        // console.log("hello", id)
        // console.log('https://api.gyros.farm/api/AdminApi/AboutProduct/' + id)
        const response = await fetch('https://api.gyros.farm/api/AdminApi/AboutProduct/' + id);
        const getUsers = await response.json();
        // console.log("getUsers", getUsers)
        let data = getUsers.result
        let imgData = []
        // console.log("datartfgyhjk", data)
        data.map((res) => {
            //   let dict={}
            imgData.push(res.Image)
            res['Image'] = "https://api.gyros.farm/Images/" + res.Image

        })

        setImage(data)
        // console.log("abc", data)
    }



    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id2'))
        let p_id = localStorage.getItem('product_id2')
        setId(p_id)
        getUsers(p_id);
    }, []);


    return (

        <>
        <div >
            <div>
                <Header />
            </div>
            <div className="wholedesc">
                <div>
                    {/* <Fulldescriptionimage /> */}

                    <Fulldescriptionupdate />
                </div>
                <br></br>
                <div className="col-sm ">

                </div>
            </div>

            <h1 className="howto" style={{ marginBottom: "1rem" }}>About The Product</h1>



            <Carousel scrollSnap={true} cols={4} rows={1} gap={0}>
                {image.map((data, index) => {
                    // console.log("lmll", data)
                    return (
                        <Carousel.Item>
                            
                            <HoverImage className="hovrwdthfull" src={data.Image}
                                hoverSrc={data.Image} />
                            <h6 className="bstqtyT"> <b>{data.Title}</b></h6>
                            <p style={{textAlign:"justify" , marginLeft:"1rem" , marginTop:".5rem"}}>{data.Description}</p>

                        </Carousel.Item>
                    ) 
                })}


            </Carousel>

            <h1 className="howto" style={{ marginBottom: "2rem" }}><b>Stand Out Points</b></h1>
            <div>
                <Standout />
            </div>
            <h3 className="howto" ><b>Have You Tried These?</b></h3>
            <div >

                <Carousel scrollSnap={true} cols={4} rows={1} gap={0}>
                    <Carousel.Item>


                        <div >
                            <div >
                                <img className="howto" src={have1} width="310" height="350" />
                            </div>
                            <h3 className="G2desighee4"><b>Stone Cold Pressed Yellow Mustard Oil</b></h3>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>

                        <div >
                            <div >
                                <img className="howto" src={have2} width="310" height="350" />
                            </div>
                            <h3 className="G2desighee4"><b>Stone Cold Pressed Coconut Oil</b></h3>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>

                        <div >
                            <div >
                                <img className="howto" src={have3} width="310" height="350" />
                            </div>
                            <h3 className="G2desighee4"><b>Stone Cold Pressed Groundnuts Oil</b></h3>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item>

                        <div >
                            <div >
                                <img className="howto" src={have4} width="310" height="350" />
                            </div>
                            <h3 className="G2desighee4"><b>Stone Cold Pressed Sesame Oil</b></h3>

                        </div>

                    </Carousel.Item>
                </Carousel>

            </div>

            <div className="faq-section">
                <header>
                    <h2 className="faqaboutprodctdtl"><b>FAQs</b></h2>
                    <p className="questionsfaq">Answers to the most frequently asked questions.</p>
                </header>
                <div>
                    <Productfaq />
                </div>
                <hr />


            </div>

            <Review />


            <div className="footerproductdetail">
                < Footer />
            </div>
            </div>
        </>
    )
}