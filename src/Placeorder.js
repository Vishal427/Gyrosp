import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useRazorpay from "react-razorpay";
import Header from "./Header";

export default function Placeorder() {
    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const location = useLocation()
    const { addressData } = location.state
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

                    console.log("path", retusers.result.TotalCost)

                    localStorage.setItem("path", retusers.result.TotalCost)
                })

            })

    }



    function UpdateWalletMoney() {

        let path1 = localStorage.getItem("path")
        let path8 = localStorage.getItem("path6")
        console.log('amount', path8)
        let data = { "walletAmount": path1, "UserId": Id }
        console.log("Iddd", Id)
        console.log("walamt", path1)

        fetch("https://api.gyros.farm/api/AdminApi/UpdateWalletMoney",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },

                body: JSON.stringify(data)
            }).then((result) => {
                console.log("result", result);

                console.log(result.status); // Will show you the status
                if (!result.ok) {

                    alert("Hello Healthy Friend !!!\nyour Wallet Health is Critical\nAdd 3000 or More in your Wallet and Get 10% Bonus Amount || "

                    )
                    window.location = 'https://gyros.farm/Wallet';

                } else {

                    alert('Your Amount deducted from Wallet');

                    window.location = 'https://gyros.farm/Paymentsucess';
                }
                return result.json();
            })
    }



    const Razorpay = useRazorpay();
    const [amount, setamount] = useState('');
    // const location = useLocation()
    const { price } = location.state
    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log('amount', e)
        setamount(e)
        const amount1 = e
        if (amount1 === "") {
            alert("please enter amount");
        } else {


            const options = {
                key: "rzp_live_sTN4TNvGmEs3C1",

                //    key: "rzp_test_qkvWoVAUxLt3M4",
                amount: amount1 * 100,
                currency: "INR",

                description: "Payment Sucessful",
                handler: function (response) {

                    if (!alert("Order Placed Sucessfully")) document.location = 'https://gyros.farm/Paymentsucess'

                },


                prefill: {
                    name: "",
                    email: "care@gyros.farm",
                    contact: "8950800633"
                },

                // this redirects to the bank page from my website without opening a new window


                notes: {
                    address: "Gyros Farm"
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const rzp1 = new Razorpay(options);

            rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });


            const rzpay = new Razorpay(options);
            rzpay.open();


        }
    }

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div>

            <div>
                <Header />
            </div>


            <div className=" lg:w-6/12 sm:w-full mx-auto p-8 mt-10 m-6 rounded-md  widthLenght   shadow-lg" >
                <p className=" w-full mx-auto font-bold  text-xl  text-white font-[popins ] bg-green-600">Shipping Address Details</p>
                <div>
                    {users.map((data, index) => {

                        return (
                            <div className="bg-gray-300 ">
                                {console.log('addressData', addressData)}

                                <>

                                    <div className="flex flex-col mb-2">
                                        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden ">
                                                    <table className="min-w-full bg-white p-2">

                                                        <thead className="bg-gray-200 border-b  border-green-400" >
                                                            <tr>

                                                                <th

                                                                    className="h-4 textLineHeight font-medium text-gray-900 px-6 py-2 text-left "
                                                                >
                                                                    Name
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="font-medium text-gray-900 px-6 py-4 text-left "
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {addressData.Name}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    Mobile
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {addressData.Mobile}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    Address
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {addressData.Area}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    Pincode
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {addressData.PinCode}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    City
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {addressData.City}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th

                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    State
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"

                                                                    className=" textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {addressData.State}
                                                                </th>
                                                            </tr>
                                                        </thead>


                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>


                                <p className="font-bold text-xl  text-black  font-[popins ]">Amount Details</p>
                                <div className="text-left">
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <thead className="bg-gray-200 border-b  border-green-400" >
                                                            <tr>

                                                                <th

                                                                    className="textLineHeight  font-medium text-gray-900 px-6 py-2 text-left "
                                                                >
                                                                    Total Price
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {data.result.TotalPrice}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    Discount
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    -{data.result.Discount}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        {/* <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    Delivery Charge
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    +{data.result.DeliveryCharge}
                                                                </th>
                                                            </tr>
                                                        </thead> */}
                                                        <thead className="bg-gray-200 border-b border-green-400">
                                                            <tr>

                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    Grand Total
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >

                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="textLineHeight font-medium text-gray-900 px-6 py-4 text-left"
                                                                >
                                                                    {data.result.TotalCost}
                                                                </th>
                                                            </tr>
                                                        </thead>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm mr-2 py-2 px-4 border border-blue-700 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Placeorder
                                </button>

                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div class="modal fade1" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">

                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                                            </div>
                                            <div class="modal-body">

                                                <button class="btn btn-primary" onClick={() => UpdateWalletMoney(data.result.TotalCost)}>Payment via Wallet</button>
                                                <button type="button" class="btn btn-primary" onClick={() => handleSubmit(data.result.TotalCost)}>Payment</button>

                                            </div>
                                            <div class="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )
                    })}
                </div>
            </div>

        </div>
    )
}