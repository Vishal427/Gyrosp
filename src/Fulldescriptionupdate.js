import React, { useState, useEffect, useCallback, useRef } from "react";
import HoverImage from "react-hover-image/build";
import Carousel from 'react-grid-carousel';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ProductListing from "./Container/ProductListing";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Chemicalfree from './Chemicalfree.png';
import stonecold2 from './stonecold2.jpeg';
import Directform from './Directform.png';
import Sizebutton from "./Sizebutton";
import Deliveryestimate from "./Deliveryestimate";
import pure from './pure.png';
import $ from "jquery";
export const Fulldescriptionupdate = () => {

    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const [itemCount, setItemCount] = React.useState(1);

    const [image, setImage] = useState([]);
    const [imagee, setImagee] = useState([]);
    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [imgData, setImgData] = useState([]);
    const [pktData, setPktData] = useState([]);
    const [price, setPrice] = useState("");
    const [finalPrice, setFinalprice] = useState("");
    const [pkt, setPkt] = useState("");
    const [qty, setQty] = useState("");
    const [count, setCount] = useState("");



    const getUsers = async (id) => {

        fetch('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescriptions/' + id)
            .then(async (response) => {


                console.log('erf', Id)
                const getUsers1 = await response.json();

                let data = getUsers1
                console.log("hona", getUsers1)

                getUsers1.ProductModelApi['Product_Image'] = "https://api.gyros.farm/Images/" + getUsers1.ProductModelApi.Product_Image

                setImage(data)


                let temp = []
                let temp1 = []
                let temp2 = []
                console.log("==========================", getUsers1.ProductModelApi.packetSizemodel);
                temp.push(getUsers1)
                temp1.push(getUsers1.ProductModelApi.multipleImage)
                temp2.push(getUsers1.ProductModelApi.packetSizemodel)
                setUsers(temp);
                console.log("data1232434", temp2)
                let data1 = []
                temp1[0].map((res, index) => {
                    data1.push("https://api.gyros.farm/Images/" + res)
                    console.log("path8", res)
                })
                setImgData(data1)
                setPktData(temp2)

            })

    }
    useEffect(() => {
        console.log("props", localStorage.getItem('product_id2'))
        let p_id = localStorage.getItem('product_id2')
        setId(p_id)
        getUsers(p_id);
    }, []);
    function showProductPrice(price, pkt, Qty, count, finalPrice) {
        console.log("======================>>>>>>>>>>>>>", price, pkt, Qty, count, finalPrice);
        setPrice(price)
        setPkt(pkt)
        setQty(Qty)
        setCount(count)
        setFinalprice(finalPrice)
    }

    function Addtocart1(id) {

        let data = { Id }
        console.log("alll", Id)
        data = { "Id": Id, "Pkt": pkt, "Qty": qty, "Price": price, "Count": count, "FinalAmount": finalPrice }
        fetch("https://api.gyros.farm/api/ProductApi/AddToCartV1/" + id,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${auth}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)
            }).then((result) => {
                console.log("result=====", result);
            })

            $("#seeall").click( function() {
                $(window).scrollBottom(0);
              });
    }

    return (
        <div>

            <div className="row " style={{ marginTop: "4rem", width: "100vw" }}>
                <div className="col-md-6" >
                    <div id="custCarousel" class="carousel slide small" align="center" >

                        <div class="carousel-inner" >
                            {console.log('laaa',)}
                            {imgData.map((data, index) => {
                                console.log("lml", data)
                                return (
                                    <>

                                        {index === 0 ?
                                            <div class="carousel-item active" >
                                                <HoverImage className="hovrwdthfull" src={data}
                                                    hoverSrc={data} />
                                            </div>
                                            :
                                            <div class="carousel-item" >
                                                <HoverImage className="hovrwdthfull" src={data}
                                                    hoverSrc={data} />
                                            </div>
                                        }
                                    </>

                                )
                            })}

                        </div>

                        <div>
                            <Carousel scrollSnap={true} cols={4} rows={1} class="carousel-indicators list-inline  " >
                                {console.log("users console", imgData)}
                                {imgData.map((data, index) => {
                                    return (

                                        <Carousel.Item class="jVJmF" >

                                            {console.log('first', "carousel-selector-" + index)}
                                            <a id={"carousel-selector-" + index} data-slide-to={index} data-target="#custCarousel">
                                                <HoverImage className="hovrwdthfull1 " src={data}
                                                    hoverSrc={data} />
                                            </a>

                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" >
                    {users.map((data, index) => {
                        console.log("lml", data.ProductModelApi.Id)
                        return (

                            <div >

                                <div className=" revu1">
                                    <span className="lg: -ml-52 font-bold lg:text-2xl sm:text-xl sm:mt-4  text-green-700">{data.ProductModelApi.ProductName}</span> <br></br>
                                    
                                   <div className="revu2">
                                   <span className="lg: -ml-60  lg:text-2xl sm:text-xl sm:mt-4  text-black-200">
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                    </span>
                                   <button > ({data.ProductModelApi.Rating})</button>
                                   <button  id="seeall"> <u style={{marginLeft:"2.6rem"}} > See All Reviews</u></button>
                                   </div>
                               
                                </div>
                                <div style={{ textAlign: "left", marginLeft: "3rem" }}>

                                    {price != "" && (
                                        <button type="button" className="font-bold text-center text-2xl"><s>{price}</s> {finalPrice}₹</button>
                                    )}

                                    

                                    <br />
                                    <h5 style={{ marginTop: "1rem" }}><b >SIZE</b></h5>
                                    <br>
                                    </br>


                                    {console.log('pktData', pktData[0])}
                                    {pktData[0].length > 0 && (
                                        <Sizebutton
                                            pktData={pktData[0]}
                                            showProductPrice={showProductPrice}
                                        />
                                    )}


                                    <ul class="flex justify product-badge" style={{ marginTop: "-4rem" }}>

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
                                                        <a>
                                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                                <a class="btn btn-primarybst1 addtocartbstslr  " onClick={() => Addtocart1(data.ProductModelApi.Id)} style={{ color: "white", marginLeft: "4rem" }}>Add to Cart </a>
                                                            </button>

                                                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                                                <div class="offcanvas-header">
                                                                    <h5 id="offcanvasRightLabel">Your Cart</h5>

                                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>

                                                                </div>
                                                                <div style={{ backgroundColor: "black", Color: "white" }}>Enjoy Free Shipping on Prepaid Orders</div>
                                                                <div class="offcanvas-body">
                                                                    <ProductListing price={price} />
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

                                    <h6 style={{ textAlign: "justify", marginRight: "15px", lineHeight: "1.5rem" }}>{data.ProductModelApi.ProductDescription}</h6>

                                </div>


                            </div>


                        )
                    })}

                </div>
            </div>
        </div>
    )
}
