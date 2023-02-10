
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import $ from 'jquery'
function Orderhistory(props) {

    const [amount, setamount] = useState("");
    const [id, setId] = useState("");
    const [invoice, setInvoice] = useState("");
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')

    const [wallet, setWallet] = useState("")
    const getUsers = async (id) => {
        const responseData =

        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${auth}`,
                "Content-Type": "application/json",
            },

        }


        function onButtonPress() {
            $('.alert').alert('close')
        }



        fetch('https://api.gyros.farm/api/Order/OrderHistory/' + Id)
            .then(async (response) => {

                const getUsers1 = await response.json();
                let temp = []

                temp.push(getUsers1)
                temp.map((retusers, index) => {
                    console.log('retusers', retusers)
                    retusers.result.map((data) => {
                        setUsers(retusers.result)

                    })

                })


            })


    }

    function Cancelorder(id) {
        // console.log('companyCoupon', companyCoupon)
        let data = { Id, wallet }
        console.log("MMM", Id)

        fetch("https://api.gyros.farm/api/AdminApi/CancelProduct",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',

                },


                body: JSON.stringify(data)

            }).then((result) => {
                console.log("result", result);



            })

    }

    useEffect(() => {
  

        console.log("props", localStorage.getItem('product_id2'))
        let p_id = localStorage.getItem('product_id2')
        setId(p_id)
        getUsers(p_id);
    }, []);


    return (
        <>
            <Header />
            <>
                {/* component */}
                <section className=" mx-auto p-6 font-mono">
                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-md  space-x-2 font-sm tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                        {/* <th className="text-center">SI.NO</th> */}

                                        <th className="text-center">Order Id</th>

                                        <th className="text-center">Product Name</th>
                                        <th className="text-center">Price(MRP)</th>
                                        <th className="text-center">Discount Amount</th>
                                        <th className="text-center">Final <br></br> Price</th>
                                        <th className="text-center">Quantity</th>

                                        <th className="text-center">Customer Name</th>
                                        <th className="text-center">Mobile No</th>
                                        <th className="text-center">Shipping Address</th>
                                        <th className="text-center">Payment Mode</th>
                                        <th className="text-center">Date</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Invoice No.</th>
                                        {/* <th className="text-center">Action</th> */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {console.log("=============>>>>>>>>>>", users)}
                                    {users.map((data, index) => {
                                        return (
                                            <tr className="text-gray-900">
                                                {/* <td className="px-4 py-3 text-ms font-semibold border">1</td> */}

                                                <td className="px-4 py-3 border ">
                                                    <div className="flex items-center text-sm">
                                                        <p>{data.OrderId}</p>

                                                    </div>
                                                </td>



                                                <td className="px-4 py-3 border ">
                                                    <div className="flex items-center text-sm">
                                                        <div className="relative w-16 h-8 mr-3 rounded-full">
                                                            <img
                                                                className="object-cover w-full h-full rounded-full"
                                                                src="https://api.gyros.farm/Images/mus%20mok.jpg"
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                            <div
                                                                className="absolute inset-0 rounded-full shadow-inner"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-black"> {data.ProductName}</p>

                                                        </div>
                                                    </div>

                                                </td>
                                                <td className="px-4 py-3 text-ms font-semibold border">{data.Price}Rs</td>
                                                <td className="px-4 py-3 text-ms font-semibold border">{data.DiscountPrice}Rs</td>
                                                <td className="px-4 py-3 text-ms font-semibold border">{data.FinalPrice}Rs</td>
                                                <td className="px-4 py-3 text-ms font-semibold border">{data.Total_Item}</td>
                                                <td className="px-4 py-3 text-xs border">
                                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                        {" "}
                                                        {data.Name}{" "}
                                                    </span>
                                                </td>

                                                <td className="px-4 py-3 text-sm border">{data.Mobile}</td>
                                                <td className="px-4 py-3 text-xs border">
                                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                        {data.Area} {data.City} {data.State} {data.PinCode}
                                                    </span>
                                                </td>


                                                <td className="px-4 py-3 text-sm border">{data.PaymentMode}</td>
                                                <td className="px-4 py-3 text-sm border">{data.Date}</td>
                                                <td className="px-4 py-3 border ">
                                                    {data.Status}
                                                </td>

                                                <td className="px-4 py-3 border ">
                                                    {data.Invoice}

                                                </td>


                                                <td className="px-4 py-3 text-ms font-semibold border">
                                                    <Link to="/Invoicepage" state={{ invoice: data.Invoice }}>
                                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 border border-blue-100 rounded">
                                                            Get invoice
                                                        </button>
                                                    </Link>




                                                </td>

                                                <td>
                                                    <button type="button" onClick={Cancelorder} class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm mr-2 py-2 px-4 border border-blue-700 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        Cancel Order
                                                    </button>
                                                </td>

                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </table>
                            {/* <div class="modal fade1" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">

                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                                        </div>
                                        <div class="modal-body">

                                            <Link to="/Cancelmessage">
                                                <button class="btn btn-primary">Account</button>
                                            </Link>

                                            <Link to="/Wallet">
                                                <button type="button" class="btn btn-primary">Wallet</button>
                                            </Link>
                                        </div>

                                        <div class="modal-footer">

                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default Orderhistory
