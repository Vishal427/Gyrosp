import React, { useEffect, useState } from "react";
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { Link } from "react-router-dom"
import $ from 'jquery'
function AccountLogin(e) {




  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [tokenFlag, setTokenFlag] = useState(false);
  const [token, setToken] = useState("");
  const [id, setID] = useState("");
  const [toggle, setToggle] = useState(false);
  const [Otp, setOtp] = useState()
  const [mobileNumber, setMobileNumber] = useState()



  const [View1, setView1] = useState(false);
  const [View, setView] = useState(false);


  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);



  $('body').on('keypress', 'input', function (args) {
    if (args.keyCode == 13) {
      $("#save_post").click();
      return false;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);




  const toggleView = () => {

    setView(!View);
  };

  const toggleView1 = () => {

    setView1(!View1);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)

  }

  const handlePassWord = (e) => {
    setPassWord(e.target.value)

  }



  async function login() {
    console.warn(Email, PassWord)
    const token = localStorage.getItem('token')
    const item = { Email, PassWord }
    const result = await fetch('https://api.gyros.farm/api/AdminApi/LoginWithEmail', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        //  'Authorization': `Bearer ${token}`,
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    console.log('result', result)

    localStorage.setItem('user-info', JSON.stringify(result))
    navigate("/")

  }

  const handleApi = () => {
    if (Email && PassWord) {
      axios.post("https://api.gyros.farm/api/AdminApi/LoginWithEmail", { Email: Email, PassWord: PassWord }).then(result => {
        console.log(result, "???????????????????")
        setID(result.data.Id)
        localStorage.setItem("loginToken", result.data.token)
        localStorage.setItem("ID", result.data.Id)
        localStorage.setItem('Rgx', result.data.Rgx)
      }).catch((err) => {
        console.log(err)
        alert(err.response.data.Message)
      })
    }

  }

  const handleOtp = () => {
    setMinutes(1);
    setSeconds(30);

    setToggle(true);

    axios.post("https://api.gyros.farm/api/AdminApi/LoginMobileOrEmail", { MobileOrEmail: mobileNumber }).then(result => {
      console.log(result, "???????????????????")
      alert(result.data.message)
    })

  }
  const handleMobileLogin = () => {
    if (Otp) {
      axios.post("https://api.gyros.farm/api/AdminApi/MobileOrEmailOtpVerify", { Otp: Otp }).then(result => {
        console.log(result, "???????????????????")
        setID(result.data.Id)
        localStorage.setItem("loginToken", result.data.token)
        localStorage.setItem("ID", result.data.Id)
        localStorage.setItem('Rgx', result.data.Rgx)


      })

    }




  }


  const token1 = localStorage.getItem('loginToken')
  useEffect(() => {
    if (token1) {
      navigate("/")
    } else {
      navigate('/accountlogin')
    }
  }, [token1])


  // var timeleft = 30;
  // var downloadTimer = setInterval(function () {
  //   timeleft--;
  //   document.getElementById("countdowntimer").textContent1 = timeleft;
  //   if (timeleft <= 0)
  //     clearInterval(downloadTimer);
  // }, 1000);



  return (
    <>
      <div>
        <div className="Container register">
          <div className="row" >
            <div className="col-md-3  register-left" style={{ marginTop: "3rem" }}>
              {/* <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" /> */}


              {/* <button className='p-3 w-40 bg-red-600 rounded-full text-white'>
      
      
        
        </button> */}

              <br />
            </div>
            <div className="col-md-9 register-right ">
              <ul className="nav nav-tabs nav-justified btnmob " id="myTab" role="tablist" style={{ width: "341px" }} >

                <li className="nav-item">
                  <a
                    style={{ width: "170px" }}
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Login with Password
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    style={{ width: "150px" }}
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Login with OTP
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

                  <br></br>
                  <h3 className=" line line1 ml-40"><b style={{ fontSize: "2rem" }}><b>Login</b></b></h3>


                  <div className="row register-form">
                    <div className="col-md-6 ">

                      <div className="form-group1">
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className='flex'>

                        <div className="form-group1">

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email/Mobile No."
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}


                          />
                        </div>
                      </div>
                      {toggle && <div className="form-group1">
                        <input
                          type={View ? "text" : "password"}
                          minLength={10}
                          maxLength={10}
                          name="txtEmpPhone"
                          className="form-control "
                          placeholder="Enter otp "
                          value={Otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <div className="countdown-text flex w-60 space-x-2">
                          {seconds > 0 || minutes > 0 ? (
                            <p>
                              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                              {seconds < 10 ? `0${seconds}` : seconds}
                            </p>
                          ) : (
                            <p>Didn't recieve code?</p>
                          )}
                          {/* <span className="text-sm">Time Remaining: 01:25</span> */}

                          <button disabled={seconds > 0 || minutes > 0}
                            style={{
                              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                            }}
                            onClick={handleOtp}>Resend OTP</button>
                        </div>

                      </div>}


                      <Link to="/accountlogin">

                        {toggle ? <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "5px", marginTop: "1rem", color: "white" }} onClick={handleMobileLogin} >Login</button> : <button className=' bg-green-700 w-40 p-2 rounded-full' style={{ marginLeft: "28px", marginTop: "1rem", color: "white" }} onClick={handleOtp} >Send OTP</button>}

                      </Link>

                    </div>

                  </div>
                </div>
                <div
                  className="tab-pane "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >

                  <br></br>
                  <br></br>
                 
                  <h3 className=" line2 line3"><b style={{ fontSize: "2rem" }}>login Here</b></h3>
                  <div className="row register-form">
                    <div className="col-md-6 ">


                      <div className="form-group1">
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className='flex'>

                        <div className="form-group1">

                          <input
                            type="email"
                            className="form-control"
                            style={{ marginLeft: "-1rem", width: "16rem" }}
                            placeholder="Your Email *"
                            value={Email} onChange={handleEmail}

                          />
                        </div>
                      </div>

                      <div className=" d-flex">
                        <input
                          type={View1 ? "text" : "password"}
                          minLength={10}
                          maxLength={10}
                          name="txtEmpPhone"
                          className="form-control "
                          style={{ marginLeft: "-1rem", width: "16rem" }}
                          placeholder="Your password "
                          value={PassWord} onChange={handlePassWord}

                        />

                        <button onClick={toggleView1} className="-ml-12 ">
                          {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </button>
                      </div>



                      <button className=' bg-green-700 w-40 p-2 rounded-full' id="save_post" style={{ marginLeft: "-29px", marginTop: "1rem", color: "white" }} onClick={handleApi}>Login</button>
                      <div className="flex space-x-2">
                        <p><b>Don't have an Account?</b></p>  <Link to="/signuppage " className="text-blue-900 underline">Signup</Link>
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
  )
}

export default AccountLogin