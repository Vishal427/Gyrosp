
import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png';
// import ApiService from './ApiService';
// import CommonService from './signupService';
// import CommonService from './ApiService';
import NavBar from "./NavBar";
import home from './home';
import Header from "./Header";
export default function Createaccount() {

  const [name, setName] = useState("");
  const [email_id, setEmail_Id] = useState("");
  const [mobile_no, setMobile_No] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");


  function SignUp() {
    console.warn({ name, email_id, mobile_no, password, confirmpassword });
    let data = { name, email_id, mobile_no, password, confirmpassword }
    fetch("https://api.gyros.farm/api/AdminApi/Registration", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.warn("result", result);
    })
  } 


  return (
 

    <> 


      <div class="nav-logo">
        <Header />
      </div>
      <form onSubmit="return myfun()" >


        <div className='wholeform'>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm col-form-label col-form-label-lg "></label>
            <div class="col-sm-12">
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }}
                class="form-control form-control-lg " name='name' placeholder="Enter Your Name" required />
            </div>
          </div> 

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="email" value={email_id} onChange={(e) => { setEmail_Id(e.target.value) }}
                class="form-control form-control-lg" name="email_id" placeholder="Enter Your Email" required />
            </div>
          </div>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="Number"

                value={mobile_no} onChange={(e) => { setMobile_No(e.target.value) }} id="mobilenumber"
                class="form-control form-control-lg" name='mobile_no' placeholder="Enter Your Phone" required />
              <span id='message'></span>
            </div>
          </div>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
                class="form-control form-control-lg" name="password" placeholder="Enter Your Password" required />
            </div>
          </div>

          <div class="form-group row formcontrole">
            <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
            <div class="col-sm-20">
              <input type="Password" value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }}
                class="form-control form-control-lg" name="confirmpassword" placeholder="Re-Enter Password" required />
            </div>
            <div className='sigbtn'>
              {name !== "" && email_id !== "" && mobile_no !== "" && password !== "" && confirmpassword !== "" ?
                <Link to="/Emaillogin">
                  <button type="submit" onClick={SignUp} class=" btn btm1 btn-block loginfont send-button" style={{ backgroundColor: "darkgreen" }}>SignUp</button>
                </Link>
                : <button type="submit" onclick="phonenumber(document.form1.text1)" onClick={SignUp} class=" btn btm1 btn-block loginfont send-button" style={{ backgroundColor: "darkgreen" }}>SignUp</button>}
            </div>
          </div>

        </div>
      </form>
      <br></br>

    </>


  );
}