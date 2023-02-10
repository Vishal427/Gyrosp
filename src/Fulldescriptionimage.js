import React, { useState, useEffect, useCallback, useRef } from "react";
import HoverImage from "react-hover-image/build";
import pure from './pure.png';
import Carousel from 'react-grid-carousel';
// import Deliveryestimate from "./Deliveryestimate";
import Chemicalfree from './Chemicalfree.png';
import stonecold2 from './stonecold2.jpeg';
import Directform from './Directform.png';
import ProductListing from "./Container/ProductListing";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Sizebutton from "./Sizebutton";
import Deliveryestimate from "./Deliveryestimate";
export default function Fulldescriptionimage() {

    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const [itemCount, setItemCount] = React.useState(1);
    function ButtonIncrement(props) {

        return (
            <button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
                +
            </button>
        )
    }
    function ButtonDecrement(props) {

        return (
            <button style={{ marginLeft: '.5rem' }} onClick={props.onClickFunc}>
                -
            </button>
        )
    }
    function Display(props) {
        return (
            <label style={{ marginLeft: '.5rem' }} >{props.message}</label>
        )
    }
    const [image, setImage] = useState([]);
    const [imagee, setImagee] = useState([]);
    const [id, setId] = useState("");
    const getUsers = async (id) => {
        console.log("hello", id)
        console.log('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id)
        const response = await fetch('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id);
        const getUsers = await response.json();
        console.log("getUsers", getUsers)
        let data = getUsers.result
        let imgData = []
        console.log("datartfgyhjk", data)
        data.map((res) => {
            //   let dict={}
            imgData.push(res.multipleImage)
            res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
        })

        let finalData = []
        console.log("length", imgData[0].length)
        for (var i = 0; i < imgData[0].length; i++) {
            let dict = {}
            console.log("imgData[0][i]", imgData[0][i])
            dict['image'] = "https://api.gyros.farm/Images/" + imgData[0][i]
            finalData.push(dict)
        }
        setImage(finalData)
        setImagee(data)
        console.log("finalData", finalData)

        console.log("abc", data)
    }
    useEffect(() => {
        console.log("props", localStorage.getItem('product_id2'))
        let p_id = localStorage.getItem('product_id2')
        setId(p_id)
        getUsers(p_id);
    }, []);

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }


    function Addtocart1(id) {
        // console.warn({ name, email_id, mobile_no, password, confirmpassword });
        let data = { Id }
        // console.log("alll", Id)
        data = { "Id": Id }
        fetch("https://api.gyros.farm/api/ProductApi/AddToCart/" + id,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)
            }).then((result) => {
                console.warn("result", result);
            })
    }

    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }


    return (
        <div className="row " style={{ marginTop: "4rem", width: "100vw" }}>
            <div className="col-md-6" >
                <div id="custCarousel" class="carousel slide small" align="center" >

                    <div class="carousel-inner" >

                        {image.map((data, index) => {
                            console.log("lml", data)
                            return (
                                <>

                                    {index === 0 ?
                                        <div class="carousel-item active" >
                                            <HoverImage className="hovrwdthfull" src={data.image}
                                                hoverSrc={data.image} />
                                        </div>
                                        :
                                        <div class="carousel-item" >
                                            <HoverImage className="hovrwdthfull" src={data.image}
                                                hoverSrc={data.image} />
                                        </div>
                                    }



                                </>
                            )
                        })}

                    </div>

                    <div>
                        <Carousel scrollSnap={true} cols={4} rows={1} class="carousel-indicators list-inline  " >

                            {image.map((data, index) => {
                                return (
                                    <Carousel.Item class="jVJmF" >

                                        {console.log('first', "carousel-selector-" + index)}
                                        <a id={"carousel-selector-" + index} data-slide-to={index} data-target="#custCarousel">
                                            <HoverImage className="hovrwdthfull1 " src={data.image}
                                                hoverSrc={data.image} />
                                        </a>

                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="col-md-6" >
                {imagee.map((data, index) => {
                    return (

                        <div style={{ textAlign: "left", marginLeft: "3rem" }}>
                            <p className="textParagraph"
                            >{data.ProductName}</p>
                            {/* <h3
                                style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "600",
                                    color: "green"
                                }}
                            >{data.FinalPrice} &nbsp; <s className="prc2">{data.Price}₹</s></h3> */}
                            <div className="star1">
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span>(180)</span>

                            </div>
                            <br />
                            <h5 style={{ marginTop: "2rem" }}><b >SIZE</b></h5>
                            <br>
                            </br>
                            {/* <div className="row" style={{ textAlign: "left" }}>
                                <div className="col-md">
                                    
                                    <button type="button" class="btn btn-primary primary1" style={{ marginLeft: "0rem" }}> {data.Qty1}{data.Pkt1}</button>
                                </div>
 
                                <div className="col-md">
                                    <button type="button" class="btn btn-primary primary1" style={{ marginLeft: "-3rem" }}>{data.Qty2}{data.Pkt2}</button>
                                </div>

                                <div className="col-md">
                                    <button type="button" class="btn btn-primary primary1" style={{ marginLeft: "-5rem" }}>{data.Qty3}{data.Pkt3}</button>
                                </div>

                                <div className="col-md">
                                    <button type="button" class="btn btn-primary primary1" style={{ marginLeft: "0rem" , marginTop:"1rem" }}> {data.Qty4}{data.Pkt4}</button>
                                </div>

                                <div className="col-md">
                                    <button type="button" class="btn btn-primary primary1" style={{ marginLeft: "2.1rem" , marginTop:"1rem"  }}> {data.Qty5}{data.Pkt5}</button>
                                </div>

                            </div> */}

                            <Sizebutton />


                            <ul class="flex justify product-badge">

                                <li >
                                    <img
                                        className=""
                                        style={{ height: "140px", marginLeft: "-1rem" }}
                                        src={pure}
                                        alt="Workflow"
                                    />
                                </li>

                                <li style={{ marginLeft: "-1rem", marginTop: ".2rem" }}>

                                    <img
                                        className=""
                                        style={{ height: "140px" }}
                                        src={Chemicalfree}
                                        alt="Workflow"
                                    />
                                </li>

                                <li style={{ marginLeft: "-1rem", marginTop: ".2rem" }}>

                                    <img
                                        className=""
                                        style={{ height: "140px" }}
                                        src={stonecold2}
                                        alt="Workflow"
                                    />

                                </li>

                                <li style={{ marginLeft: "-1rem", marginTop: ".3rem" }}>

                                    <img
                                        className=""
                                        style={{ height: "140px" }}
                                        src={Directform}
                                        alt="Workflow"
                                    />
                                </li>

                            </ul>

                            <br></br>
                            <h6>DELIVERY ESTIMATE</h6>
                            <br></br>

                            <Deliveryestimate />

                            {/* <div class="delivery-estimate" id="deliveryestimate">
                                <input type="text" placeholder="Enter Pincode" class="delivery-pincode" id="pincode" style={{ backgroundColor: "beige", width: "17rem", height: "37px" }} />
                                <button type="button" style={{ marginLeft: "1rem" }} class="btn btn-warning">Check</button>
                            </div> */}

                            <div className="row">

                                <div className="col-md-6">
                                    <div style={{ marginTop: "1rem", width: "104px" }}>
                                        <div>
                                            <Badge color="secondary" badgeContent={itemCount}>
                                                <ShoppingCartIcon />{" "}
                                            </Badge>
                                            <ButtonGroup>
                                                <Button
                                                    onClick={() => {
                                                        setItemCount(Math.max(itemCount - 1, 0));
                                                    }}
                                                >
                                                    {" "}
                                                    <RemoveIcon fontSize="small" />
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        setItemCount(itemCount + 1);
                                                    }}
                                                >
                                                    {" "}
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className=" w-full pb-2 valbtn  mx-6 " style={{ marginTop: "-1.4rem", marginLeft: "-2.4rem" }}>
                                        <div className=" mx-auto w-9/12  h-20 ">
                                            <div className="justify-center flex space-x-4 p-4">
                                                <a


                                                >
                                                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                        <a class="btn btn-primarybst1 addtocartbstslr  " onClick={() => Addtocart1(data.Id)} style={{ color: "white" }}>Add to Cart </a>
                                                    </button>

                                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                                        <div class="offcanvas-header">
                                                            <h5 id="offcanvasRightLabel">Your Cart</h5>

                                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>

                                                        </div>
                                                        <div style={{ backgroundColor: "black", Color: "white" }}>Enjoy Free Shipping on Prepaid Orders</div>
                                                        <div class="offcanvas-body">
                                                            <ProductListing />
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <br></br>
                            <br></br>

                            <h6 style={{ textAlign: "justify", marginRight: "15px", lineHeight: "1.5rem" }}>{data.ProductDescription}</h6>

                        </div>


                    )
                })}

            </div>
        </div>
    )
}