import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import "../index.css";
import TabbedInterface from "../components/tabs";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        <div className="flex flex-col items-center justify-center md:mt-10 md:px-40">
          <p className="text-green text-subheadline-3 mb-2 italic">
            Ready To Turn Profit Leaks Into Revenue Streams?
          </p>
          <h1 className="text-white text-headline-1 font-inter font-black text-center">
            Slash Costs, Eliminate Inefficiencies & Uplift Profitability!
          </h1>
          <p className="text-white text-md font-inter mt-2">
            Discover the proven strategy that will reduce costs and have your
            business operation at 110%
          </p>
          <button className="font-inter font-black text-2xl text-white bg-green mt-10 py-2 px-5 rounded-md hover:bg-transparent hover:scale-110 hover:text-green border-2 border-green duration-200">
            Learn More
          </button>
        </div>
      </div>
      <div className="sticky_container">
        <div className="sticky_card bg-background">
          <div className="p-20">
            <h1 className="text-headline-1 text-white font-black font-inter">Dear Business Builder...</h1>
            <span className="underline" data-aos="flip-right"></span>
          </div>
        </div>
        <div className="sticky_card bg-green">
          <div>
            <h1 className="text-headline-1 text-white font-black font-inter">Are Inefficiencies Eating Up Your profits?</h1>
          </div>
        </div>
        <div className="sticky_card bg-background">
          <div className="relative widhttt h-screen flex justify-center items-center p-20">
            <div className="absolute top-0 left-0 bg-white w-1/2 h-screen"></div>
            <h1 className="text-headline-1 text-white font-black font-inter mix-blend-exclusion">Tired of double-guessing your decisions?</h1>
          </div>
        </div>
        <div className="sticky_card">
          <div className="bg-card p-20">
            <h1 className="text-headline-1 text-white font-black font-inter">Looking for an Effortless Way to Drive <i className="text-green">Real Results?</i></h1>
          </div>
        </div>
        <div className="sticky_card">
          <div className="bg-background h-screen widhttt flex justify-center items-center">
            <h1 className="text-headline-1 text-white font-black font-inter">These Issues are All Too Common In…</h1>
          </div>
        </div>
      </div>
      <TabbedInterface />
      <div className="h-screen flex items-center justify-center twin_section">
        <div className="text-center">
          <p className="text-white relative z-10 text-subheadline-2">Discover How to Avoid These Common Pitfalls and Transform Them Profits with...</p>
          <h1 className="relative text-white text-headline-1 font-inter font-black z-10">The Digital Twin Simulation</h1>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
