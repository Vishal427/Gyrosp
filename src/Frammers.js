import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from './Header';
import wholepick1 from './wholepick1.JPG'
import farmimg from './farmimg.JPG'
import farmimg1 from './farmimg1.JPG'
import farmimg2 from './farmimg2.JPG'
export default function Farmers() {
    return (
        <>

            <div>
                <Header />
            </div>

            <nav className="fstsec">

                <div className="">
                    <h1 className="fstcareer"><b>Farmers Book</b></h1>
                </div>

                {/* <div className="faemerbooks">
                    <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Farmers Book</b></h3>
                </div> */}

            </nav>


            <div className="sectioncareer">
                
                <p className="strongly cttt">
                    Ours is a relationship of mutual respect and shared interests with farmers.
                    In this two-way street of teaching and learning, farmers play a key role
                    in acquainting us with the temperament of soil, quality of seeds, and gaps
                    in the process of extracting the product. In turn, we provide them with a
                    sound education, ways of experimenting, and news of the latest technological
                    development across the globe. Finding peace in our shared efforts and
                    sincerity, GYROS brings together entrepreneurial and agrarian skill sets
                    under one roof. In our vision to redefine health, farmers play the part
                    of our fellow facilitators.
                </p>
            </div>


            <div class="col-sm loremfar">
                <img src={wholepick1} width="100%" class="wholepick1" />
            </div>

            <h4 className="RESPONSIBILITY4"><b>COMMUNITY INITIATIVES</b></h4>

            <div className="row">

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img src={farmimg} style ={{height:"204px" , width:"331px"}} />
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
                            <img src={farmimg1} style ={{height:"203px" , width:"331px"}} />
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
                            <img style ={{height:"202px" , width:"331px"}} src={farmimg2} />
                        </div>
                       
                    </div>

                </div>

            </div>


            <div className="footerproductdetail">
                <Footer />
            </div>

        </>
    )
}