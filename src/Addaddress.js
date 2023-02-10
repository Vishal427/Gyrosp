import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
export default function Addaddress(props) {

    const [Name, setNAME] = useState("");
    const [Mobile, setMOBILE] = useState("");
    const [State, setSTATE] = useState("");
    const [City, setCITY] = useState("");
    const [Area, setAREA] = useState("");
    const [PinCode, setPINCODE] = useState("");

    const [image, setImage] = useState([]);
    const [id, setId] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    let Rgx = localStorage.getItem('Rgx')





    function Addaddress() {

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

    useEffect((Addtocart3) => {
        console.log("props", localStorage.getItem('product_id'))
        let P_id = localStorage.getItem("product_id2", id)
        setId(P_id)
        // Addtocart3(props.product_id);


    }, []);

    return (
        <div>

            <div>
                <Header />
            </div>


            <div className="fstsec" style={{ marginBottom: "3rem" }}>
                <h1 className="fstcareer" style={{ textAlign: "center" }}><b>Add Address</b></h1>
            </div>


            <div className="w-full bg-grey-lightest">
                <div className="  mx-auto py-8">
                    <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">

                        <div className="py-4 px-8">
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <label
                                        className="block text-grey-darker text-sm font-bold mb-2 lg:mr-60"
                                        htmlFor="first_name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        value={Name} onChange={(e) => { setNAME(e.target.value) }}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="first_name"
                                        type="text"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label
                                        className="block text-grey-darker text-sm font-bold mb-2 lg:mr-60"
                                        htmlFor="last_name"
                                    >
                                        Mobile
                                    </label>
                                    <input
                                        value={Mobile} onChange={(e) => { setMOBILE(e.target.value) }}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="last_name"
                                        type="text"
                                        placeholder="mobile"
                                    />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <label
                                        className="block text-grey-darker text-sm font-bold mb-2 lg:mr-60"
                                        htmlFor="first_name"
                                    >
                                        state
                                    </label>
                                    <input
                                        value={State} onChange={(e) => { setSTATE(e.target.value) }}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="state_name"
                                        type="text"
                                        placeholder="state"
                                    />
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label
                                        className="block text-grey-darker text-sm font-bold mb-2 lg:mr-60"
                                        htmlFor="last_name"
                                    >
                                        city
                                    </label>
                                    <input
                                        value={City} onChange={(e) => { setCITY(e.target.value) }}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="city_name"
                                        type="text"
                                        placeholder="city"
                                    />
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-1">
                                    <label
                                        className="block text-grey-darker text-sm font-bold mb-2 lg:mr-60"
                                        htmlFor="first_name"
                                    >
                                        Address
                                    </label>
                                    <input
                                        value={Area} onChange={(e) => { setAREA(e.target.value) }}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="first_name"
                                        type="text"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className="w-1/2 ml-1">
                                    <label
                                        className="block text-grey-darker text-sm font-bold mb-2 lg:mr-60"
                                        htmlFor="last_name"
                                    >
                                        Pincode
                                    </label>
                                    <input
                                        value={PinCode} onChange={(e) => { setPINCODE(e.target.value) }}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                        id="last_name"
                                        type="text"
                                        placeholder="Pincode"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between" style={{ marginTop: "-0.5" }}>
                                <div class="input-group-prepend">
                                 
                                        <Link to="/Address">
                                            <button class="btn btn-outline-primary"  disabled={!Name  } onClick={() => Addaddress()}>Add Address</button>
                                        </Link>

                                       
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}