import React from "react";
import { useState, useEffect } from "react";
import HoverImage from "react-hover-image";
const ProductComponent = () => {
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState([]);
  const [imgstr, setImg] = useState("");
  const [token, setToken] = useState("");
  const [finalData, setFinalData] = useState([]);
  const auth = localStorage.getItem('loginToken')
  const Id = localStorage.getItem('ID')
  let Rgx = localStorage.getItem('Rgx')
  console.log("rgxx", Rgx)
  console.log("aut", auth)
  const getUsers = async () => {
    const responseData =

    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },

    }
    console.log("==========", 'https://api.gyros.farm/api/ProductApi/AddToCart/' + Rgx)
    fetch('https://api.gyros.farm/api/ProductApi/AddToCart/' + Rgx, responseData)
      .then(async (response) => {
        console.log('erf', responseData)
        const getUsers1 = await response.json();
        let temp = []
        let img = []
        let d1 = ""
        // console.log(getUsers);
        temp.push(getUsers1)
        setUsers(temp);
        // console.log("data",temp)
        temp.map((retusers, index) => {
          retusers.result.map((data) => {
            img.push("https://api.gyros.farm/Images/" + data.Image)
            data.Image = "https://api.gyros.farm/Images/" + data.Image

          })
          console.log("path", retusers.result)
          setFinalData(retusers.result)
        })
        console.log("img", img)

        setImg(img[0])
        setImage(img)


      })

  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>

      <div >
        {console.log('finalData', finalData)}

        {finalData.map((data, index) => {

          console.log("data", data)
          return (


            <>

              <div className="row">
                <div className="col-sm">
                  <HoverImage className="hovrwdthbstslrcrt" src={data.Image}
                    hoverSrc={data.Image} />
                </div>



                <div className="col-sm" >
                  <h4>{data.ProductName}</h4>
                  <h4 className="bstfprc"> <s>{data.Price}</s>₹  &nbsp; {data.FinalPrice}₹</h4>
                </div>
              </div>
              <br />
              <hr></hr>
              <br />
            </>

          )
        })}

      </div>
    </div>

  )
}


export default ProductComponent;