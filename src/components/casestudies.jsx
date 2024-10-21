import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../index.css";
import apian from "../assets/testimonial_apian.webp";
import apianLogo from '../assets/apian.png'
import ocadoLogo from '../assets/ocado.webp'

function Casestudy() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <>
    <hr className="opacity-10 mt-10"/>
      <div className="md:px-32 tablet:px-20 mt-20 sm:mx-5">
        <div className="flex items-center justify-start gap-3 italic text-[#FEC039] font-inter font-bold text-subheadline-3 mb-8">
          Green Vertex Project: 
          <img src={apianLogo} alt="apian logo" className="w-36" />
        </div>
        <h1 className="text-white font-inter font-black md:text-headline-2 sm:text-subheadline-3 md:w-2/3 sm:my-5">
          Revolutionizing Healthcare Deliveries with Drones
        </h1>
      </div>
      <div className="md:px-32 tablet:px-20 md:mt-10 sm:mx-5">
        <p className="text-stone-300">
          Apian was faced with a monumental challenge: <br />
          <br />
          Sending life-saving medicine with drones quickly, cheaply, and
          sustainably. <br />
          <br />
          And with significant demand and even larger weather constraints, they
          had their work cut out for them…
        </p>
        {isExpanded1 && (
          <div className="text-stone-300 mt-5 font-inter">
            <p className="text-subheadline-3 text-yellow-300 font-inter font-bold">
              Apian needed answers (fast):
            </p>
            <ul className="mt-5">
              <li>Where to optimally locate the drone depots?</li>
              <li>How do we adapt to unyielding weather?</li>
              <li>How do we achieve lightning-fast delivery?</li>
            </ul>
            <p className="text-subheadline-3 text-white font-inter font-bold mt-10">
              Enter Green Vertex.
            </p>
            <p>We collaborated with Apian to tackle these urgent challenges.</p>
            <p>Utilizing our expertise and collaborating with Apian…</p>
            <p>
              We built a cutting-edge simulation model, an orchestrator, and a
              seamless visualization tool.
            </p>
            <h3 className="text-subheadline-3 text-white font-inter font-bold mt-10">
              {" "}
              The Results?
            </h3>
            <p>
              All of their operations were now capable of being effortlessly
              improved.
            </p>
            <p>
              And, after training Apian's staff to use and enhance the
              simulation, they held the total toolkit for answering their most
              dire problems.
            </p>
            <p>
              This saved them valuable time, unnecessary stress, and
              incalculable funds.
            </p>
            <h3 className="text-subheadline-3 text-white font-inter font-bold mt-10">
              Testimonial:
            </h3>
            <div className="flex sm:flex-col gap-4 bg-card border border-stone-600 rounded-xl p-10 md:items-center my-5">
              <img src={apian} className="rounded-full md:w-32 md:h-32 w-24 h-24" />
              <div>
                <p className="sm:text-sm">
                  “Chris from Green Vertex transformed our understanding of
                  simulation and digital twins. He delivered exceptional results
                  with a top-notch simulation, orchestrator, and visualization
                  tool. Chris built the sorts of simulation tools for us that
                  other companies have spent years developing with dedicated
                  engineering teams, saving us both time and money. Chris
                  empowered our engineers, enhanced the simulation's
                  capabilities, and supported us in setting up effective cloud
                  architecture. His dedication and professionalism make Chris
                  and Green Vertex an invaluable asset to any project.”
                </p>
                <p className="text-white font-black sm:mt-5">
                  Alexander Trewby, CEO - Apian
                </p>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleToggle1}
          className="mt-3 py-2 text-white rounded-lg font-inter font-black transition text-subheadline-3"
        >
          {isExpanded1 ? (
            <>
              Read Less <FontAwesomeIcon icon={faChevronUp} />
            </>
          ) : (
            <>
              Read More <FontAwesomeIcon icon={faChevronDown} />
            </>
          )}
        </button>
      </div>
      <hr className="opacity-10 mt-10"/>
      <div className="md:px-32 tablet:px-20 mt-20 sm:mx-5">
      <div className="flex items-center justify-start gap-3 italic text-[#4C216D] font-inter font-bold text-subheadline-3 mb-8">
          Green Vertex Project: 
          <img src={ocadoLogo} alt="apian logo" className="w-36" />
        </div>
        <h1 className="text-white font-inter font-black md:text-headline-2 sm:text-subheadline-3 md:w-2/3 sm:my-5">
          Transforming Fulfillment with Digital Twin Simulation
        </h1>
      </div>
      <div className="md:px-32 tablet:px-20 md:mt-10 sm:mx-5">
        <p className="text-stone-300">
          Ocado Technology, a leader in online grocery fulfillment, was looking to create a cutting-edge robotics-based storage and retrieval system ("The Hive"). <br />
          <br />
          Success would mean a breakthrough for their business. <br />
          <br />
          But, Ocado faced two major challenges: <br />
          <br />
          Creating a multi-swarm robotics system requires clever solutions and intricate coordination. <br />
          Developing advanced simulations to predict performance and optimize layouts was no small feat.
        </p>
        {isExpanded2 && (
          <div className="text-stone-300 mt-5 font-inter">
            <p className="text-subheadline-3 text-yellow-300 font-inter font-bold">
              Enter our Leading Engineers.
            </p>
            <p>We revolutionized Ocado’s operations by enhancing simulations.</p>
            <p>These simulations made assessing business opportunities seamless.</p>
            <p>Predicting throughput and optimizing warehouse layouts became straightforward.</p>
            <h3 className="text-subheadline-3 text-white font-inter font-bold mt-10">
              The Results?
            </h3>
            <p>
              Our engineers invented and merged robotic picking with a new swarm storage system… 
            </p>
            <p>
              Creating an unbeatable standard for Ocado’s breakthrough “on-grid” picking system.
            </p>
            <p>
              With laser-precise simulations, a bold idea became a highly profitable operation.
            </p>
            <p>
              The payoff? Unparalleled efficiency, transforming Ocados operations, forever…
            </p>
          </div>
        )}
        <button
          onClick={handleToggle2}
          className="mt-3 py-2 text-white rounded-lg font-inter font-black transition text-subheadline-3"
        >
          {isExpanded2 ? (
            <>
              Read Less <FontAwesomeIcon icon={faChevronUp} />
            </>
          ) : (
            <>
              Read More <FontAwesomeIcon icon={faChevronDown} />
            </>
          )}
        </button>
      </div>
      <hr className="opacity-10 mt-10"/>
    </>
  );
}

export default Casestudy;
