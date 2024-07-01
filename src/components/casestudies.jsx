import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../index.css";
import apian from "../assets/testimonial_apian.webp";

function Casestudy() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="md:px-32 mt-20 sm:mx-5">
        <p className="italic text-green font-inter font-bold text-subheadline-3">
          Green Vertex Project
        </p>
        <h1 className="text-white font-inter font-black md:text-headline-2 sm:text-subheadline-3 md:w-2/3 sm:my-5">
          Revolutionizing Healthcare Deliveries with Drones
        </h1>
      </div>
      <div className="md:px-32 md:mt-10 sm:mx-5">
        <p className="text-stone-300">
          Apian was faced with a monumental challenge: <br />
          <br />
          Sending life-saving medicine with drones quickly, cheaply, and
          sustainably. <br />
          <br />
          And with significant demand and even larger weather constraints, they
          had their work cut out for them…
        </p>
        {isExpanded && (
          <div className="text-stone-300 mt-5 font-inter">
            <p className="text-subheadline-3 text-yellow-300 font-inter font-bold">
              Apian needed answers (fast):
            </p>
            <ul className="mt-5">
              <li>How many drones?</li>
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
          onClick={handleToggle}
          className="mt-3 py-2 text-white rounded-lg font-inter font-black transition text-subheadline-3"
        >
          {isExpanded ? (
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
    </>
  );
}

export default Casestudy;
