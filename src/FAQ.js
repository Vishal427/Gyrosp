import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Header from './Header';
import $ from 'jquery';
import "./FAQ.css"
export default function FAQ() {
  $(document).ready(function () {
    $('.accordion a').click(function () {
      $(this).toggleClass('active');
      $(this).next('.content').slideToggle(400);
    });
  });
  return (

    <div >

      <div>
        <Header />
      </div>

  
      <div className="">
        <h4 className="week  bestseller"><b>Frequently Asked Questions</b></h4>
        <div className="accordion">
          <div className="accordion-item">
            <a> What is cold pressed oil?</a>
            <div className="content">
              <p>
                Cold pressed oils are oils that are extracted using the traditional methods of oil extraction using stone or wood. It is also called Kachi Ghani oil. Heat is minimized in this process so as to reduce nutrition and flavor loss. They are one of the healthiest oils present in the market.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <a>How are cold pressed oils better than hot pressed oils?</a>
            <div className="content">
              <p>
                Hot pressed oils are extracted using high temperature application, as a side effect of high temperature nutrients and flavors are lost from the oil. The cold pressed oil in contrast preserves the nutrients and flavor by minimized heat application.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <a>Why should we switch from refined oils?</a>
            <div className="content">
              <p>
                Refined oils are made using an extensive mechanical chemical process.Chemicals are used to make refined oils which make them harmful for health. They lead to increased triglycerides, increase body inflammation and also worsen the insulin response.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <a>What are the oil varieties at Gyros?</a>
            <div className="content">
              <p>
                Gyros deals in cold pressed oils. Coconut, groundnut, sesame, yellow mustard and black mustard oil. All these oils are cold pressed and organic.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <a>Are products at Gyros 100% natural?</a>
            <div className="content">
              <p>
                Gyros has been involved in the oil making process since the seeding stage. We take care of the quality of the seeds, to keep them pesticide free and extract the oil using no chemicals or preservatives. This ensures 100 % purity.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <a>What is the shelf life compared to refined oils?</a>
            <div className="content">
              <p>
                Refined oils are made using a hydrogenation process that significantly increases the shelf life of the product but the quality of the oil is compromised. Cold pressed oils on the other hand have a shorter shelf life but the quality is far more superior, with all the nutrients and flavor intact.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <a>What is the nutritional value of cold pressed oil?</a>
            <div className="content">
              <p>
                Cold pressed oils are rich in essential fatty acids, antioxidants, Vitamin E, Vitamin K, and other healthy fats. These good elements are preserved due to cold pressing technique, which is achieved by applying minimum heat.
              </p> 
            </div>
          </div>

          <div className="accordion-item">
            <a >What are the benefits of cold pressed oil?</a>
            <div className="content">
              <p>
                Cold pressed oil has rich nutrients and good flavour.They can be used for cooking as well as external usage. Using them for skin and hair care is the best. They are free from chemicals and preservatives, thus they are hallmarks of purity.
              </p>
            </div>
          </div>

          <div className="accordion-item">
            <a>Why are cold pressed oils expensive?</a>
            <div className="content">
              <p>
                Cold-pressed oils are expensive because they follow a strict extraction process. They are grinded and extracted using mortar and pestle, wherein purity is maintained at each and every step. Heat application is minimum, hence purer the oil, higher the price.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="footerproductdetail1">
        <Footer />
      </div>


    </div>
  )
}