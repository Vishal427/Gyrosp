import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from './Header';

export default function Farmersbook() {
    return (
        <>

            <div>
                <Header />
            </div>

            <nav className="fstsec">

                <div>
                    <h1 className="fstcareer">Farmers Book</h1>
                </div>

                <div className="faemerbooks">
                    <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Farmers Book</b></h3>
                </div>

            </nav>


            <div className="sectioncareer">
                <h3 >
                    <b></b><span class="careeroprtunity " >FARMERS BOOK</span><b></b></h3>
                <p className="Being">
                    Being one of the fastest-growing suppliers of dietary supplement ingredients,
                    we always search for passionate <br></br> and committed people to join our team. Are you an
                    energetic professional
                    ready to showcase your talent in <br></br>helping us achieve our business goals? Join us!
                </p>
            </div>


            <div class="col-sm lorem">
                <img src="https://img.freepik.com/free-photo/quinoa-mushrooms-lettuce-red-cabbage-spinach-cucumbers-tomatoes-bowl-buddha-dark-top-view_127032-1963.jpg?size=626&ext=jpg&ga=GA1.2.608831910.1663411158" width="100%" height={500} class="" />
            </div>

            <h4 className="RESPONSIBILITY4"><b>COMMUNITY INITIATIVES</b></h4>

            <div className="row">

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                        </div>
                        <div className="card__copy">
                            <h1>Robin Hood's Bay</h1>
                            <h2>27 October, Noon.</h2>
                            <p>

                            </p>
                        </div>
                    </div>

                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                        </div>
                        <div className="card__copy">
                            <h1>Robin Hood's Bay</h1>
                            <h2>27 October, Noon.</h2>
                            <p>

                            </p>
                        </div>
                    </div>



                </div>

                <div className="col-sm">

                    <div className="card">
                        <div className="card__image">
                            <img src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
                        </div>
                        <div className="card__copy">
                            <h1>Robin Hood's Bay</h1>
                            <h2>27 October, Noon.</h2>
                            <p>


                            </p>
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