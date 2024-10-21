import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

function ServiceMobile() {
  const [visibleCard, setVisibleCard] = useState(null);

  const handleCardClick = (index) => {
    setVisibleCard(visibleCard === index ? null : index);
  };

  const showInfo = (title, text) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "info",
      confirmButtonText: "Got it!",
      background: '#212121',
      iconColor: '#33AF53',
      confirmButtonColor: '#33AF53',
      color: 'white',
    });
  };

  const services = [
    {
      title: "Production Line Efficiency",
      description: "Test changes to improve throughput.",
      info: "Improve the efficiency of your production line by testing and implementing changes that enhance throughput.",
    },
    {
      title: "Supply Chain Management",
      description: "Optimize routing and inventory.",
      info: "Enhance your supply chain management by optimizing routing and inventory processes.",
    },
    {
      title: "Resource Allocation",
      description: "Maximize the use of labor and equipment.",
      info: "Ensure optimal resource allocation by maximizing the use of labor and equipment.",
    },
    {
      title: "Customer Service",
      description: "Enhance service quality and satisfaction.",
      info: "Boost customer service quality and satisfaction through strategic improvements.",
    },
    {
      title: "Predict Outcomes",
      description: "Simulate possibilities to make success guaranteed.",
      info: "Use simulations to predict outcomes and make informed decisions to guarantee success.",
    },
    {
      title: "Optimize Strategies",
      description:
        "Test different strategies to find the best-performing setup.",
      info: "Optimize your strategies by testing various setups to identify the best performers.",
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:items-center text-center md:w-2/3 tablet:mx-20 tablet:my-10 sm:m-5">
        <p className="text-sm font-inter text-green md:text-center tablet:text-left sm:text-left">
          Experience risk-free testing across all facets of your business…
        </p>
        <h1 className="font-inter md:text-headline-2 text-subheadline-4 font-black text-white my-5 md:text-center text-left">
          Simulate Any Process: From A Mere Idea to Complex Physical Operations
        </h1>
        <p className="font-inter md:text-subheadline-4 text-white font-light my-2 md:w-2/3 md:text-center text-left">
          With Digital Twin Simulation, you can run simulations for nearly any
          aspect of your business. Whether it's planning a future campaign,
          optimizing a complex process, or testing a new strategy.{" "}
          <i className="font-inter font-bold text-green">
            If you can map it out, you can simulate it.
          </i>
        </p>
      </div>
      <div className="m-5 tablet:mx-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative"
            data-aos="flip-down"
            data-aos-delay="200"
          >
            <div
              className="flex items-center justify-between bg-card border border-stone-700 rounded-md py-4 px-4"
              onClick={() => handleCardClick(index)}
            >
              <p className="text-stone-300">{service.title}</p>
              <button onClick={() => showInfo(service.title, service.info)}>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="text-white"
                />
              </button>
            </div>
            <div
              className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 ${
                visibleCard === index
                  ? "opacity-100 my-2 max-h-40"
                  : "opacity-0 max-h-0"
              }`}
            >
              <p className="text-stone-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
 
    </>
  );
}

export default ServiceMobile;
