import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Address from "./Address";
import Header from "./Header"


function Checkkout(props) {

    


    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const location = useLocation()
    const addressData = location.state

    const [Name, setNAME] = useState("");
    const [Mobile, setMOBILE] = useState("");
    const [State, setSTATE] = useState("");
    const [City, setCITY] = useState("");
    const [Area, setAREA] = useState("");
    const [PinCode, setPINCODE] = useState("");

    const [image, setImage] = useState([]);

    let Rgx = localStorage.getItem('Rgx')

    useEffect((Addtocart3) => {
        console.log("props", localStorage.getItem('product_id'))
        let P_id = localStorage.getItem("product_id2", id)
        setId(P_id)
    }, [Addtocart3]);



    function Addtocart3() {

        let data = { Id }
        console.log("alll", Id)
        data = { "Id": Id }
        console.warn({ Name, Mobile, State, City, Area, PinCode });
        let data1 = { Name, Mobile, State, City, Area, PinCode }
        fetch("https://api.gyros.farm/api/AdminApi/DeliveryAddress/" + Id,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data1)
            }).then((result) => {
                console.warn("result", result);
            })
    }



    const getUsers = async () => {
        const responseData =

        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${auth}`,
                "Content-Type": "application/json",
            },

        }

        fetch('https://api.gyros.farm/api/ProductApi/Checkout/' + Id)
            .then(async (response) => {
                console.log('erf', Id)
                const getUsers1 = await response.json();
                let temp = []
                console.log(getUsers1);
                temp.push(getUsers1)
                setUsers(temp);
                console.log("data", temp)
                temp.map((retusers, index) => {

                    console.log("path", users)
                })

            })

    }



    const [amount, setamount] = useState('');

    const price = location.state
    const handleSubmit = (e) => {

        console.log('amount', e)
        setamount(e)
        const amount1 = e
        if (amount1 === "") {
            alert("please enter amount");
        } else {
            var options = {
                key: "rzp_live_sTN4TNvGmEs3C1",
                amount: amount1 * 100,
                currency: "INR",

                description: "for testing purpose",
                handler: function (response) {
                    alert(response.razorpay_payment_id);
                },
                prefill: {
                    name: "Velmurugan",
                    email: "mvel1620r@gmail.com",
                    contact: "7904425033"
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <Header />
            <div className="px-4 py-3 ">


                <>
                    {/* Component Start */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full  bg-gray-100">
                        <div className="lg:col-span-2 checkpage">

                            <div className="bg-white rounded mt-4 shadow-lg">

                                <div className="border-t">
                                    <p className="text-bold underline mt-2 font-medium">Add New Billing Address</p>

                                    <div className="grid grid-cols-2 gap-4 px-8 pb-8">

                                        <div className="">
                                            <label className="text-xs   font-semibold" >
                                                Name
                                            </label>
                                            <input
                                                value={Name} onChange={(e) => { setNAME(e.target.value) }}
                                                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="text-xs font-semibold" htmlFor="cardNumber">
                                                Mobile No
                                            </label>
                                            <input
                                                value={Mobile} onChange={(e) => { setMOBILE(e.target.value) }}
                                                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                                                type="text"
                                                placeholder="mobile"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="text-xs  font-semibold" htmlFor="cardNumber">
                                                State
                                            </label>
                                            <input
                                                value={State} onChange={(e) => { setSTATE(e.target.value) }}
                                                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                                                type="text"
                                                placeholder="Enter State"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="text-xs font-semibold" htmlFor="cardNumber">
                                                City
                                            </label>
                                            <input
                                                value={City} onChange={(e) => { setCITY(e.target.value) }}
                                                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                                                type="text"
                                                placeholder="Enter city Name"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="text-xs  font-semibold" htmlFor="cardNumber">
                                                Address
                                            </label>
                                            <input
                                                value={Area} onChange={(e) => { setAREA(e.target.value) }}
                                                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                                                type="text"
                                                placeholder="Address"
                                            />
                                        </div>
                                        <div className="">
                                            <label className="text-xs font-semibold" htmlFor="cardNumber">
                                                Pincode
                                            </label>
                                            <input
                                                value={PinCode} onChange={(e) => { setPINCODE(e.target.value) }}
                                                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                                                type="text"
                                                placeholder="pincode"
                                            />
                                        </div>

                                        <div>
                                            <button type="submit" className="bg-green-600 text-white p-2 w-40 rounded-md" disabled={!Name} onClick={ Addtocart3}>Add Address</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="bg-white rounded   mt-3 shadow-lg py-6  checkpage  ">
                                <div className="ml-2  ">

                                    <p className="text-sm   font-bold underline ">select Address Here</p>


                                </div>


                                <Address />

                            </div>
                        </div>
                    </div>
                    {/* Component End  */}
                </>


            </div>



        </>
    )
}

export default Checkkout