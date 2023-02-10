import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Alert from 'react-s-alert';
import { Link } from "react-router-dom"
import logo from './logo.png';
import iso90 from './iso90.webp';
import iso1400 from './iso1400.jpg';
import iso22 from './iso22.png';
import fssainew from './fssainew.png';
import gmp from './gmp.png';
import haccp from './haccp.png'
import youtube from './images/youtube.png';
import instagram from './images/instagram.png';
import appstore from './appstore.jpg';
import playstore from './playstore.jpg';
import Searchbar from './Searchbar';
function Footer() {


    const [token, setToken] = useState("");
    const [id, setID] = useState("");
    const [email_id, setEmail_Id] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/")
        }
    }, [])



    const handleApi = () => {

        console.warn({ email_id });
        let data = { email_id }
        fetch("https://api.gyros.farm/api/AdminApi/Subscribe", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.warn("result", result);
        })


    }




    return (
        <footer className="bg-white text-center lg:text-left">
            <ul className="list-none mb-0 ml-80">

                <li>
                    <p className='uppercase  font-extrabold  text-2xl mb-2.5 text-green-800'></p>
                    <div className='flex space-x-8'>

                        <div class="fayou">
                            <a href="#">
                                <img src={iso22} width="90" height="90" />
                            </a>
                        </div>
                        <div class="fayou">
                            <a href="#">
                                <img src={iso90} width="90" height="90" />
                            </a>
                        </div>
                        <div class="fayou">
                            <a href="#">
                                <img src={iso1400} width="90" height="90" />
                            </a>
                        </div>

                        <div class="fayou">
                            <a href="#">
                                <img src={fssainew} width="90" height="90" />
                            </a>
                        </div>

                        <div class="fayou">
                            <a href="#">
                                <img src={gmp} width="90" height="90" />
                            </a>
                        </div>

                        <div class="fayou">
                            <a href="#">
                                <img src={haccp} width="90" height="90" />
                            </a>
                        </div>

                        <div class="fayou">
                            <a href="#">
                                <img src={iso22} width="90" height="90" />
                            </a>
                        </div>
                    </div>
                </li>


            </ul>
            <div className=" p-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div className="mt-10">

                        <ul className="list-none mb-0">

                            <li>
                                <p className='uppercase  font-extrabold  text-2xl mb-2.5 text-green-800'><b>Connect Us</b></p>
                                <div className='flex space-x-8'>
                                    <div>
                                        <a target="_blank" href="https://www.facebook.com/gyrosfarm">
                                            <i class="fab fa-facebook "></i>
                                        </a>
                                    </div>
                                    <div class="fayou">
                                        <a target="_blank" href="https://www.youtube.com/channel/UCop4D_dteGVbNMetqZqaZKA">
                                            <img src={youtube} width="25" height="25" />
                                        </a>
                                    </div>
                                    <div>
                                        <a class="fb" target="_blank" href="https://www.instagram.com/gyrosfarm/">
                                            <img src={instagram} width="22" height="22" />
                                        </a>
                                    </div>
                                    <div>
                                        <a target="_blank" href="https://twitter.com/gyros_farm">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </div>

                                    <div className='mt-4'>
                                        <a style={{ color: "blue" }} target="_blank" href="https://www.linkedin.com/company/gyros-farm/">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <h3 className='text-black text-xl font-semibold'>Subscribe for Offer</h3>
                            </li>
                            <li className='mt-2'>
                                <div className='w-80 '>
                                    <input className='w-40  p-2 focus:outline-none border border-gray-900 ' value={email_id} onChange={(e) => { setEmail_Id(e.target.value) }} placeholder='Email@example.com' />
                                    <button className='p-2 bg-green-800 w-20 border border-gray-900 ' onClick={handleApi} style={{ color: "white" }}>Send</button>
                                </div>
                            </li>

                            <li className=''>
                                <Link to="/">
                                    <img src={logo} width="150" height="180" className='flogo' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 mt-10">
                        <h5 className="uppercase  font-extrabold mr-4 text-2xl mb-2.5 text-green-800">Information</h5>
                        <ul className="list-none mb-0 space-y-1">

                            <li>
                                <Link to="/Sitemap" className='text-sm font-bold termcondi ' style={{ textDecoration: "none", marginLeft: "-7.2rem" }}>Sitemap</Link>
                            </li>

                            <li>
                                <Link to="/Termcondition" className='text-sm font-bold termcondi ' style={{ textDecoration: "none" }}>Term And Conditions</Link>
                            </li>
                            <li>
                                <Link to="/Privacilinkpg" className='text-sm font-bold pravecy' style={{ textDecoration: "none" }}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/Shippingpolicy" className='text-sm font-bold shppng' style={{ textDecoration: "none" }}>Shipping Policy</Link>
                            </li>
                            <li>
                                <Link to="/Refundpolicy" className='text-sm font-bold refnd' style={{ textDecoration: "none" }}>Refund Policy</Link>
                            </li>
                            <li>
                                <Link to="/Cancellationpolicy" className='text-sm font-bold cancell' style={{ textDecoration: "none" }}>Cancellation Policy</Link>
                            </li>

                            <li>
                                <Link to="/Blog" className='text-sm font-bold cancell ' style={{ textDecoration: "none", marginLeft: "-9rem" }}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 mt-10 contactusss ">
                        <h5 className="uppercase  font-extrabold  mr-12  text-2xl mb-2.5 text-green-800">Contact Us</h5>
                        <ul className="list-none mb-0 border-red-400 w-60 space-y-4 seccontactus  ml-6" style={{ marginLeft: "-.1rem" }}>
                            <li>

                                <div className='flex mobilebl mt-2' >

                                    <a >
                                        {/* <i class="fas fa-mobile-alt mobpic " ></i> */}
                                        <i class="fas fa-map-marker-alt mobpicc"></i>
                                        <p className='font-bold text-sm mobilee adds' style={{ textAlign: "left" }} > Factory Address: NA,LAJPAT NAGAR TOSHAM BYE PASS ROAD,OVER BRIDGE,Bhiwani,Bhiwani
                                            Haryana, 127021</p>
                                    </a>
                                </div>


                            </li>

                            <li>

                                <div className='flex mobilebl mt-2' >

                                    <a >
                                        {/* <i class="fas fa-mobile-alt mobpic " ></i> */}
                                        <i class="fas fa-map-marker-alt mobpicc" style={{ marginLeft: "-11rem" }}></i>
                                        <p className='font-bold text-sm mobilee adds' style={{ textAlign: "left" }} >Sales Office : Plot No-1568 , Basement Sec-45 Gurgaon Pin-122003 (Near Huda City Center)</p>
                                    </a>
                                </div>


                            </li>

                            <li>

                                <Link to="/mailto: care@gyros.farm">
                                    <div className='flex mobilebl'>

                                        <a >
                                            <i class="fas fa-envelope mobpic"></i>

                                            <p className='font-bold text-sm mobilee '> care@gyros.farm</p>
                                        </a>

                                    </div>
                                </Link>


                            </li>
                            <li>
                                <Link to="">
                                    <div className='flex mobilebl'>

                                        <a href="Tel: +91- 8950800633">
                                            <i class="fas fa-mobile-alt mobpic " ></i>

                                            <p className='font-bold text-sm mobilee '>+91-8950800633</p>
                                        </a>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <div className='flex mobilebl'>

                                        <a href="Tel: +91- 8950800633">

                                            <i class="fas fa-mobile-alt mobpic " ></i>
                                            <p className='font-bold text-sm mobilee '>+91- 9810015975</p>
                                        </a>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6 mt-10">
                        <h5 className="uppercase  font-extrabold mx-5  text-2xl mb-2.5 text-green-800">Download App</h5>
                        <ul className="list-none mb-0 space-y-4 md:ml-10 " style={{ marginLeft: "98px" }}>
                            <li className='playstore'>
                                <a href='https://apps.apple.com/in/app/gyros-app/id6443604042' target="_blank">
                                    <img src={appstore} alt="ll" className='w-36 ' style={{ marginLeft: "1rem" }} />
                                </a>
                            </li>
                            <li className='appstore'>
                                <a href="https://play.google.com/store/apps/details?id=com.ndinfotech.gyros_app" target="_blank">
                                    <img src={playstore} alt="ll" className='w-36 ' style={{ marginLeft: "1rem" }} />
                                </a>
                            </li>




                        </ul>
                    </div>
                </div>
            </div>


            <div class="powered">
                <h4>
                    <b>All Rights Reserved. Copyright @ YBTarget Core Private Limited</b>
                </h4>
            </div>
            <Searchbar />
        </footer>



    )
}

export default Footer