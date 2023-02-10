import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Invoice.css'
import logo from './logo.png';
import { Link } from "react-router-dom";
import Authrisedsignature from './Authrisedsignature.jpeg'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";


export default function Invoicepage() {

    const [id, setId] = useState("");
    const [users, setUsers] = useState([]);
    const [users1, setUsers1] = useState([]);
    const [token, setToken] = useState("");
    const auth = localStorage.getItem('loginToken')
    const Id = localStorage.getItem('ID')
    const location = useLocation()
    const { invoice } = location.state;


    const getUsers = async () => {
        const responseData =

        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${auth}`,
                "Content-Type": "application/json",
            },

        }
        console.log("invoice", invoice);

        fetch('https://api.gyros.farm/api/Order/InvoiceV1/' + invoice)
            .then(async (response) => {
                console.log('erf', Id)
                const getUsers1 = await response.json();
                let temp = []
                console.log(getUsers1);

                console.log('haa', getUsers1.GrandTotal)
                temp.push(getUsers1)
                console.log("data", temp)
                temp.map((retusers, index) => {
                    setUsers(retusers.result);

                    console.log("path", retusers.result)
                })

                temp.map((retusers, index) => {

                    setUsers1(retusers)
                    console.log("path1", retusers)

                })

            })

    }
    const styles = StyleSheet.create({
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0
        },
        tableRow: {
            margin: "auto",
            flexDirection: "row"
        },
        tableCol: {
            width: "25%",
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0
        },
        tableCell: {
            margin: "auto",
            marginTop: 5,
            fontSize: 10
        },

        Name: {
            fontSize: 12,
        }
    });


    const pdf = (

        <Document>

            <Page >
                <View style={styles.table}>

                    {users.map((data, index) => {

                        return (
                            <View >
                                <View >
                                    <Text style={styles.Name}>
                                        Name:   {data.Name}
                                    </Text>
                                </View>
                                <View >
                                    <Text style={styles.Name}>
                                        Email:  {data.Email}
                                    </Text>
                                </View>
                                <View >
                                    <Text style={styles.Name}>
                                        Address {data.Address}
                                    </Text>
                                </View>
                                <View >
                                    <Text style={styles.Name}>
                                        Mobile.No :  {data.Mobile}
                                    </Text>
                                </View>

                                <View >
                                    <Text style={styles.Name}>
                                        PinCode :  {data.PinCode}
                                    </Text>
                                </View>

                                <View >
                                    <Text style={styles.Name}>
                                        Date & Time :   {data.Date}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Description
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                QTY
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Unit Price
                            </Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Discount
                            </Text>
                        </View>

                        <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>
                                Total
                            </Text>
                        </View>
                    </View>
                    {users.map((data, index) => {

                        return (
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        {data.ProductName}
                                    </Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        {data.Total_Item}
                                    </Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        {data.Price}
                                    </Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        {data.DiscountPrice}
                                    </Text>
                                </View>

                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>
                                        {data.FinalPrice}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </Page>


        </Document>
    );
    useEffect(() => {
        getUsers();
    }, []);



    return (

        <div>
            <>
                <meta charSet="utf-8" />
                <title>Tax Invoice</title>
                <link rel="shortcut icon" type="image/png" href="./favicon.png" />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            '\n      * {\n        box-sizing: border-box;\n      }\n\n      .table-bordered td,\n      .table-bordered th {\n        border: 1px solid #ddd;\n        padding: 10px;\n        word-break: break-all;\n      }\n\n      body {\n        font-family: Arial, Helvetica, sans-serif;\n        margin: 0;\n        padding: 0;\n        font-size: 16px;\n      }\n      .h4-14 h4 {\n        font-size: 12px;\n        margin-top: 0;\n        margin-bottom: 5px;\n      }\n      .img {\n        margin-left: "auto";\n        margin-top: "auto";\n        height: 30px;\n      }\n      pre,\n      p {\n        /* width: 99%; */\n        /* overflow: auto; */\n        /* bpicklist: 1px solid #aaa; */\n        padding: 0;\n        margin: 0;\n      }\n      table {\n        font-family: arial, sans-serif;\n        width: 100%;\n        border-collapse: collapse;\n        padding: 1px;\n      }\n      .hm-p p {\n        \n        padding: 1px;\n        padding: 5px 4px;\n      }\n      td,\n      th {\n              padding: 8px 6px;\n      }\n      .table-b td,\n      .table-b th {\n        border: 1px solid #ddd;\n      }\n      th {\n        /* background-color: #ddd; */\n      }\n      .hm-p td,\n      .hm-p th {\n        padding: 3px 0px;\n      }\n      .cropped {\n        float: right;\n        margin-bottom: 20px;\n        height: 100px; /* height of container */\n        overflow: hidden;\n      }\n      .cropped img {\n        width: 400px;\n        margin: 8px 0px 0px 80px;\n      }\n      .main-pd-wrapper {\n        box-shadow: 0 0 10px #ddd;\n        background-color: #fff;\n        border-radius: 10px;\n        padding: 15px;\n      }\n      .table-bordered td,\n      .table-bordered th {\n        border: 1px solid #ddd;\n        padding: 10px;\n        font-size: 14px;\n      }\n    '
                    }}
                />
                {console.log('users', users)}



                <section className="main-pd-wrapper" style={{ width: 800, margin: "auto" }}>
                    <div style={{ display: "table-header-group" }}>

                        <table style={{ width: "100%", tableLayout: "fixed" }}>
                            <tbody>
                                <tr>
                                    <td

                                    >
                                        <div
                                            style={{
                                                textAlign: "center",
                                                margin: "auto",
                                                lineHeight: "1.5",
                                                fontSize: 14,
                                                color: "#4a4a4a"
                                            }}
                                        >

                                            <div className="logohome1 logohome2">
                                                <Link to="/">
                                                    <img


                                                        src={logo}
                                                        alt="Workflow"
                                                    />
                                                </Link>
                                            </div>

                                        </div>
                                    </td>
                                    <td
                                        align="right"
                                        style={{
                                            textAlign: "right",
                                            paddingLeft: 50,
                                            lineHeight: "1.5",
                                            color: "#323232"
                                        }}
                                    >
                                        <div>


                                            <p style={{ fontSize: 14 }}>
                                                YBTarget Core Pvt. Ltd.<br />
                                                NA, Lajpat Nagar Tosham Bypass  Road Overbridge
                                                Bhiwani  Haryana Pin-127021


                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {users.map((data, index) => {
                            return (
                                <div style={{ textAlign: "justify" }}>
                                    <p><b>SHIP TO</b></p>
                                    <p>Name : {data.Name} </p>
                                    <p>Email :{data.Email}</p>
                                    <p>Address : {data.Address}</p>
                                    <p>Mobile no : {data.Mobile}</p>
                                    <p>Pin : {data.PinCode}</p>
                                    <p>Date : {data.Date}</p>

                                    {console.log('Name',data.Name)}
                                </div>

                                
                            )
                        })}
                    </div>

                    <div className="pull-right">
                        <div className="card-headeri">

                            <div className="pull-right">

                                <PDFDownloadLink
                                    document={pdf}
                                    fileName={"Mypdf"}
                                >
                                    <i className="fa fa-file-text-o mr-1" /> PDF
                                </PDFDownloadLink>
                                {/* <a className="btn btn-sm btn-info" href="#" data-abc="true" onClick={onButtonClick} >
                                            <i className="fa fa-file-text-o mr-1" /> PDF
                                        </a> */}
                            </div>
                        </div>
                    </div>




                    <table className="table table-bordered h4-14">
                        <thead >
                            <tr>
                            </tr>
                            <tr>

                                <th style={{ width: 150 }}>
                                    <h4>Description</h4>
                                </th>

                                <th style={{ width: 80 }}>
                                    <h4>QTY</h4>
                                </th>

                                <th style={{ width: 80 }}>
                                    <h4>
                                        Unit
                                        <br />
                                        Price
                                    </h4>
                                </th>



                                <th style={{ width: 120 }}>
                                    <h4> Discount</h4>
                                </th>

                                <th style={{ width: 120 }}>
                                    <h4> Total </h4>
                                </th>


                            </tr>
                        </thead>
                        <tbody >

                            {users.map((data, index) => {
                                return (

                                    <tr >

                                        <td >{data.ProductName}</td>
                                        <td>{data.Total_Item}</td>
                                        <td>{data.Price}</td>
                                        <td>{data.DiscountPrice}</td>
                                        <td>{data.FinalPrice}</td>
                                    </tr>

                                )
                            })}
                        </tbody>
                        <tfoot />
                    </table>
                    <table
                        className="hm-p table-bordered"
                        style={{ width: "100%", marginTop: 30 }}
                    >
                        <tbody>


                        </tbody>
                    </table>
                    <table
                        className="hm-p table-bordered"
                        style={{ width: "100%", marginTop: 30 }}
                    >
                        <tbody>
                            {users.map((data, index) => {
                                return (
                                    <tr style={{ background: "#fcbd02" }}>
                                        <th>GrandTotal </th>
                                        <td style={{ width: 70, textAlign: "right", borderRight: "none" }}>
                                            <b>{users1.GrandTotal}</b>
                                        </td>
                                        <td colSpan={5} style={{ borderLeft: "none" }} />
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <table
                        style={{ width: "100%" }}
                        cellSpacing={0}
                        cellspadding={0}
                        border={0}
                    >

                    </table>


                    <div className=" flex ">
                        <div className="col-lg-4 col-sm-5" style={{ textAlign: "left" }}>
                            <p> <Link to="/Refundpolicy"><b style={{ marginLeft: "1rem" }}> 1. Terms & Conditions </b></Link></p>
                            All Disputes are Subjected to Bhiwani Juridiction Only

                            <br></br>  <b>2.</b> All prizes are inclusive of All Taxes.

                        </div>


                        <div className="col-lg-4 col-sm-5" style={{ textAlign: "justify", marginLeft: "1rem" }}>
                            <div className='flex mobilebl mt-2' >

                                <a >
                                    {/* <i class="fas fa-mobile-alt mobpic " ></i> */}
                                    <i class=" mobpicc"></i>

                                    <b style={{ marginLeft: "5rem" }}>Factory Address:</b> <p className='font-bold text-sm mobilee adds' style={{ textAlign: "left" }} > NA,LAJPAT NAGAR TOSHAM BYE PASS ROAD,OVER BRIDGE,Bhiwani,Bhiwani
                                        Haryana, 127021</p>
                                </a>
                            </div>


                            <div className='flex mobilebl mt-2' >

                                <a >
                                    {/* <i class="fas fa-mobile-alt mobpic " ></i> */}
                                    <i class=" mobpicc" style={{ marginLeft: "-11rem" }}></i>

                                    <b style={{ marginLeft: "5rem" }}>Sales Office :</b>  <p className='font-bold text-sm mobilee adds' style={{ textAlign: "left" }} >Plot No-1568 , Basement Sec-45 Gurgaon Pin-122022 (Near Huda City Center) </p>
                                </a>
                            </div>



                        </div>


                        <div>

                            <img src={Authrisedsignature}></img>

                            <b>Authorised Signature</b>
                        </div>

                    </div>


                </section>



            </>

        </div>
    )
}