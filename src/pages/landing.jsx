import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";
import "../index.css";
import TabbedInterface from "../components/tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import Questions from "../components/questions";
import BG3D from "../assets/Green3DVertex.png";
import Chris from '../assets/chris.jpg';
import Services from "../components/services";
import sim from '../assets/sim_vertex.png';
import GridBox from "../components/grid_points";
import Growth from '../assets/image_growth.png';
import Footer from "../components/footer";
import Casestudy from "../components/casestudies";
import Laurence from '../assets/laurence.jpg';
import FAQ from "../components/faq";
import ServiceMobile from "../components/services-mobile";
import MobileTextCollapse from  '../components/mobiletextcollapse';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";


function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleQualifyClick = () => {
    // Track the conversion
    gtag_report_conversion();

    // Navigate to the qualify page
    navigate("/qualify");
  }

  return (
    <>
      <div className="hero h-screen flex justify-center items-center">
        <NavBar />
        <div className="flex md:flex-row flex-col items-center md:justify-between justify-center md:mt-10 md:px-32 mx-5">
          <div className="md:w-1/2 relative z-10 flex md:block justify-center items-center flex-col">
            <p className="text-green md:text-subheadline-3 mb-2 md:text-left text-center text-sm">
              Ready To Turn Profit Leaks Into Revenue Streams?
            </p>
            <h1 className="text-white md:text-headline-2 font-inter font-black md:text-left text-subheadline-4 md:my-1 my-5 text-center">
              Slash Costs, Eliminate Inefficiencies & Uplift Profitability!
            </h1>
            <p className="text-white md:text-md font-inter mt-2 mb-5 md:w-96 text-sm text-center md:text-left">
              Transforming your operations into well-oiled machine is what we do best.
            </p>
            <a href="#down" className="py-2 px-8 bg-green text-white mt-10 rounded-md text-lg font-inter font-semibold border w-48 border-green hover:bg-transparent hover:scale-110 hover:text-green duration-150">Learn More</a>
          </div>
          <div className="absolute z-0 top-24 right-10 md:top-auto md:bottom-auto md:w-1/2">
            <img src={BG3D} alt="" />
          </div>
        </div>
      </div>
      <Questions />
      <TabbedInterface />
      <div className="md:h-screen md:my-auto my-20 flex flex-col justify-center items-center md:m-auto mx-5">
        <h2
          className="md:text-subheadline-3 text-green font-inter md:font-bold font-normal md:text-center md:px-20"
          data-aos="zoom-in-up"
        >
          Discover How to Avoid These Common Pitfalls and Transform Them Into
          Profits with...
        </h2>
        <h1
          className="md:text-headline-1 text-headline-3 md:text-center text-white font-inter font-black md:px-20"
          data-aos="zoom-in"
        >
          The Digital Twin Simulation
        </h1>
        <div className="relative flex justify-center items-center gap-4 rounded-md bg-background md:px-2 md:py-10 box-border md:w-1/2 overflow-hidden border select-none border-gray-600 mt-8 hover:rotate-3 duration-200">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-6xl text-white"
          />
          <p className="z-10 text-white md:text-subheadline-3 font-inter md:w-4/5 md:p-1 p-2">
            78% of All Fortune 100 Companies Swear by This Complex, Yet
            Extremely Profitable Approach.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-center md:px-32 gap-10 mb-24 md:mx-auto mx-5">
      <div className="md:hidden">
        <MobileTextCollapse />
      </div>
      <div className="md:w-1/2 sm:hidden">
        <h1 className="font-inter font-black md:text-headline-1 text-headline-3 text-white">Meet Green Vertex</h1>
        <p className="font-inter md:font-black text-md text-green mb-5 md:w-2/3">
          Reducing costs, optimizing complex processes, and
          increasing profitability is what we do best…
        </p>
        <p className="text-md font-inter text-gray-100 leading-snug">
          Years ago, we at Green Vertex noticed a critical gap: <br></br><br></br> Businesses of
          all shapes and sizes were falling prey to “invisible” forces in their
          systems… <br></br> <br></br>This meant snail-paced deliveries, cranky customers, and your
          operations running at half-throttle. <br></br> <br></br>Determined to solve this, we
          turned to do some research… <br></br> <br></br>There were swarms of AI, software
          companies, and a few odd consultants, but nobody that could truly
          guarantee long-lasting, and effortless results.<br></br><br></br> <i>So, naturally, we
          sought to craft a new and better route…</i>
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center md:flex-grow sm:w-full">
        <div data-aos="flip-right" className="bg-card p-5 flex items-center gap-6 text-left sm:flex-col sm:text-center rounded-xl border border-gray-800">
          <img src={Chris} alt="Chris Green Vertex" className="rounded-full w-32" />
          <div>
          <h2 className="font-inter font-black text-subheadline-2 text-white sm:text-center">Chris Brett</h2>
          <p className="text-gray-300 sm:text-center mb-4">CEO, Co-Founder</p>
          <button onClick={handleQualifyClick} className="py-2 px-5 bg-green text-white mt-2 rounded-md text-md font-inter font-semibold border border-green hover:bg-transparent hover:scale-110 hover:text-green duration-150 sm:text-center">Reach Out</button>
          </div>
        </div>
        <div data-aos="flip-right" className="bg-card p-5 flex items-center gap-6 text-left sm:flex-col sm:text-center rounded-xl border border-gray-800">
          <img src={Laurence} alt="Laurence Green Vertex" className="rounded-full w-32" />
          <div>
          <h2 className="font-inter font-black text-subheadline-2 text-white text-left sm:text-center">Laurence Hole</h2>
          <p className="text-gray-300 sm:text-center mb-4">CTO, Co-Founder</p>
          <button onClick={handleQualifyClick} className="py-2 px-5 bg-green text-white mt-2 rounded-md text-md font-inter font-semibold border border-green hover:bg-transparent hover:scale-110 hover:text-green duration-150 sm:text-center">Reach Out</button>
          </div>
        </div>
      </div>
      </div>
      <div className="relative md:px-32 md:h-screen sm:mb-20 flex md:flex-row flex-col-reverse justify-center items-center">
      <div className="md:w-1/3 md:h-80 mx-5 z-10 bg-background bg_sim rounded-xl">
        </div>
        <div className="md:w-2/3 mx-5 mb-5">
        <div className="absolute md:w-64 w-20 md:h-64 h-20 bg-lime-700 blur-3xl rounded-full animate-pulse z-0"></div>
        <p className="font-inter font-bold text-green">Now Revealing...</p>
        <h1 className="font-inter relative z-10 font-black md:text-headline-3 text-subheadline-3 text-white">
        The Secret Behind 78% Of Fortune 100 Companies Repeated Success
        </h1>
        <p className="mt-5 text-white font-inter z-10 relative leading-relaxed mb-5">
        For nearly a decade, we've helped industry giants save millions with our Digital Twin Simulation.

        This revolutionary technology creates a virtual replica of your operations, allowing you to test and analyze scenarios risk-free.
        In short, It’s a way to guarantee your strategies work in the real world and from the get-go.
        </p>
        <button onClick={handleQualifyClick} className="py-2 px-8 bg-green text-white mt-5 rounded-md text-lg font-inter font-semibold border w-48 border-green hover:bg-transparent hover:scale-110 hover:text-green duration-150">Learn More</button>
        </div>
      </div>
      <hr className="opacity-20 md:opacity-0"/>
      <div className="sm:hidden">
      <Services/>
      </div>
      <div className="md:hidden">
        <ServiceMobile/>
      </div>
      <div className="flex sm:flex-col-reverse items-center sm:gap-4 md:gap-4 h-screen mx-5 md:px-32 mb-48">
        <div className="bg-background rounded-xl z-10 md:p-5 md:w-3/5">
        <p className="text-green font-inter font-bold text-left z-10">Success isn't a secret; it's a strategy…</p>
        <h1 className="text-white font-inter font-black md:text-headline-2 text-2xl leading-normal z-10">The Fastest And Easiest Way To Guarantee Success!</h1>
        <p className="text-white font-inter md:w-2/3 md:mt-2 leading-relaxed z-10">Boosting efficiency and cutting costs is critical. After all, time is money, and poor operations drain your business's resources. Luckily, there are a few solutions. You can either painstakingly analyze charts, risk testing in the real world for months, gamble with your intuition, or take a better route…</p>
        </div>
        <div className="md:w-2/5 sm:w-11/12">
          <img src={Growth}  />
        </div>
      </div>
      <GridBox/>
      <p className="text-white font-inter font-semibold md:text-headline-3 sm:text-md sm:m-5 pr-20 md:px-32 mt-10 md:text-center sm:text-left">But! Our risk-free offer isn’t meant for every business…</p>
      <div className="flex justify-center sm:justify-start mx-5 ">
      <button onClick={handleQualifyClick} className="text-white font-inter font-black bg-green md:text-subheadline-4 p-4 px-6 rounded-md md:my-5 border border-green hover:bg-transparent hover:text-green hover:scale-110 transition">
          <p>See If You Qualify</p>
      </button>
      </div>
      <Casestudy/>
      <FAQ/>
      <Footer/>
      <p className="italic text-xs text-stone-500 text-center">All Rights Reserved Green Vertex. 2024</p>
    </>
  );
}

export default LandingPage;
