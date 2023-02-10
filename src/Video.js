import React, {useEffect, useState} from 'react'
import { ControlBar, Player,PosterImage } from "video-react";
import "./Video.css"
import videothumbnail from './videothumbnail.jpeg'
export default function Video (){

    const [users, setUsers] = useState([]);
    const [video, setVideo] = useState([]);
    const [imgstr, setImg]= useState("");
    const [flag, setFlag]=useState(false);
  
   const getUsers = async () => {
    const response = await fetch('https://api.gyros.farm/api/ProductApi/Video');
    const getUsers = await response.json();
    let temp =[]
    let img =[]
    let d1=""
    // console.log(getUsers);
    temp.push(getUsers)
    setUsers(temp);
    // console.log("data",temp)
    temp.map( (retusers,index) => {
      // console.log("path",retusers)
      retusers.result.map((data)=>{
        // console.log("data.video",data.Video1)
          img.push("https://api.gyros.farm/Images/" + data.Video1.replaceAll(" ", '%20'))
        })
      })
      // console.log("img",img)
      setImg(img)
    setVideo(img)
    setFlag(true)
   }
  
   useEffect(() => {
     getUsers(); 
   }, []);
  

    return(
       
       
        <div className='wholevid'> 
            
        <h4 className="ftr"><b>Farm to Fork</b></h4>
    <h6 className="strt"><b>Food made in farms, not factories</b></h6>
        
        <React.Fragment>
         
         <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
        {/* {console.log("video",video[0])} */}
        {flag === true && (
                
                     <div className="carousel-item active ">
                    
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
         <hr></hr>
    </div>
    )
}