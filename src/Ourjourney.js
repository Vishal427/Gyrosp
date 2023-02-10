
import React, { useEffect, useState } from 'react'
import { ControlBar, Player } from "video-react";
import videothumbnail from './videothumbnail.jpeg'
import Footer from "./Footer";
import Header from './Header';
import NavBar from "./NavBar";
// import { Link } from "react-router-dom";
export default function Ourjourney() {

  const [users, setUsers] = useState([]);
  const [video, setVideo] = useState([]);
  const [imgstr, setImg] = useState("");
  const [flag, setFlag] = useState(false);

  const getUsers = async () => {
    const response = await fetch('https://api.gyros.farm/api/ProductApi/Video');
    const getUsers = await response.json();
    let temp = []
    let img = []
    let d1 = ""
    console.log(getUsers);
    temp.push(getUsers)
    setUsers(temp);
    console.log("data", temp)
    temp.map((retusers, index) => {
      console.log("path", retusers)
      retusers.result.map((data) => {
        console.log("data.video", data.Video1)
        img.push("https://api.gyros.farm/Images/" + data.Video1.replaceAll(" ", '%20'))
      })
    })
    console.log("img", img)
    setImg(img)
    setVideo(img)
    setFlag(true)
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (

    <>
      <div>
        <Header />
      </div>


      <div>
        <div class="aboutbanner">
          <img src="https://img.freepik.com/premium-photo/hand-planting-corn-seed-marrow-vegetable-garden-with-sunshine_34152-1616.jpg?size=626&ext=jpg&ga=GA1.2.1026641998.1659416747" width="100%" height="501" />
          {/* <div class="bannercontentt"><b><i><small>Our Mission</small><br></br>Being Your Trustworthy and Transparent Food Partner</i></b></div> */}
        </div>
        <div class="row">

          <div class="col-sm ">
            <nav className="fstsec">

              <div className="">
                <h1 className="fstcareer"><b>Our Journey</b></h1>
              </div>
            </nav>
            <h6 class="strongly" style={{ marginTop: "6rem" }}>

              In 2020 the world came to a halt, Coronavirus hit us out of nowhere. What came at the forefront was the compromised immunity of millions. Richa Tyagi, a graduate major in biology, was deeply intrigued. What are the leading causes of declining immune response? <br></br>

              Did you know that refined oil is the leading cause of cardiovascular ailments? <br></br>

              In an attempt to solve a concern that has roots in our kitchen, she started a journey that led her to the largest oil processing unit in northern India.There she discovered something peculiar.<br></br>


              The ancient art of cold pressed oils has metamorphosed into a motorized process. Made using mechanical pressers, adulterated elements, and stored in plastic, the edible oil is already sub substandard by the time it reaches your cabinets. Herein lay a golden opportunity for Richa to counter this lack of authenticity in the process of making oils. Her loss perpetuated a vision for a finer livelihood and wellness. Where did this vision take her?<br></br>
              It took her back to the time of conventional time-honored craft of cold-pressed oils. <br></br>

              How was this ancient art manifested in a modern factory? <br></br>

              Using wooden plungers and a stone base. It generates minimal heat, processed at room temperature. This in turn leads to almost no nutrient loss due to heat being significantly less.<br></br>

              Elimination of heat generation during the making, which contributed to the loss of nourishment in the oil is what makes Gyros a standout Brand. <br></br>

              Accompanied by zero adulteration and minimal plastic contact, Gyros reaches the shelves as hallmarks of purity.<br></br>

              The story of Gyros is a tale of a woman trying to find answers to matters that affect 90% of the population along the latitude of the word. The transparency vowed in our products is testimony to our traditional value system. We as a brand borrow heavily from our traditions and that catapults us to the level of transparency we cater to our customers.<br></br>

              As a young child, Richa had seen how oils were made using mortar and pestle at home. Her vision magnified this memory into a brand. This story takes us to another chapter of Richa’s Journey. <br></br>

              How can she give back to the community that feeds us? <br></br>

              With this thought was born “ Endeavor Farms”. An entrepreneurial effort meant to empower rural farmers that completely do away with middlemen. Gyros are closely associated with the farmers from the seeding to the harvesting. We provide them with world-class support and technique for cultivating crops at a global standard. Our sincerity towards ethical sourcing and our commitment to giving back to our food makers made Gyros a possibility. <br></br>

              As a Brand pledged towards an improvised world our voyage takes us from seed to spoon.<br></br>


              Reducing processing damages and magnifying the nutrition spectrum is the USP of Gyros. From tradition to trust, Gyros envisions an agrarian utopia. Our desire to reverse and heal unhealthy living brought us to the arena of the wellness industry. Our products are a manifestation of organic utility, rustic heritage, and modern science.
            </h6>

          </div>

          <div class="g2desighee">
            <nav className="fstsec">

              <div className="">
                <h1 className="fstcareer"><b>Glimpse of Our Journey</b></h1>
              </div>
            </nav>
          </div>

          <React.Fragment>

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                {console.log("video", video[0])}
                {flag === true && (

                  <div className="carousel-item active">

                    <Player
                      playsInline
                      fluid={false}
                      height={500}
                      width="100%"
                      poster={videothumbnail} controls
                    >
                      <source src={video[0]} />
                      <ControlBar autoHide={false} />
                    </Player>

                  </div>
                )}


              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
      <div class="aboutfooter">
        <Footer />
      </div>
    </>
  )
}