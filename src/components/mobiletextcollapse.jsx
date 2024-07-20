import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import '../index.css';

const MobileTextCollapse = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="md:hidden">
      <h1 className="font-inter font-black text-headline-3 text-white">Meet Green Vertex</h1>
      <p className="font-inter md:font-black text-md text-green mb-5">
        Reducing costs, optimizing complex processes, and increasing profitability is what we do best…
      </p>
      <p className={`text-md font-inter text-gray-100 leading-snug ${isExpanded ? "max-h-full" : "max-h-20 overflow-hidden"}`}>
        Years ago, we at Green Vertex noticed a critical gap: <br></br><br></br> 
        Businesses of all shapes and sizes were falling prey to “invisible” forces in their systems… <br></br> <br></br>
        This meant snail-paced deliveries, cranky customers, and your operations running at half-throttle. <br></br> <br></br>
        Determined to solve this, we turned to do some research… <br></br> <br></br>
        There were swarms of AI, software companies, and a few odd consultants, but nobody that could truly guarantee long-lasting, and effortless results.<br></br><br></br> 
        <i>So, naturally, we sought to craft a new and better route…</i>
      </p>
      <button onClick={toggleExpand} className="text-green mt-3 flex items-center">
        {isExpanded ? "Read Less" : "Read More"}
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="ml-2" />
      </button>
    </div>
  );
};

export default MobileTextCollapse;
