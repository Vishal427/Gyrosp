import React from "react";
import Header from './Header';
import ImgSlider from './ImageSlider';
import VideoSlider from './videoSlider';
import Banner from './Banner';
import Video from './Video';
import Bestsellerweek from './Bestsellerweek';
import Toppicks from './Toppicks';
import SecondTop from './SecondTop';
import Believe from './Believe';
import Footer from './Footer';
import Popup from './Popup';

export default function Home(){
    
    return(
        <>
      
       <Popup/>
         <Header />
         
      <div className='mt-3'>
      <ImgSlider />
      </div>
      <div className='mt-3'>
      
      <Toppicks />
      {/* <SecondTop/> */}
      </div>
      <div className='mt-3'>
     
      <VideoSlider />
      </div>
      <div className='mt-3'> 
      <Banner />
      </div>
      <div className='mt-3'>
      <Bestsellerweek />
      </div>
      <div className='mt-3'>
      <Believe />
      </div>
      <div className='mt-3'>
      <Video />
      </div>
      <div className='mt-5'>
      <Footer />
      </div>
     

        </>
    )
}