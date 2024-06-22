import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import "../index.css";
import TabbedInterface from "../components/tabs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Questions from "../components/questions";
import BG3D from '../assets/Green3DVertex.png';

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
      <Questions/>
      <TabbedInterface />
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-subheadline-3 text-green font-inter font-bold" data-aos="zoom-in-up">Discover How to Avoid These Common Pitfalls and Transform Them Into Profits with...</h2>
        <h1 className="text-headline-1 text-white font-inter font-black" data-aos="zoom-in">The Digital Twin Simulation</h1>
        <div className="relative flex justify-center items-center rounded-md bg-background md:px-2 md:py-10 box-border md:w-1/2 overflow-hidden border border-gray-600 mt-8 hover:scale-125 duration-200">
          <div className="z-0 absolute blur-el w-32 h-32 top-0 left-0 bg-green rounded-full animate-pulse"></div>
          <p className="z-10 text-white text-subheadline-3 font-inter w-4/5 text-center">78% of All Fortune 100 Companies Swear by This Complex, Yet Extremely Profitable Approach.</p>
          <div className="z-0 absolute blur-el w-32 h-32 bottom-0 right-0 bg-lime-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
