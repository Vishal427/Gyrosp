
import React, { useState, useEffect } from "react";
import $ from 'jquery'

export default function Sizebutton(props) {

    const auth = localStorage.getItem('loginToken') 
    const Id = localStorage.getItem('ID')

    const [image, setImage] = useState([]);
    const [imagee, setImagee] = useState([]);
    const [pktData1, setPktData1] = useState([]);
    const [id, setId] = useState("");
    // const getUsers = async (id) => {
    //     // console.log("hello", id)
    //     // console.log('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id)
    //     const response = await fetch('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id);
    //     const getUsers = await response.json();
    //     // console.log("getUsers", getUsers)
    //     let data = getUsers.result
    //     let imgData = []
    //     // console.log("datartfgyhjk", data)
    //     data.map((res) => {
    //         //   let dict={}
    //         imgData.push(res.multipleImage)
    //         res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
    //     })

    //     let finalData = []
    //     // console.log("length", imgData[0].length)
    //     for (var i = 0; i < imgData[0].length; i++) {
    //         let dict = {}
    //         // console.log("imgData[0][i]", imgData[0][i])
    //         dict['image'] = "https://api.gyros.farm/Images/" + imgData[0][i]
    //         finalData.push(dict)
    //     }
    //     setImage(finalData)
    //     setImagee(data)
    //     // console.log("finalData", finalData)

    //     // console.log("abc", data)
    // }
    function setPrice(price,pkt,Qty,count,finalPrice){
        console.log('price', price)
        // props.price = price
        props.showProductPrice(price,pkt,Qty,count,finalPrice)
    }

    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id2'))
        let p_id = localStorage.getItem('product_id2')
        setId(p_id)
        // getUsers(p_id);
        let temp = []
        temp.push(props.pktData)
        setPktData1(props.pktData)
        console.log("++++++++++++++++==============", pktData1);
    }, []);

    // $(document).ready(function () {
    //     $("#p1").hide();
    //     $("#p2").hide();
    //     $("#p3").hide();
    //     $("#p4").hide();
    //     $("#p5").hide();
    //     $("#t1").show();
    //     $(".but1").click(function () {
    //         $("#p1").show();
    //         $("#p2").hide();
    //         $("#p3").hide();
    //         $("#p4").hide();
    //         $("#p5").hide();
    //         $("#t1").hide();
    //     });
    //     $(".but2").click(function () {
    //         $("#p1").hide();
    //         $("#p2").show();
    //         $("#p3").hide();
    //         $("#p4").hide();
    //         $("#p5").hide();

    //         $("#t1").hide();
    //     });
    //     $(".but3").click(function () {
    //         $("#p1").hide();
    //         $("#p2").hide();
    //         $("#p3").show();
    //         $("#p4").hide();

    //         $("#t1").hide();
    //         $("#p5").hide();
    //     });
    //     $(".but4").click(function () {
    //         $("#p1").hide();
    //         $("#p2").hide();
    //         $("#p3").hide();
    //         $("#p4").show();
    //         $("#p5").hide();

    //         $("#t1").hide();
    //     });
    //     $(".but5").click(function () {
    //         $("#p1").hide();
    //         $("#p2").hide();
    //         $("#p3").hide();

    //         $("#t1").hide();
    //         $("#p4").hide();
    //         $("#p5").show();
    //     });
    // });




    // $(".but").click (function(){
    //     // Close all open windows
    //     $(".content").stop().slideUp(100); 
    //     // Toggle this window open/close
    //     $(this).next(".content").stop().slideToggle(100);
    //     //hitter test// 
    //     $(".hitter").show()
    //   });

    //   $(".hitter").click (function(){
    //     // Close all open windows
    //     $(".content").stop().slideUp(100); 
    //   });

    // $(document).ready(function(){
    //     $("button").click(function(){
    //       $("p").toggle();
    //     });
    //   });
    
    return (

        <>
            <div className="row">
                {pktData1.map((data, index) => {
                    return (
                        <div className="col-sm-4" style={{ borderRadius: "40px", color: "white" }}>
                            <button class="button but1" onClick={()=>setPrice(data.Price,data.Pkt,data.Qty,"1",data.FinalPrice)}>{data.Qty}{data.Pkt}</button> &nbsp;
                            <p></p>

                            {console.log('prc', data.Price)}
                        </div>
                    )   
                })}

            </div>
            {/* <div className="col-sm main" style={{ marginTop: "-10rem" }}>
                <h6 className="underline"><a href="#" style={{ marginLeft: "8rem" }}>See all Reviews</a></h6>
            </div> */}
        </>




    )
}