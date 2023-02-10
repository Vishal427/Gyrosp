// import React, { useState, useEffect } from "react";
// import Carousel from 'react-grid-carousel';
// import { Link } from "react-router-dom";
// import HoverImage from "react-hover-image";
// import ProductListing from "./Container/ProductListing";
// export default function Toppicks() {

//   const [image, setImage] = useState([]);
//   const [id, setId] = useState("");
//   const [flag, setFlag] = useState(false)
//   const auth = localStorage.getItem('loginToken')
//   const Id = localStorage.getItem('ID')
//   let Rgx = localStorage.getItem('Rgx')
//   const [userid, setUserid] = useState("")
//   const [query, setQuery] = useState("");

//   const [filterData, setFilterData] = useState([false]);


//   const getUsers = async (id) => {

//     const response = await fetch('https://api.gyros.farm/api/AdminApi/FlashSale/');
//     const getUsers = await response.json();

//     let data = getUsers.result

//     data.map((res) => {
//       res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
//     })


//     setImage(data)
//   }

//   useEffect(() => {

//     let p_id1 = localStorage.getItem("product_id2", id)
//     setId(p_id1)
//     getUsers(p_id1);
//   }, []);

//   function AboutproductDetails(id) {

//     localStorage.setItem("product_id2", id)
//   }


//   return (
//     <>
//       <div className="px-4 py-4">
//         <input type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search Gyros products......"
//           className="  focus:outline-none border border-green-500"
//           style={{ width: "400px", padding: "10px" }} />
//          {filterData.length !=0 && ( 
//           <div className="px-4 py-4 border border-red-700 bg-black " style={{ width: "400px", marginLeft: "28rem" }}>

//             {image.filter((data) => data.ProductName.toLowerCase().includes(query)).map((data, index) => {


//               return (
//                 <>
//                   <div className="flex space-x-2 ">
//                     <Link to="/Aboutproductdetails">
//                       <HoverImage className="w-10 rounded-full" onClick={() => AboutproductDetails(data.Id)} src={data.Product_Image}
//                         hoverSrc={data.Product_Image} />
//                     </Link>

//                     <Link to="/Aboutproductdetails">
//                       <h1 className="gheee">{data.ProductName}</h1>
//                     </Link>
//                   </div>

//                 </>




//               )
//             })}


//             <div>

//             </div>

//           </div>
//          )} 
//       </div>
//     </>
//   )
// }


import React, { useState, useEffect } from "react";
import Carousel from 'react-grid-carousel';
import { Link } from "react-router-dom";
import HoverImage from "react-hover-image";
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'
export default function Posts() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('false');
 
     
  useEffect(() => {
    axios.get(`https://api.gyros.farm/api/AdminApi/FlashSale/`)
      .then((response) => {
        setAPIData(response.data.result);
      })
  }, [])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(APIData)
    }
  }

  

  function AboutproductDetails(id) {

    

    localStorage.setItem("product_id2", id)
  }





  return (
    <div style={{ padding: 20 }}>
      <input
         placeholder="Search Gyros products......"
                    className="  focus:outline-none border border-green-500  SmallInput"
                   style={{ width: "400px", padding: "10px" }}
        onChange={(e) => searchItems(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
     
        {searchInput.length > 0 ? (
          filteredResults.map((item) => {
            return (
              <div className="px-4 py-4 border border-red-700 bg-black  Productfilter" style={{ width: "400px", marginLeft: "28rem" }}>
               <div className="flex space-x-2 ">
                <Link to="/Aboutproductdetails">
                  <HoverImage className="w-10 rounded-full"
                   onClick={() => AboutproductDetails(item.Id)} src={item.Product_Image}
                    hoverSrc={item.Product_Image} />
                </Link>

                <Link to="/Aboutproductdetails">
                <h1 className="gheee ml-4">{item.ProductName}</h1>
                </Link>
               </div>
               </div>
            )
          })
        ) : (
          APIData.map((item) => {
            return (
              <div className=" border border-red-700 bg-black " style={{ width: "350px", marginLeft: "28rem" }}>
               <div className="flex space-x-2 ">
                <Link to="/Aboutproductdetails">
                  <HoverImage className="w-10 rounded-full"
                   onClick={() => AboutproductDetails(item.Id)} src={item.Product_Image}
                  hoverSrc={item.Product_Image} />
                </Link>

                <Link to="/Aboutproductdetails">
                  <h1 className="gheee ml-4">{item.ProductName}</h1>
                </Link>
               </div>
               </div>
            )
          })
        )}
      
      </Card.Group>
    </div>
  )
}
