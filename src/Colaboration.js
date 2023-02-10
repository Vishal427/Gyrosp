import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import banner1 from './banner1.jpg';
import kishan from './kishan.jpeg';
import dost from './dost.jpeg';
import copl from './copl.jpeg';
import Header from "./Header";
export default function Colaboration() {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="fstsec">
                <h1 className="fstcareer"><b>Colaboration</b></h1>
            </div>
 
            {/* <div className="">
                <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Colaborate</b></h3>
            </div> */}


            <div className="sectioncareer">


                <p className="strongly">
                    We at Gyros are collaborators and cooperators on a massive scale. We have roped in village communities to work with us and share their traditional knowledge. The finest example is the production of jaggery which is heavily borrowed from the ancient knowledge of the village communities. The product is of top-notch quality, but Gyros doesn’t stop at that. We collaborate keeping in mind the welfare of the villages as well. Our slogan is to rebrand health, from one hamlet to another.
                </p>
            </div>


            <div class=" loremfar1">
                <img src={banner1} width="100%" class="wholepick1"   />
            </div>


            <div className="row">

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img style ={{height:"330px" , width:"331px"}} src={copl} />
                        </div>
                        <div className="card__copy">


                            <p>

                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img style ={{height:"330px" , width:"331px"}} src={kishan} />
                        </div>
                        <div className="card__copy">


                            <p>

                            </p>
                        </div>
                    </div>



                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img style ={{height:"330px" , width:"331px"}} src={dost} />
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