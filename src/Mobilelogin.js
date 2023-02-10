import React from "react";
import logo from './logo.png';
import Header from "./Header";
import loginpic from './images/loginpic.jpg';
import { Link } from "react-router-dom";
export default function Mobilelogin() {
  return (

    <div >
      <div class="nav-logo">
        <Header />
      </div>


      

      <h5 className="mobilogin6">Login With Mobile</h5>
      <br></br>
      <form action="">
        <section >
          <div class="input-container containermoblogn">
            <input type="Number" placeholder="Enter your Phone"></input>
          </div>

        </section>

        <Link to="/">
          <div class="loginbutton">
            <button class="btn btn-primary btn-block loginfont6" type="submit ">Login</button>
          </div>
        </Link>
      </form>

    </div>



  );
}