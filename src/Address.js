import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";

import { Link } from "react-router-dom";
export default function Address() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')
  const getUsers = async () => {
    const responseData =

    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },

    }

    fetch('https://api.gyros.farm/api/AdminApi/ListAddress/' + Id)
      .then(async (response) => {
        console.log('erf', responseData)
        const getUsers1 = await response.json();
        let temp = []
        // console.log(getUsers);
        temp.push(getUsers1)
        // setUsers(temp); 
        // console.log("data", temp)
        temp.map((retusers, index) => {
          retusers.result.map((data) => {
            setUsers(retusers.result)

          })
          // console.log("path", users)
        })

      })

  }
  useEffect(() => {
    getUsers();
  }, [users]);

  return (
    <div>




      {/* {console.log("mmm", users)} */}

      <div style={{ width: "400px", height: "350px", lineHeight: "1em", overflow: "scroll", padding: " 4px" }}>
        {users.map((data, index) => {
          return (


            <Link to="/Placeorder" state={{ addressData: data }} style={{ textDecoration: "none" }}>


              <div className=" rounded  shadow-lg py-6  ">


                <div className="px-8  border-t pt-4 justify-evenly">
                  <div className="flex">
                    <span className="font-semibold no-underline text-green-600" >Name:</span>
                    <span className="font-semibold no-underline text-green-600">{data.Name}</span>
                  </div>
                  <div className="flex">
                    <span className="text-xs text-gray-500 no-underline">Mobile no:-</span>
                    <span className="text-xs text-gray-500 no-underline">
                      {data.Mobile}
                    </span><br></br>
                  </div>
                  <div className="flex">
                    <span className="text-xs text-gray-500 ">Address:</span>
                    <span className="text-xs text-gray-500 ">
                      {data.Area}
                    </span><br></br>
                  </div>
                  <div className="flex">
                    <span className="text-xs text-gray-500 ">Pincode:</span>
                    <span className="text-xs text-gray-500 ">
                      {data.PinCode}
                    </span><br></br>
                  </div>
                  <div className="flex">
                    <span className="text-xs text-gray-500 ">City:</span>
                    <span className="text-xs text-gray-500 ">
                      {data.City}
                    </span><br></br>
                  </div>
                  <div className="flex">
                    <span className="text-xs text-gray-500">State:</span>
                    <span className="text-xs text-gray-500 ">
                      {data.State}
                    </span><br></br>
                  </div>

                  <button className="bg-green-600 p-2 w-40 rounded-md ml-6">Select Address</button>
                </div>


              </div>





            </Link>




          )
        })}



      </div>
    </div>







  )
}