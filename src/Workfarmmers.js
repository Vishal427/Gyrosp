import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from './Header';
import workfarm1 from './workfarm1.jpg'
import workfarm12 from './workfarm12.jpeg' 
import workfarm11 from './workfarm11.jpeg'
import workfarmw from './workfarmw.jpeg'
export default function Workfarmmers() {
    return (
        <>

            <div>
                <Header />
            </div>

            <nav className="fstsec" >

                <div >
                    <h1 className="fstcareer"><b>Work With Farmers</b></h1>
                </div>

            </nav>


            <div className="sectioncareer" >

                <p className="strongly cttt" >
                    One of our essential aims is to work with the farmers.
                     Currently, we are sourcing our raw material from the toilsome farmers
                      of Uttar Pradesh and Rajasthan. The price that we provide our farmers is 
                      competitive and far better than the market rates. Our sincerity towards giving
                       back to our food givers forms the core of our organization. At Gyros our products
                        are a labor of love and compassion. It starts with sourcing the seeds which are 
                        done keeping the <b> ‘Farmer First’ </b> thought in our mind.
                </p>
            </div>


            <div class="col-sm loremfar">
                <img src={workfarm1} width="100%" height={800}  />
            </div>

            <h4 className="RESPONSIBILITY4"><b>COMMUNITY INITIATIVES</b></h4>

            <div className="row">

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img style ={{height:"330px" , width:"331px"}} src={workfarm11} />
                        </div>
                     
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img  style ={{height:"330px" , width:"331px"}} src={workfarm12} />
                        </div>
                       
                    </div>



                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img style ={{height:"330px" , width:"331px"}} src={workfarmw} />
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