import React, { useEffect, useState } from "react";
import logo from './logo.png';
import mail from './images/mail.png';
import lock from './images/lock.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from "axios"; 
import Alert from 'react-s-alert';

export default function Emaillogin(e) {

  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [tokenFlag, setTokenFlag] = useState(false);
  const [token, setToken] = useState("");
  const [id, setID] = useState("");

  console.log({Email, PassWord})
  const handleEmail = (e) => {
    setEmail(e.target.value)

  }

  const handlePassWord = (e) => {
    setPassWord(e.target.value)

  }

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/")
    }
  }, [])

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
    console.log("enter in api")
    console.log({ Email, PassWord })
    axios.post("https://api.gyros.farm/api/AdminApi/LoginWithEmail", {
      Email: Email,
      PassWord: PassWord
    }).then(result => {
      console.log("login")
      console.log("assam", result.data.Rgx)
      setID(result.data.Id)
      localStorage.setItem("loginToken", result.data.token)
      localStorage.setItem("ID", result.data.Id)
      localStorage.setItem('Rgx', result.data.Rgx)



      if (token !== undefined || token !== "" || token !== null) {
        console.log("hello world")
        Alert.success("Login successfully !!")
        setTokenFlag(true)
        window.location.replace("/");
      }
      else {
        Alert.error("Email or Password is incorrect")
      }
    })
      .catch(error => {
        console.log("fail")
        Alert.error("Email or Password is incorrect")
      })
  }
  return (
    <div>
      <body class="login-page">
        <main>
          <div class="login-block">
            <Link to="/">
              <div class="nav-logo" style={{ marginLeft: "9rem" }}>
                <img src={logo} width="200" height="200" />
              </div>
            </Link>
            <hr class="hr-xs" />
            <div class="form-group">
              <div class="input-group">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg"></label>
                <span class="input-group-addon"><i class="fa fa-envelope ti-email"></i></span>
                <input type="email" value={Email} onChange={handleEmail}
                  style={{ marginLeft: "-3rem" }}
                  class="form-control form-control-lg" name="email_id" placeholder="Enter Your Email" required />
              </div>
            </div>

            <hr class="hr-xs" />
            <div class="form-group">
              <div class="input-group">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg" style={{ marginLeft: "-3.4rem" }}></label>
                <span class="input-group-addon"><i class="fa fa-lock ti-unlock"></i></span>

                <input type="Password" value={PassWord} onChange={handlePassWord}

                  class="form-control form-control-lg" name="password" placeholder="Enter Your Password" required />
              </div>
            </div>



            <div class="loginbutton">
              <button onClick={handleApi} class="btn btn-primary btn-block loginfont3">Login</button>
            </div>

            <div className="lowersection">
              <Link to="/forgetpass">
                <p class="text-center1 loginfont" style={{ marginLeft: "3rem" }}>Forget Password </p>
              </Link>

              <Link to="/Createaccount">
                <a class="txt-brand loginfont" href="user-login.html" style={{ marginLeft: "3rem" }}>SignUp</a>
              </Link>

            </div>
          </div>
        </main>
      </body>
    </div>
  );
}