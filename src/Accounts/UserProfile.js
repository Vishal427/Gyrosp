import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserProfile.css"
import Header from '../Header'
function UserProfile() {

    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const location = useLocation()

    const getUsers = async () => {
        const responseData =

        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${auth}`,
                "Content-Type": "application/json",
            },

        }

        fetch('https://api.gyros.farm/api/AdminApi/UpdateProfile/' + Id)
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
    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div>

            <div>
                <div>
                    {users.map((data, index) => {

                        return ( 

                            <div>

                                <div>
                                    <Header />
                                </div> 

                                <div className="fstsec">
                                    <h1 className="fstcareer" style={{ textAlign: "center" }}><b>My Profile</b></h1>
                                </div>

                                <div className="">

                                    <div className="card " style={{  marginTop: "5rem", height:"300px",width:"800px" }} >
                                        <i class="fa fa-user-circle-o" aria-hidden="true" style={{ fontSize: "4rem" }}></i>

                                        <div className="mt-4">

                                           

                                            <div className="text-center justify-center p-12">
                                                <div className="flex justify-center">
                                                    <p>Name:</p>
                                                    <p>{data.result.Name}</p>
                                                </div>
                                                <div className="flex justify-center">
                                                    <p>Email:</p>
                                                    <p>{data.result.Email_Id}</p>
                                                </div>
                                                <div className="flex justify-center">
                                                    <p>Mobile:</p>
                                                    <p>{data.result.Mobile_No}</p>
                                                </div>
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

export default UserProfile
