import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import logo from './logo.png';
export default function Loginpage() {
  return (
    <div class="container1"  >

      <div class="content">
        <div class="nav-logo">
          <Header />
        </div>

        <h4 className="week  bestseller" style={{ marginTop: "4rem ", color: "green" }}><b>Login</b></h4>

        <form className="loginformp">
          <div class="text-center ">
            <Link to="/Mobilelogin">
              <button type="submit" class=" btn btn-block send-button4 loginfont1 loginfont">Login With Mobile</button>
            </Link>

            <Link to="/Emaillogin">
              <button type="submit" class=" btn btn-block send-button5 loginfont1 loginfont">Login With Email</button>
            </Link>
            <Link to="/Createaccount">
              <button type="submit" class=" btn btn-block send-button6 loginfont1 loginfont">SignUp</button>
            </Link>


          </div>
        </form>



        {/* <div class="create">
                <Link to="createaccount">
              <p class="createacc">Create Account</p>
              </Link>
              </div>

              <div>
                <Link to="forgetpass">
            <p>Forget Password</p>
            </Link>
              </div> */}

      </div>
    </div>


  );
}