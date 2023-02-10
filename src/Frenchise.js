import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import franchise from "./franchise.jpg";
import Header from "./Header";
export default function Frenchise() {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="fstsec">
                <h1 className="fstcareer" style={{ textAlign: "center" }}><b>Franchise</b></h1>
            </div>
            <div className="sectioncareer">

                <p className="strongly">
                    <b>GYROS</b> is a growing community of like-minded individuals.
                    Serious vendors and sellers interested in our product and looking
                    to be a part of our franchise are invited to write to us at <b>director@gyros.farm</b> or call us at <b>+918950800633</b> if you are willing to commit to us in our journey.
                </p>
            </div>

            <div class="col-sm lorem">
                <img src={franchise} width="100%" height={500} />
            </div>

            <div className="footerproductdetail1">
                <Footer />
            </div>

        </>
    )
}