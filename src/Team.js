import React from "react";
import ReactDOM from 'react-dom';
// import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import colaborate2 from "./colaborate2.png";
import pratik from './pratik.png'
import richa from './richa.png'
import yogesh from './yogesh.png';
import titleshwari from './titleshwari.png'
import meenu from './meenu.png'
import Bikesh from './Bikesh.png'
import Anilkumar from './Anilkumar.png'
import sagar from './sagar.png'
import po from './po.png'
export default function Team() {
    return (

        <>
            <div>
                <Header />
            </div>


            <div className="fstsec">
                <h1 className="fstcareer" style={{ textAlign: "center" }}><b>Founding Members</b></h1>
            </div>


            <div className="teambody">


                <p className="strongly">
                    The GYROS family comprises a crew of fifteen hustlers who are fully dedicated to the dream of making India
                    healthier again. Having seen the horrors of a pandemic firsthand, this startup is all about rethinking food
                    habits. We believe that nourishment is the finer thing in life and must be consciously intermingled with our diet.
                </p>
            </div>

            <div className="row">

                <div className="col-sm">

                    <div className="card">

                        <div className="card__copy">
                            <img src={yogesh} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b >Yogesh Tyagi</b></h4>
                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif" }}>
                                Yogesh Tyagi is a Mechanical Engg Graduate. He is a teacher having touched lakhs of lives in his career of — years. A unique idea of connecting farmer communities to the average city lives changed the course of his career. Yogesh started to develop a product that had a large scale impact, from farmer communities to the health of millions. A product that is simple and unique. This entrepreneurial spirit amped up with the passion for social causes created Gyros.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        {/* <div className="card__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                        </div> */}
                        <div className="card__copy">
                            <img src={richa} style={{display:"block" ,margin:"0 auto"}}  />
                            <h4 className="RESPONSIBILITY7"><b>Richa Singh Chandel</b></h4>
                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif" }}>
                                Richa Singh Chandel is a Biology Major. When Covid-19 struck the world, she witnessed the effects of it personally. She realized the lacuna that exists in the health sector. The traditional knowledge is being eliminated. She, inspired by the health crisis, wanted to create a product that can be assimilated into our lives easily. Gyros was created with the intention of transforming kitchen and eating habits.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        {/* <div className="card__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                        </div> */}
                        <div className="card__copy">
                            <img src={pratik} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b>Pratik Mishra</b></h4>
                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif" }}>
                                Pratik Mishra is a Civil Engg Graduate. He has taught an astounding number of students in his teaching career of — years. Being passionate about social causes and touching lives for the better, he was on a lookout for a unique opportunity. During covid he realized the health of an average indian citizen is usually compromised. After realizing this, he wanted to make efforts to create a product that touches lives and adds value to every age and strata
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="fstsec">
                <h1 className="fstcareer" style={{ textAlign: "center" }}><b>People Who Makes it Possible</b></h1>
            </div>

            <br></br>
            <br></br>
            <div className="row">

                <div className="col-sm">

                    <div className="card">

                        <div className="card__copy">
                            <img src={Anilkumar} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b>Anil Kumar</b></h4>

                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif", textAlign: "center" }}>
                                (Manager Manufaturing)
                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        {/* <div className="card__image">
            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </div> */}
                        <div className="card__copy">
                            <img src={Bikesh} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b>Beekesh Tyagi</b></h4>

                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif", textAlign: "-moz-initial" }}>
                                (Manager Operation)
                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">

                        <div className="card__copy">
                            <img src={titleshwari} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b>Titleshwari</b></h4>
                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif", textAlign: "center" }}>
                                (Manager Packaging)
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row">

                <div className="col-sm">

                    <div className="card">

                        <div className="card__copy">
                            <img src={sagar} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b>Sagar Shukla</b></h4>

                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif", textAlign: "center" }}>
                                (Admin Operations)
                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        {/* <div className="card__image">
            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </div> */}
                        <div className="card__copy">
                            <img src={meenu} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b> Meenu</b></h4>

                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif", textAlign: "center" }}>
                                (Operations)
                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">

                        <div className="card__copy">
                            <img src={po} style={{display:"block" ,margin:"0 auto"}} />
                            <h4 className="RESPONSIBILITY7"><b>Surajbhan</b></h4>
                            <p style={{ textAlign: "justify", fontSize: "13px", fontFamily: "sans-serif", textAlign: "center" }}>
                                (Admin)
                            </p>
                        </div>
                    </div>

                </div>

            </div>


            <div className="footerproductdetail1">
                <Footer />
            </div>
        </>
    )
}

