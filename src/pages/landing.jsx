import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import "../index.css";
import TabbedInterface from "../components/tabs";
import AOS from "aos";
import "aos/dist/aos.css";
import Questions from "../components/questions";
import BG3D from "../assets/Green3DVertex.png";
import Chris from '../assets/chris.jpg';
import Services from "../components/services";
import sim from '../assets/BG.gif';

function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="hero h-screen flex justify-center items-center">
        <NavBar />
        <div className="flex items-center justify-between md:mt-10 md:px-32">
          <div className="w-1/2 relative z-10">
            <p className="text-green text-subheadline-3 mb-2 italic">
              Ready To Turn Profit Leaks Into Revenue Streams?
            </p>
            <h1 className="text-white text-headline-2 font-inter font-black text-left">
              Slash Costs, Eliminate Inefficiencies & Uplift Profitability!
            </h1>
            <p className="text-white text-md font-inter mt-2 w-96">
              Discover the proven strategy that will reduce costs and have your
              business operation at 110%
            </p>
            <button className="font-inter font-black text-2xl text-white bg-green mt-10 py-2 px-5 rounded-md hover:bg-transparent hover:scale-110 hover:text-green border-2 border-green duration-200">
              Learn More
            </button>
          </div>
          <div className="absolute z-0">
            <img src={BG3D} alt="" />
          </div>
        </div>
      </div>
      <Questions />
      <TabbedInterface />
      <div className="h-screen flex flex-col justify-center items-center">
        <h2
          className="text-subheadline-3 text-green font-inter font-bold"
          data-aos="zoom-in-up"
        >
          Discover How to Avoid These Common Pitfalls and Transform Them Into
          Profits with...
        </h2>
        <h1
          className="text-headline-1 text-white font-inter font-black"
          data-aos="zoom-in"
        >
          The Digital Twin Simulation
        </h1>
        <div className="relative flex justify-center items-center rounded-md bg-background md:px-2 md:py-10 box-border md:w-1/2 overflow-hidden border select-none border-gray-600 mt-8 hover:rotate-3 duration-200">
          <div className="z-0 absolute blur-el w-32 h-32 top-0 left-0 bg-green rounded-full animate-pulse"></div>
          <p className="z-10 text-white text-subheadline-3 font-inter w-4/5 text-center">
            78% of All Fortune 100 Companies Swear by This Complex, Yet
            Extremely Profitable Approach.
          </p>
          <div className="z-0 absolute blur-el w-32 h-32 bottom-0 right-0 bg-lime-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="flex items-center md:px-32 gap-10 mb-24">
      <div className="w-1/2">
        <h1 className="font-inter font-black text-headline-1 text-white">Meet Green Vertex</h1>
        <p className="font-inter font-black text-md text-green mb-5 w-2/3">
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
      <div className="flex gap-5 justify-center flex-grow">
        <div data-aos="flip-right" className="bg-card py-10 px-16 flex flex-col justify-center items-center rounded-xl border border-gray-800">
          <img src={Chris} alt="Chris Green Vertex" className="rounded-full w-48" />
          <h2 className="font-inter font-black text-subheadline-2 text-white text-center mt-3">Chris Brett</h2>
          <p className="text-gray-300">CTO, Founder, Head of Engineering</p>
          <button className="py-2 px-8 bg-green text-white mt-5 rounded-md text-lg font-inter font-semibold border border-green hover:bg-transparent hover:scale-110 hover:text-green duration-150">Reach Out</button>
        </div>
      </div>
      </div>
      <div className="relative md:px-32 h-screen flex flex-row-reverse justify-center items-center">
      <div className="w-1/3 z-10">
          <img src={sim} className="rounded-xl"/>
        </div>
        <div className="w-2/3">
        <div className="absolute w-64 h-64 bg-lime-700 blur-3xl rounded-full animate-pulse z-0"></div>
        <p className="font-inter font-bold text-green">Now Revealing...</p>
        <h1 className="font-inter relative z-10 font-black text-headline-2 text-white md:w-4/5">
        The Secret Behind 78% Of Fortune 100 Companies Repeated Success
        </h1>
        <p className="mt-5 text-white font-inter w-2/3 z-10 relative leading-relaxed">
        For nearly a decade, we've helped industry giants save millions with our Digital Twin Simulation.

        This revolutionary technology creates a virtual replica of your operations, allowing you to test and analyze scenarios risk-free.
        In short, It’s a way to guarantee your strategies work in the real world and from the get-go.
        </p>
        <button className="py-2 px-8 bg-green text-white mt-5 rounded-md text-lg font-inter font-semibold border w-48 border-green hover:bg-transparent hover:scale-110 hover:text-green duration-150">Learn More</button>
        </div>
      </div>
      <Services />
    </>
  );
}

export default LandingPage;
