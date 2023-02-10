
import React, { useState, useEffect } from "react";
import $ from 'jquery'

export default function sizebuttonold() {

    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')

    const [image, setImage] = useState([]);
    const [imagee, setImagee] = useState([]);
    const [id, setId] = useState("");
    const getUsers = async (id) => { 
        // console.log("hello", id)
        // console.log('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id)
        const response = await fetch('https://api.gyros.farm/api/AdminApi/SubCategoryFullDescription/' + id);
        const getUsers = await response.json();
        // console.log("getUsers", getUsers)
        let data = getUsers.result
        let imgData = []  
        // console.log("datartfgyhjk", data)
        data.map((res) => {
            //   let dict={}
            imgData.push(res.multipleImage)
            res['Product_Image'] = "https://api.gyros.farm/Images/" + res.Product_Image
        })

        let finalData = []
        // console.log("length", imgData[0].length)
        for (var i = 0; i < imgData[0].length; i++) {
            let dict = {}
            // console.log("imgData[0][i]", imgData[0][i])
            dict['image'] = "https://api.gyros.farm/Images/" + imgData[0][i]
            finalData.push(dict)
        }
        setImage(finalData)
        setImagee(data)
        // console.log("finalData", finalData)

        // console.log("abc", data)
    }
    useEffect(() => {
        // console.log("props", localStorage.getItem('product_id2'))
        let p_id = localStorage.getItem('product_id2')
        setId(p_id)
        getUsers(p_id);
    }, []);

    $(document).ready(function () {
        $("#p1").hide();
        $("#p2").hide();
        $("#p3").hide();
        $("#p4").hide();
        $("#p5").hide();
        $("#t1").show();
        $(".but1").click(function () {
            $("#p1").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#t1").hide();
        });
        $(".but2").click(function () {
            $("#p1").hide();
            $("#p2").show();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();

            $("#t1").hide();
        });
        $(".but3").click(function () {
            $("#p1").hide();
            $("#p2").hide();
            $("#p3").show();
            $("#p4").hide();

            $("#t1").hide();
            $("#p5").hide();
        });
        $(".but4").click(function () {
            $("#p1").hide();
            $("#p2").hide();
            $("#p3").hide();
            $("#p4").show();
            $("#p5").hide();

            $("#t1").hide();
        });
        $(".but5").click(function () {
            $("#p1").hide();
            $("#p2").hide();
            $("#p3").hide();

            $("#t1").hide();
            $("#p4").hide();
            $("#p5").show();
        });
    });

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

    return (

        <div className="row">
            <div className="col-sm">
                {imagee.map((data, index) => {
                    return (
                        <div class="main">
                            <div class="wrap ">

                                <div className="space-around" style={{ marginRight: "101px", marginTop: "-2rem" }}>

                                    <div class="containe2">
                                        <button class="button but1">{data.Qty1}{data.Pkt1}</button> &nbsp;
                                        <button class="button but2">{data.Qty2}{data.Pkt2}</button>&nbsp;
                                        <button class="button but3">{data.Qty3}{data.Pkt3}</button>&nbsp;
                                    </div>
                                    {/* 
                                <div className="flex space-evenily">
                                    <button class="but4 btn btn-primary "></button>

                                    <button class="but5 btn btn-primary "></button>
                                </div> */}

                                    <div class="containe2" style={{ marginTop: "10px" }}>
                                        <button class="button but4">{data.Qty4}{data.Pkt4}</button>&nbsp;
                                        <button class="button but5">{data.Qty5}{data.Pkt5}</button>
                                    </div>

                                </div>

                                <div class="content" style={{ marginTop: "-12.6rem", marginLeft: "5rem" }}>

                                    <p id="t1" className="prc2">{data.FinalPrice} <s >{data.Price}₹</s></p>

                                    <p id="p1" className="prc2">{data.FinalPrice1} <s >{data.Price1}₹</s></p>
                                    <p id="p2" className="prc2">{data.FInalPrice2} <s >{data.Price2}₹</s></p>
                                    <p id="p3" className="prc2">{data.FinalPrice3} <s >{data.Price3}₹</s></p>
                                    <p id="p4" className="prc2">{data.FInalPrice4} <s >{data.Price4}₹</s></p>
                                    <p id="p5" className="prc2">{data.FinalPrice5} <s >{data.Price5}₹</s></p>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="col-sm main" style={{ marginTop: "-5rem" }}>
                <h6 className="underline"><a href="#" style={{ marginLeft: "8rem" }}>See all Reviews</a></h6>
            </div>
        </div>





    )
}