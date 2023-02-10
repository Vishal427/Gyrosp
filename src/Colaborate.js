import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import colaborate2 from "./colaborate2.png";
import Header from "./Header";
export default function Frenchise() {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="fstsec">
                <h1 style={{ textAlign: "center" }} className="fstcareer"><b>Colaborate With Us</b></h1>
            </div>

            <div className="sectioncareer">

                <p className="strongly">
                    The leaders of our organization are a constant source of inspiration
                    along with the farmers that strive to be better innovators.
                    Their relationship is one of trust and good faith. Any concerned party
                    who wants to associate with our brand or simply invest in the healthcare
                    sector is welcome to write to us. This opportunity is also open to
                    farmers looking for a healthy partnership and better livelihoods
                </p>
            </div>


            <div class="col-sm lorem">
                <img style={{ marginTop: '-6rem' }} src={colaborate2} width="100%" height={500} />
            </div>

            <div className="footerproductdetail1">
                <Footer />
            </div>

        </>
    )
}