import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import $ from 'jquery'

export default function Wallet() {
    // $("button#fillItIn").on("click", function () {
    //     $("input#firstName").val("Conor");
    // });


    const [image, setImage] = useState([0]);
    const [id, setId] = useState("");
    const [flag, setFlag] = useState(false)
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')



    const getUsers = async (uid) => {
        if (uid !== null) {
            console.log('https://api.gyros.farm/api/AdminApi/ListWalletMoney/' + uid)
            const response = await fetch('https://api.gyros.farm/api/AdminApi/ListWalletMoney/' + uid);
            const getUsers = await response.json();

            let data = getUsers.result
           
           
            localStorage.setItem("path6", getUsers.result [0].walletAmount)
            console.log("path6", getUsers.result [0].walletAmount)
           
            data.map((res) => {
                res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
            })


            setImage(data)
        } else {
            console.log('https://api.gyros.farm/api/AdminApi/ListWalletMoney/' + Id)
            const response = await fetch('https://api.gyros.farm/api/AdminApi/ListWalletMoney/' + Id);
            const getUsers = await response.json();

            let data = getUsers.result
            console.log("getUsers", getUsers.result)
            data.map((res) => {
                res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
            })


            setImage(data)
        }

    }
    useEffect(() => {
        // console.log("props",localStorage.getItem('product_id'))
        let uid = localStorage.getItem("ID")
        // setId(p_id1)
        getUsers(uid);
    }, []);



    const UserId = localStorage.getItem('ID')
    const [money, setMoney] = useState("");


    function btn6() {
        const [show, toggleShow] =
            useState(true);
    }


    const [amount, setamount] = useState('');
    
    // const location = useLocation()
    // const { price } = location.state
    const handleSubmit = (e) => {
        // e.preventDefault();
        
        console.log('amount', e)
        
        setamount(e)
        localStorage.setItem("money", e)
          console.log('hhaaa', money)
        setMoney(e)
        console.log('cash', e)
        const amount1 = e
        if (amount1 === "") {
            alert("please enter amount");
        } else {
            var options = {
                  key: "rzp_live_sTN4TNvGmEs3C1",

                    //   key: "rzp_test_qkvWoVAUxLt3M4", 
                amount: amount1 * 100,
                currency: "INR",

                description: "for testing purpose",
                handler: function (response) {
                  
                    if(!alert(" Money Added Sucessfully ")) document.location  = 'https://gyros.farm/Walletsucess'
                   
                },
                
                prefill: {
                    name: "Gyros",
                    email: "care@gyros.farm",
                    contact: "8950800633"
                },

               

                notes: {
                    address: "Gyros Farm"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            
            var pay = new window.Razorpay(options);
            
            pay.open();

           

        }

        


    }




    $("#setText").click(
        function (event) {
            $('body input').val(
                "100");
        });

    $("#setText1").click(
        function (event) {
            $('body input').val(
                "500");
        });

    $("#setText2").click(
        function (event) {
            $('body input').val(
                "700");
        });

    $("#setText3").click(
        function (event) {
            $('body input').val(
                "1000");
        });


    return (
        <div>
            
            {/* {console.log("imageretu", image)} */}

               {image.map((data) => {
                return(
                    <div>
                        <div>
                            <Header />
                        </div>

                        <div>
                            {/* <input type="text" placeholder="Enter Coupon Code here" style={{ marginTop: "3rem", marginLeft: "-2rem" }}></input> */}
                            <div className="appearance-none border rounded walll walll1   text-grey-darker"
                                id="first_name" />
                            <p className="addwalet addwalet1"><b style={{ fontSize: "2rem" }}>Add Money to Gyros Wallet</b></p>

                            <p className="credi credi1"><b>Credit balance : {data.walletAmount} </b></p>
                          
                      
                        </div>

                        <div>  
                            <br></br>
                            <p className="choose choose1"><b>Choose an Amount</b></p>

                            <div className="flex  walbtn walbtn1" >
                                <input  type="button" id="setText" value="100" onClick={(e)=>{ setMoney(e.target.value) }} class=" btn send-button8 send-button9 "></input>
                                <input type="button" value="500" onClick={(e)=>{ setMoney(e.target.value) }} id="setText1" class=" btn  send-button8 send-button9" ></input>
                                <input type="button" value="700" onClick={(e)=>{ setMoney(e.target.value) }} id="setText2" class=" btn  send-button8 send-button9"></input>
                                <input type="button" value="1000" onClick={(e)=>{ setMoney(e.target.value) }} id="setText3" class=" btn  send-button8 send-button9" ></input>

                                <input
                                    className="appearance-none border rounded waltxt waltxt1 text-grey-darker"
                                    type="text"
                                    placeholder="₹ Enter an Amount"
                                    id="firstName"
                                    style={{ textAlign: "center" }}
                                    value={money} onChange={(e) => { setMoney(e.target.value) }}
                                />

                                {console.log('hiii', money)}

                            </div>  

                            <div>
                                <button type="button" class=" btn  send-buttonc send-buttonc1" onClick={() => handleSubmit(money)} style={{ backgroundColor: "#4a9032" }} >Continue</button>
                            </div>

                        </div>

                    </div>
                    )})}




        </div>
    )
}