import React, { useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Digital Twin Simulation?",
    answer: "Digital Twin Simulation creates a virtual replica of your operations, allowing you to test and analyze scenarios in a risk-free environment. This technology helps you optimize processes, improve efficiency, and make data-driven decisions."
  },
  {
    question: "How do you guarantee success with Digital Twin Simulation?",
    answer: "Simple. We guarantee success by developing a tailored simulation model based on your specific needs. Our process includes continuous feedback, thorough testing, and seamless integration with your existing systems. If you qualify past our initial screening we guarantee that running simulations will drive an ROI in your business."
  },
  {
    question: "Who is Digital Twin Simulation for?",
    answer: "Digital Twin Simulation is ideal for businesses in these industries. If you’re looking to reduce costs, eliminate inefficiencies, and boost profitability, this solution is for you and we highly recommend you go through our short form to see if you qualify."
  },
  {
    question: "Can the simulation be customized to fit my unique business needs?",
    answer: "Absolutely. Our simulation models are fully customizable to meet your specific business objectives and challenges. We work with you to tailor the simulation to ensure it delivers the maximum benefit for your operations. Feel free to go through our 4-minute screening to see if you qualify!"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <h2 className="text-headline-2 font-black font-inter mb-4 mt-20 md:px-32 sm:mx-5 sm:text-subheadline-2 text-white">Frequently Asked Questions</h2>
    <div className="md:mx-32 p-4">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 border-green pb-4">
            <button
              className="w-full text-left flex justify-between items-center p-4 bg-card rounded-md"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-subheadline-3 font-medium text-white">{faq.question}</span>
              <span className="text-2xl text-white">{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 p-4 bg-card rounded-md text-white font-inter">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQ;
