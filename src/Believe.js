import React from "react";
import Carousel from 'react-grid-carousel'
import farmerslove from './farmerslove.jpg';
import purityu from './purityu.jpg';
import machine from './machine.png';
import customer from './customer.jpg';
export default function Believe(){ 
    return(
        <>
        <h4 className="Believe  week  bestseller"><b>Gyros Stand Out</b></h4>
        <Carousel  cols={4} rows={1} gap={10}>
        <Carousel.Item>
        <div>
          
          <div className="wholeauthen">
          <img src={farmerslove} width={150} height={140} />
          </div>
              
             <h5 className="authcolor">Farmer's love</h5>
             <p>Endevor Farms” is a community of farmers that receive guidance and support from us and in return give us a product of love.</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div >
            
            <div className="wholeauthen1">
            <img src={machine} width={150} height={140} />
            </div>

            
             <h5 className="authcolor1 ">Ancient Indian Knowledge</h5>
             <p>The ancient art of stone cold pressing is being revived, at Gyros.</p>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div >
           
           <div className="wholeauthen2">
           <img src={purityu} width={150} height={140} />
           </div>
             
             <h5 className="authcolor2">Purity</h5>
             <p> From seeds to the compost used, each step is a hallmark of purity at Gyros.</p>
        </div>
        </Carousel.Item>
           <Carousel.Item>
        <div  >
             
             <div className="wholeauthen3" >
             <img src={customer} width={150} height={140} />
             </div>
             
             <h5 className="authcolor3"> Customer’s Perspective</h5>
             <p> Each product is developed keeping the customer in mind, it's a community, a two way communication. We hear you!</p>
        </div>
        </Carousel.Item>
                 </Carousel>
 
        </>
    )
}