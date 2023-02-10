import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import imageToBase64 from 'image-to-base64/browser'
export default function Addreview(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [open, setopen] = useState("")
    const Id = localStorage.getItem('ID')
    const [id, setId] = useState("");
    const [productid, setProductId] = useState("");
    const [image, setImage] = useState("");
    const [Rating1, setRating1] = useState("");
    const [Rating2, setRating2] = useState("");
    const [Rating3, setRating3] = useState("");
    const [Rating4, setRating4] = useState("");
    const [Rating5, setRating5] = useState("");
    const [Imagename, setImageName] = useState("");

    function baseimg(img) {
        console.log("image=====>>>>", img[0].name);
        setImageName(img[0].name)

        console.log('naam', name)
        imageToBase64(img) // Path to the image
            .then(
                (response) => {
                    console.log("base64 respons=====", response);
                    setImage(response) // "cGF0aC90by9maWxlLmpwZw=="

                }
            )
    }

    function setNamefunction(name) {
        
        console.log("name", name);

        setName(name)
    }


    
 
    function Addreview() {
        console.log({ name, email, title, description, id, image, Imagename, Rating1, Rating2, Rating3, Rating4, Rating5 });
        let data = { "Name": name, "Email": email, "Title": title, "Description": description, "ProductId": id, "ImageBase": image, "ImageName": Imagename, "Rating1": Rating1, "Rating2": Rating2, "Rating3": Rating3, "Rating4": Rating4, "Rating5": Rating5 }
       
        fetch("https://api.gyros.farm/api/AdminApi/AddReview", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log("result", result);
        })
    }

    useEffect(() => {
        console.log("props", localStorage.getItem('product_id'))
        let P_id = localStorage.getItem("product_id2", id)

        console.log("Product Id", P_id);
        setId(P_id)
        // Addreview(props.product_id);


    }, []);




    return (
        <div>
            <div style={{ marginLeft: "3rem", marginBottom: "2rem" }}>
                <Button
                    onClick={() => setopen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}

                >
                    Write Review
                </Button>
                <Collapse in={open} style={{ visibility: "visible", marginTop: "1rem" }}>
                    <form style={{ marginTop: "-3rem", }} >
                        <div className="form-group rewname  rewname1">
                            <div><label for="exampleInputEmail1" >Name</label></div>
                            <input type="name" onChange={(e) => { setNamefunction(e.target.value) }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" style={{ marginLeft: "4rem", width: "52%" }} />

                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" className="ademail ademail1">Email</label>
                            <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Enter your Email" style={{ marginLeft: "4rem", width: "52%" }} />
                        </div>

                        <div className="rate" style={{ marginLeft: "3rem", marginTop: "-1rem" }}>
                            <input type="radio" id="star5" onChange={(e) => { setRating5(e.target.value) }} name="rate" defaultValue={1} />
                            <label htmlFor="star5" title="text">
                                5 stars
                            </label>
                            <input type="radio" id="star4" onChange={(e) => { setRating4(e.target.value) }} name="rate" defaultValue={1} />
                            <label htmlFor="star4" title="text">
                                4 stars
                            </label>
                            <input type="radio" id="star3" onChange={(e) => { setRating3(e.target.value) }} name="rate" defaultValue={1} />
                            <label htmlFor="star3" title="text">
                                3 stars
                            </label>
                            <input type="radio" id="star2" onChange={(e) => { setRating2(e.target.value) }} name="rate" defaultValue={1} />
                            <label htmlFor="star2" title="text">
                                2 stars
                            </label>
                            <input type="radio" id="star1" onChange={(e) => { setRating1(e.target.value) }} name="rate" defaultValue={1} />
                            <label htmlFor="star1" title="text">
                                1 star
                            </label> 
                        </div>


                        <br></br>
                        {/* <div class="form-group ">
                            <label for="exampleInputPassword1" style={{marginLeft:"-13rem"}} >Review Title </label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Review Title " style={{ marginLeft: "4rem", width: "52%" }} />
                        </div> */}

                        <div class="form-group">
                            <label for="exampleInputPassword1" className="addcomments  addcomments1" style={{marginLeft:"-10rem"}}>Review Comments  </label>
                            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Write Review here.... " style={{ marginLeft: "4rem", width: "52%" }} />
                        </div>

                        {/* <div class="form-group">
                            <label for="exampleInputPassword1" className="addcomments  addcomments1">Image Name  </label>
                            <input type="text" value={Imagename } onChange={(e) => { setImageName(e.target.value) }} class="form-control" id="exampleInputPassword1" placeholder="Write image Name.... " style={{ marginLeft: "4rem", width: "52%" }} />
                        </div> */}

                        <div class="form-group">
                            <label for="exampleInputPassword1" style={{ marginLeft: "0rem" }}>Image Upload</label>
                            <input type="file" class="form-control" id="exampleInputPassword1" onChange={(e) => { baseimg(e.target.files) }} style={{ marginLeft: "4rem", width: "52%" }} />
                        </div>

                        <button type="submit" onClick={Addreview} class="btn btn-primary">Submit Review</button>
                    </form>

                </Collapse>
            </div>
        </div>
    )
}