import React from "react";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faBolt, faChartBar, faChartLine, faChartSimple, faClock, faCog, faCogs, faDollarSign, faEye, faFlask, faHandsHelping, faIdCard, faMoneyBillTrendUp, faProjectDiagram, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

function GridBox() {
  return (
    <>
      <div className="mx-5 md:px-32">
        <p className="font-inter text-green font-semibold">
          Step up to where the best have already gone…
        </p>
        <h1 className="font inter text-white font-black md:text-headline-2 md:w-2/3">
          We Guarantee To Surpass Your Current System & Strategy, Or We Work For
          Free Until We Do!
        </h1>
        <p className="font-inter text-white mt-5">
          Don’t gamble with your business’s future. <br />
          <br /> Choose Digital Twin Simulation and transform your operations
          into a well-oiled machine. <br />
          <br /> By virtually testing changes before implementation, you
          eliminate the risk of costly errors and ensure that your strategies
          will work. <br />
          <br />
          <b className="font-black">Here’s what we promise:</b>
        </p>
      </div>
      <div className="grid md:grid-cols-5 md:grid-rows-2 md:px-32 mt-20">
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
          
          <FontAwesomeIcon icon={faDollarSign} className="text-5xl text-green"/>
          <div>
          <h3 className="text-white font-inter font-black text-xl">Cost Reduction</h3>
          <p className="text-stone-400 font-inter text-xs">
            Identify and eliminate inefficiencies, cutting operational costs
            significantly.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faChartLine} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Profitability Boost</h3>
          <p className="text-stone-400 font-inter text-xs">
            Streamline processes to enhance productivity and increase your
            bottom line.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faCog} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Enhanced Efficiency</h3>
          <p className="text-stone-400 font-inter text-xs"> 
            Optimize every aspect of your business for maximum performance and
            minimal waste.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faChartBar} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Real-Time Insights</h3>
          <p className="text-stone-400 font-inter text-xs">
            Gain instant access to data-driven insights for smarter, quicker
            decisions.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faArrowsAlt} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Scalable Solutions</h3>
          <p className="text-stone-400 font-inter text-xs">
            Adapt the simulation to match the complexity and size of your
            operations.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600  flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faFlask} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Risk-Free Testing</h3>
          <p className="text-stone-400 font-inter text-xs">
            Experiment with scenarios in a virtual environment to ensure success
            before real-world implementation.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faProjectDiagram} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Advanced Analytics</h3>
          <p className="text-stone-400 font-inter text-xs">
            Leverage predictive and prescriptive analytics for better strategic
            planning.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faCogs} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Customizable Models</h3>
          <p className="text-stone-400 font-inter text-xs">
            Tailor simulations to meet your specific business needs and
            objectives.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faHandsHelping} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Expert Support</h3>
          <p className="text-stone-400 font-inter text-xs">
            Benefit from the guidance of seasoned engineers dedicated to
            optimizing your operations.
          </p>
          </div>
        </div>
        <div className="px-5 py-10 border border-stone-600   flex flex-col justify-between text-center h-64 relative bg-transparent hover:scale-110 duration-200 hover:bg-background hover:z-10">
        
          <FontAwesomeIcon icon={faPuzzlePiece} className="text-5xl text-green" />
          <div>
          <h3 className="text-white font-inter font-black text-xl">Seamless Integration</h3>
          <p className="text-stone-400 font-inter text-xs">
            Ensure smooth compatibility with your existing systems and
            processes.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridBox;
