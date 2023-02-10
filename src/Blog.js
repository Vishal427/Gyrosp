import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
export default function Blog() {
   const [image, setImage] = useState([]);
   const [id, setId] = useState("");
   const auth = localStorage.getItem('loginToken')
   const Id = localStorage.getItem('ID')
   let Rgx = localStorage.getItem('Rgx')
   const [userid, setUserid] = useState("")
   const getUsers = async (id) => {
      const response = await fetch('https://api.gyros.farm/api/AdminApi/Blog');
      const getUsers = await response.json();

      let data = getUsers.result

      data.map((res) => {
         res['ImagePath'] = "https://api.gyros.farm/Images/" + res.ImagePath
      })


      setImage(data)
   }

   useEffect(() => {

      let p_id = localStorage.getItem("product_id2", id)
      setId(p_id)
      getUsers(p_id);
   }, []);


   useEffect(() => {
      getUsers();
   }, []);


   return (

      <>

         <div>
            <Header />
         </div>
         {image.map((data, index) => {

            console.log("data66", data)
            return (
               <div>
                  <div>
                     <a class="sora-ads-full sora-ads-full1" href="">{data.Title}</a>
                  </div>
                  <div className="row ">
                     <div className="col-sm">
                        <a href=""><img className=" blogpic60 blogpic6" src={data.ImagePath}></img></a><br></br>
                        <p className="blogpic21">{data.CreateContent}</p>
                     </div>
                  </div>

               </div>

            )
         })}

         <div className="gheefilef">
            <Footer />
         </div>
      </>


   )
}