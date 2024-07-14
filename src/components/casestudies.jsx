import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../index.css";
import apian from "../assets/testimonial_apian.webp";

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
      <div className="md:px-32 mt-20 sm:mx-5">
        <p className="italic text-green font-inter font-bold text-subheadline-3">
          Green Vertex Project: <svg preserveAspectRatio="xMidYMid meet" viewBox="-0.003 0 1285.243 365.1" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-hidden="true">
  <path d="M4.42 116.99 0 246.56c-.14 4.06 4.71 5.71 6.68 2.27L138.44 19.68c2-3.46-1.51-7.57-4.79-5.62L26.56 77.85C13.4 85.68 4.99 100.57 4.42 116.99Z" fill="#ffc03a" data-color="1"></path>
  <path d="M314.58 116.99 319 246.56c.14 4.06-4.71 5.71-6.68 2.27L180.56 19.68c-2-3.46 1.51-7.57 4.79-5.62 107.09 63.79c13.16 7.83 21.57 22.72 22.14 39.14Z" fill="#ffc03a" data-color="1"></path>
  <path d="M287.2 277.1H31.88c-5 0-6.72 7.35-2.31 10 111.26 66.27a36.17 36.17 0 0 0 37.41 0L289.5 287.14c.41-2.64 2.71-10-2.3-10Z" fill="#ffc03a" data-color="1"></path>
  <path d="M1223.21 89.68h29.49v45.76q16.27 51.93v123.41h-40.47V168.7q0-19.56-8.52-29.73t-24-10.15q-17.79 0-28.55 14.29T1172.92 183v101.21h-40.09V93.82h34.79q15.88 25.59 52.59 25.59Z" fill="#ffffff" data-color="2"></path>
  <path d="M488.39 89.68q34 0 53 17.88 18.91 51.35v125.3h-35.61q-1.89 29-56.35 29-26.1 0-41.61-14.67t-15.5-39.5q0-45.52 56-56.06v-8.65q0-34.25-31.39-34.24-15.1 0-24.77 8.28t-9.64 21.82h-39q1.14-28.21 21.18-47t52.2-18.88Zm31.39 115.51v-6.77h-45.76v9.78q-24.21 4.9-24.21 24.08 0 9.8 6.81 15.62 19.29 5.83 34.8-18.44 9.08-12.78 9.07-30.12" fill="#ffffff" data-color="2"></path>
  <path d="M826.5 93.82h40.09v190.39H826.52" fill="#ffffff" data-color="2"></path>
  <path d="M699.24 89.68h39.33v64.29q28.6 25 28.22 70.73t-25.38 71.09-24.95 28.22-63.91 28.21q-20.44 0-36.31-7.71t-24.2-20.13V365.1h-40.48V93.82h35.18q12.64 27.1 27.1 27.1q21.18-31.23 63.17-31.24Zm-7.2 37.63q-21.56 0-38.19 16.55-16.26 16.18-16.27 43.65v2.26q.76 27.84 16.27 44.4 16.64 16.54 37.82 16.55 24.2 0 39.33-17.31 15.9-17.68 15.89-44.4 0-27.45-15.32-44.5-16.53-17.12-39.53-17.12Z" fill="#ffffff" data-color="2"></path>
  <path d="M993.5 89.68h41.2v63.53q12.66-27.1h35.17v190.39h-35.17q-2.66-26.72q-21.56 30.86-63.53 30.85-39 0-63.91-28.21-25-28.59-25-71.12t25-70.73q24.91-28.59 63.91-28.62Zm7.18 37.63q-24.21 0-39.33 17.12t-15.13 44.58q0 27.48 27.48 44.59t39.33 17.12q22.32 0 38.21-16.18 16.26-16.17 16.26-44v-3q0-27.46-16.26-43.65-16.7-16.57-38.25-16.58Z" fill="#ffffff" data-color="2"></path>
  <path fill="#ffc03a" d="M820.81 14.71V29.41h126.14V14.71H820.81Z" data-color="1"></path>
</svg>

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

      <div className="md:px-32 mt-20 sm:mx-5">
        <p className="italic text-green font-inter font-bold text-subheadline-3">
          Green Vertex Project
        </p>
        <h1 className="text-white font-inter font-black md:text-headline-2 sm:text-subheadline-3 md:w-2/3 sm:my-5">
          Transforming Fulfillment with Digital Twin Simulation
        </h1>
      </div>
      <div className="md:px-32 md:mt-10 sm:mx-5">
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
    </>
  );
}

export default Casestudy;
