import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import careerbnr1 from './careerbnr1.png';
export default function Career() {
  return (
    <>
      <div >
        <Header />
      </div>

      <nav className="fstsec">

        <div>
          <h1 className="fstcareer"><b>CAREER OPPORTUNITIES AT GYROS FARM</b></h1>
        </div>

        {/* <div className="careerscndhead">
          <h3 ><Link to="/" className="homeclr">Home</Link>/<b className="homeclr">Career</b></h3>
        </div> */}

      </nav>

      <div className="sectioncareer">
        
       
        <p className="strongly">
          Are you eager to work for rising start-ups?<br></br>
          Are you enthusiastic about health, farming, production, food, soil and agro-based technology?<br></br>
          Are you willing to be a part of the next health revolution?<br></br>
          Then GYROS is the ideal place for you and your ambition. Write to us at <b>director@gyros.farm</b> or call us at <b>+918950800633</b> if you are willing to commit to us in our journey.

        </p>
      </div>

      {/* <div className="sectioncareer">
        <h3>
          <b></b><span class="careeroprtunity " >REASONS TO WORK WITH US</span><b></b></h3>

        <h4 className="strongly"><b>EXTRACURRICULAR ACTIVITIES</b></h4>
        <p className="strongly ">
          We strongly believe in the saying, “Unity in Diversity”. Therefore, we provide opportunities to candidates from varied nationalities,
          ethnicity, age, gender, <br></br>and education. We recognize
          the challenges of promoting diversity such as flexibility, adaptability, understanding values and beliefs.<br></br>

          <br></br>Therefore, provide a platform where opportunities can be created to listen to different points of view, broaden recruitment scope,
          and contemplate innovative <br></br> ways to attract the best talents.
        </p>


        <h4 className="strongly"><b>NURTURING TALENTS</b></h4>
        <p className="strongly">
          Our team members help each other, especially to those who are new joiners in order to nurture talents. Under the guidance of our eminent leaders,
          we <br></br>unite with the same goal of making this world a healthy place.
        </p>


        <h4 className="strongly"><b>EMINENT WORK ETHICS</b></h4>
        <p className="strongly">
          We maintain a friendly yet professional work environment with eminent work
          ethics by treating every employee with respect to harbour high productivity.
        </p>


        <h4 className="strongly"><b>COMMUNITY INITIATIVES</b></h4>
        <p className="strongly">
          We help each other in our highs and lows and proactively involve in community initiatives
          to extend help. We also support an employee or a family member <br></br> under
          circumstances of serious illness by providing emotional as well as financial aid.<br></br>

          <br></br> We believe in gender equality thus, actively encourage women candidates to join our organization while maintaining a healthy women-men equality index.
        </p>
      </div> */}

      <div class="col-sm lorem">
        <img style={{marginTop:"-8rem"}} src={careerbnr1} width="100%" height={500} />
      </div>

      <div className="footerproductdetail">
        <Footer />
      </div>

    </>


  )
}