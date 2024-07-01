import React from "react";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faBolt, faChartBar, faChartLine, faChartSimple, faClock, faCog, faCogs, faDollarSign, faEye, faFlask, faHandsHelping, faIdCard, faMoneyBillTrendUp, faProjectDiagram, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

function GridBox() {
  return (
    <>
      <div className="main_bg_grid relative">
      <div className="absolute md:w-96 md:h-96 bg-teal-400 blur-3xl opacity-55 rounded-full left-[50%] z-0"></div>
      <div className="absolute md:w-96 md:h-96 bg-lime-400 blur-3xl opacity-55 rounded-full left-[20%] top-[40%] z-0"></div>
      <div className="absolute md:w-96 md:h-96 bg-green blur-3xl opacity-55 rounded-full z-0"></div>
      <div className="absolute md:w-96 md:h-96 bg-cyan-300 blur-3xl opacity-55 rounded-full right-[20%] top-[40%] z-0"></div>
      <div className="md:px-32 mx-5">
        <p className="relative font-inter text-green font-semibold z-10 text-center sm:text-sm">
          Step up to where the best have already gone…
        </p>
        <h1 className="relative font-inter text-white font-black md:text-headline-2 text-center z-10">
          We Guarantee To Surpass Your Current System & Strategy, Or We Work For
          Free Until We Do!
        </h1>
        <p className="font-inter text-white mt-5 relative text-center sm:text-sm">
          Imagine a future where every strategy you implement is tested, proven, and guaranteed to work—before you ever go live.
          <br /> Those unbeatable odds of success are what make us so confident in our offer!
          <br />
          <br />
          <b className="font-black">Here’s what we promise:</b>
        </p>
      </div>
      <div className="grid md:grid-cols-5 md:grid-rows-2 md:px-32 md:mt-20 sm:mt-5">
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
          
          <FontAwesomeIcon icon={faDollarSign} className="text-5xl text-green"/>
          <div>
          <h3 className="text-white font-inter font-black text-md">Cost Reduction</h3>
          <p className="text-stone-400 font-inter text-xs">
            Identify and eliminate inefficiencies, cutting operational costs
            significantly.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faChartLine} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Profitability Boost</h3>
          <p className="text-stone-400 font-inter text-xs">
            Streamline processes to enhance productivity and increase your
            bottom line.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faCog} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Enhanced Efficiency</h3>
          <p className="text-stone-400 font-inter text-xs"> 
            Optimize every aspect of your business for maximum performance and
            minimal waste.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faChartBar} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Real-Time Insights</h3>
          <p className="text-stone-400 font-inter text-xs">
            Gain instant access to data-driven insights for smarter, quicker
            decisions.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faArrowsAlt} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Scalable Solutions</h3>
          <p className="text-stone-400 font-inter text-xs">
            Adapt the simulation to match the complexity and size of your
            operations.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600  flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faFlask} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Risk-Free Testing</h3>
          <p className="text-stone-400 font-inter text-xs">
            Experiment with scenarios in a virtual environment to ensure success
            before real-world implementation.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faProjectDiagram} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Advanced Analytics</h3>
          <p className="text-stone-400 font-inter text-xs">
            Leverage predictive and prescriptive analytics for better strategic
            planning.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faCogs} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Customizable Models</h3>
          <p className="text-stone-400 font-inter text-xs">
            Tailor simulations to meet your specific business needs and
            objectives.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faHandsHelping} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Expert Support</h3>
          <p className="text-stone-400 font-inter text-xs">
            Benefit from the guidance of seasoned engineers dedicated to
            optimizing your operations.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 bg-background border border-stone-600   flex flex-col justify-between text-center h-64 relative  hover:scale-110 duration-200 hover:bg-background hover:shadow-lg hover:z-10">
        
          <FontAwesomeIcon icon={faPuzzlePiece} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-md">Seamless Integration</h3>
          <p className="text-stone-400 font-inter text-xs">
            Ensure smooth compatibility with your existing systems and
            processes.
          </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default GridBox;
