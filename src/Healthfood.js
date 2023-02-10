import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from './Header';
import healthfood1 from './healthfood1.png'
import hlth1 from './hlth1.png'
import hlth2 from './hlth2.png'
export default function Healthfood() {
    return (
        <>
 
            <div>
                <Header />
            </div>

            <nav className="fstsec">
                <div className="healthee">
                    <h1 className="fstcareer"><b>Health and Food</b></h1>
                </div>
            </nav>

            <div class="row">

                <div class="col-sm superhealty1">

                    <h4 className="RESPONSIBILITY11" ><b>Health in Men</b></h4>
                    <h6 class="strongly" >
                        Nutrition is the king when it comes to a sound body and mind.
                        An average 5.6” male is supposed to weigh around 58-70.7 kgs.
                        They need a minimum of 0.84 grams of protein per kilogram of body weight per day.
                        We are eager to promote an improved local diet and better health education through our products.
                    </h6>
                    <h4 className="RESPONSIBILITY5"><b>Health in Women</b></h4>
                    <h6 class="strongly">
                        Issues like PCOD and PCOS along with a multitude of pregnancy issues and linked with a poor diet. A massive chunk of women of reproductive age is undernourished. An average 5.6’ female is supposed to weigh around 53-62.2 kgs in order to maintain a good BMR. We pledge to step up the health game by improving the quality of food consumed in Indian households.
                        We strive toward creating a state of absolute harmony between body, mind, and spirit. Choose GYROS for a healthy life and a healthier planet.

                    </h6>

                </div>
            </div>


            <div className="superhealty">

                <h4 className="RESPONSIBILITY6"><b>Super Healthy Foods</b></h4>
                <p className="strongly1">
                    It’s easy to wonder which foods are healthiest. <br></br>

                    A vast number of foods are both healthy and tasty. By filling your plate with fruits, vegetables,<br></br> quality protein sources, and other whole foods, you’ll have meals that are colorful, versatile, <br></br> and good for you.<br></br>

                    Here are 50 incredibly healthy foods. Most of them are surprisingly delicious.
                </p>

                <div style={{ marginTop: "1rem" }} class="col-sm lorem">
                    <img src={healthfood1} width="100%" height={500} />
                </div>
            </div>

            <h4 className="RESPONSIBILITY5"><b>Health and Wealth</b></h4>
            <div className="row"  style={{marginTop:"20px"}}>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image" >
                            <img src={hlth1}  style ={{height:"330px" , width:"331px"}} />
                        </div>

                    </div>

                </div>

                <div className="col-sm">


                    <div className="card">
                        <div className="card__image">
                            <img style={{  height:"330px" , width:"331px" }} src={hlth2} />
                        </div>

                    </div>





                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img style={{  height:"330px" , width:"331px" }} src="https://jeevaorganic.com/wp-content/uploads/2022/01/cat-image-300x360.jpg" />
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