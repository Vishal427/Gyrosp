import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import LazyLoad from 'react-lazy-load';
import Footer from "./Footer";
import Header from './Header';

export default function ExixtingReallife() {

    const [image, setImage] = useState([]);
    

    const getUsers = async () => {
        const { data } = await axios.get('https://api.gyros.farm/api/AdminApi/ListExistingRealStory');
        setImage(data.result);
    }

    useEffect(() => {
        getUsers();
    }, []);





    return (
        <>

            <div>
                <Header />
            </div>

            <nav className="fstsec">

                <div className="healthee">
                    <h1 className="fstcareer"><b>Existing Real Life Stories</b></h1>
                </div>

                {/* <div className="Existingreallifee">
                    <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Real Life Stories</b></h3>
                </div> */}
            </nav>

            <div class="row" >

                <div class="col-sm superhealty1">
                    <br></br>
                    <br></br>
                    <h6 class="strongly">
                        India is a building nation and growing with it is the demand for a better
                        living standard. The key to a successful living is investing in your
                        health first and foremost. The miracles of a nutritious and conscious
                        balanced diet are unquestionable. Wellness is no more an option,
                        it is the ultimate choice. Gyros vision is to convert the idea of
                        healthy living from a luxury to a necessity in every Indian household.
                        The commercialization of food today has crippled the industry,
                        making excessive chemicals a daily part of our lives. In order to
                        counter this phenomenon, we have sought help from the old secrets of
                        our ancestors. Turning back to all things natural, GYROS seeks to
                        minimize mechanic involvement in the making of our products.
                        Protection of the true essence and goodness of nature and squeezing
                        it into a bottle is all part of the process. The dream is to be a game
                        changer in the consumption market and cater to the needs of both the
                        makers and the consumers.
                    </h6>


                </div>
            </div>

            {/* <div className="sectioncareer">
                <h3>
                    <b></b><span class="careeroprtunity " >EXISTING LIFE STORIES</span><b></b></h3>

                <h4 className="strongly"><b>EXTRACURRICULAR ACTIVITIES</b></h4>
                <p className="strongly ">
                    We strongly believe in the saying, “Unity in Diversity”. Therefore, we provide opportunities to candidates from varied nationalities,
                    ethnicity, age, gender, <br></br>and education. We recognize
                    the challenges of promoting diversity such as flexibility, adaptability, understanding values and beliefs.<br></br>

                    <br></br>Therefore, provide a platform where opportunities can be created to listen to different points of view, broaden recruitment scope,
                    and contemplate innovative <br></br> ways to attract the best talents.
                </p>


                <h4 className="strongly"><b>NURTURING TALENTS</b></h4>
                <p className="strongly">
                    Our team members help each other, especially to those who are new joiners in order to nurture talents. Under the guidance of our eminent leaders,
                    we <br></br>unite with the same goal of making this world a healthy place.
                </p>


                <h4 className="strongly"><b>EMINENT WORK ETHICS</b></h4>
                <p className="strongly">
                    We maintain a friendly yet professional work environment with eminent work
                    ethics by treating every employee with respect to harbour high productivity.
                </p>


                <h4 className="strongly"><b>COMMUNITY INITIATIVES</b></h4>
                <p className="strongly">
                    We help each other in our highs and lows and proactively involve in community initiatives
                    to extend help. We also support an employee or a family member <br></br> under
                    circumstances of serious illness by providing emotional as well as financial aid.<br></br>

                    <br></br> We believe in gender equality thus, actively encourage women candidates to join our organization while maintaining a healthy women-men equality index.
                </p>
            </div> */}

           <div className="w-full h-auto scndsec">
            <LazyLoad>
            <Carousel>
                {image.map((data, index) => {
                    return (
                        <Carousel.Item>
                            <div className="w-full h-64 md:h-screen">
                              
                                 
                                <img
                                     className="d-block w-full"
                                    src={`https://api.gyros.farm/Images/${data.Image}`}
                                    alt="First slide"
                                    style={{marginTop:"73px"}}
                                />
                                
                            
                            </div>
                        </Carousel.Item>
                    )

                })}
            </Carousel>
            </LazyLoad>

        </div>
            <div className="footerproductdetail">
                <Footer />
            </div>

        </>
    )
}