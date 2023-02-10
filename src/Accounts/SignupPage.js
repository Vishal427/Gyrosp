
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.png';
import $ from 'jquery'
import Header from "../Header";
import { color } from '@mui/system';
export default function Createaccount() {

  const [View1, setView1] = useState(false);
  const [View, setView] = useState(false);


  $('body').on('keypress', 'input', function(args) {
    if (args.keyCode == 13) {
        $("#save_post").click();
        return false;
    }
});

  const toggleView = () => {

    setView(!View);
  };

  const toggleView1 = () => {

    setView1(!View1);
  };

  const shoot = () => {
    alert("Register sucessful");
  }

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
      if (!result.ok) {

        alert('Mobile No. and Email id already Registered ');

      }
      return result.json();
    }).then(/* your then handler */).catch((e) => {

      alert('Registration Sucessfull')


    })
    // {
    //   name !== "" && email_id !== "" && mobile_no !== "" && password !== "" && confirmpassword !== "" ?
    //   alert("Please fill all Text Fields")
    //     : alert("Please fill all Text Fields")
    // }

  }


  return (


    <>


      <div>
        <div className=" register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src={logo} alt="" />
              <h3>Welcome on Gyros</h3>

              <p>if Your are New Signup Here</p>

              <button className='p-3 w-40 bg-red-600 rounded-full text-white'>
                <Link to="/accountlogin">
                  Login Here
                </Link>
              </button>

              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist" style={{ width: "200px" }}>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    style={{ width: "200px" }}
                  >
                    Register on Gyros
                  </a>
                </li>

              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane  active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading"><b>Register on Gyros</b></h3>
                  <div className="row register-form">


                  <center className='kal kal1'>  <div >

                      <div className="form-group registr d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name "
                          value={name} onChange={(e) => { setName(e.target.value) }}

                        />
                      </div>

                      <div className="form-group registr d-flex">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email *"
                          value={email_id} onChange={(e) => { setEmail_Id(e.target.value) }}

                        />
                      </div>

                      <div className="form-group registr d-flex">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="phone"
                          value={mobile_no} onChange={(e) => { setMobile_No(e.target.value) }}

                        />
                      </div>
                    

                      <div className="form-group registr d-flex">
                        <input
                          type={View ? "text" : "password"}
                          minLength={10}
                          maxLength={10}
                          name="txtEmpPhone"
                          className="form-control"
                          placeholder="password "
                          value={password} onChange={(e) => { setPassword(e.target.value) }}
                        />

                        <button onClick={toggleView} className="-ml-12">
                          {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                          <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </button>
                      </div>

                      
                      <div className="form-group registr d-flex">
                        <input
                          type={View1 ? "text" : "password"}
                          className="form-control"
                          placeholder=" Confirm Password "

                          value={confirmpassword} onChange={(e) => { setConfirmPassword(e.target.value) }}

                        />


                        <button onClick={toggleView1} className="-ml-12 ">
                          {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                          <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </button>



                      </div>


                     
                    </div></center>
                    <div>
                    

                      <div className='sigbtn na na1'>
                        {name !== "" && email_id !== "" && mobile_no !== "" && password !== "" && confirmpassword !== "" ?
                          <Link to="/accountlogin">
                            <button className=' bg-green-700 w-40 p-2 rounded-full' id="save_post" style={{  color: "white" }} onClick={SignUp}>Register Here</button>
                          </Link>
                          : <button className=' bg-green-700 w-40 p-2 rounded-full'  style={{  color: "white" }} onClick={SignUp}>Register Here</button>
                        }

                        <div className="flex space-x-2 kalho kalho1 ">
                          <p className=''><b>Already have an Account?</b></p>  <Link to="/accountlogin " className="text-blue-900 underline">Login</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
}

