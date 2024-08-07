import React, { useState } from "react";
import '../index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import vertex from '../assets/vertexLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Services() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <>
            <div className="flex flex-col items-center md:mx-auto mx-5">
                <div className="flex flex-col items-center text-center md:w-2/3">
                    <p className="text-subheadline-4 font-inter text-green md:text-center text-left">
                        Experience risk-free testing across all facets of your business…
                    </p>
                    <h1 className="font-inter md:text-headline-2 text-subheadline-4 font-black text-white my-5 md:text-center text-left">
                        Simulate Any Process: From A Mere Idea to Complex Physical Operations
                    </h1>
                    <p className="font-inter md:text-subheadline-4 text-white font-light my-2 md:w-2/3 md:text-center text-left">
                        With Digital Twin Simulation, you can run simulations for nearly any aspect of your business. Whether it's planning a future campaign, optimizing a complex process, or testing a new strategy.{" "}
                        <i className="font-inter font-bold text-green">If you can map it out, you can simulate it.</i>
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center h-screen w-full">
                    <div className="relative w-full md:h-[70vh] flex-col flex justify-center md:items-center items-left">
                        <div className="absolute md:w-64 w-32 md:h-64 h-32 bg-green rounded-full z-0 blur-2xl animate-pulse sm:top-0 sm:my-10" data-aos="flip-right"></div>
                        <div className="z-10 relative md:w-64 md:h-64 w-32 h-32 bg-background rounded-full flex justify-center items-center sm:my-10" data-aos="flip-right">
                            <img src={vertex} alt="logo vertex" className="md:w-48 w-24" />
                        </div>
                        <div className="md:absolute md:top-0 relative" data-aos="flip-down" data-aos-delay="200">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4 relative md:bottom-12"
                                onMouseEnter={() => handleMouseEnter(0)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Production Line Efficiency</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 relative md:bottom-12 ${
                                    hoveredCard === 0 ? "opacity-100 my-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Test changes to improve throughput.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:top-24 left-0 md:left-[23%] relative" data-aos="flip-down" data-aos-delay="200">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4"
                                onMouseEnter={() => handleMouseEnter(1)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Supply Chain Management</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 ${
                                    hoveredCard === 1 ? "opacity-100 my-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Optimize routing and inventory.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-12 left-0 md:left-[25%] relative" data-aos="flip-down" data-aos-delay="200">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4"
                                onMouseEnter={() => handleMouseEnter(2)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Resource Allocation</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 ${
                                    hoveredCard === 2 ? "opacity-100 my-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Maximize the use of <br /> labor and equipment.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-0 relative" data-aos="flip-down" data-aos-delay="200">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4 relative md:top-16"
                                onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Customer Service</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 relative md:top-16 ${
                                    hoveredCard === 3 ? "opacity-100 my-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Enhance service <br /> quality and satisfaction.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-12 right-0 md:right-[25%] relative" data-aos="flip-down" data-aos-delay="200">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4"
                                onMouseEnter={() => handleMouseEnter(4)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Predict Outcomes</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 ${
                                    hoveredCard === 4 ? "opacity-100 my-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Simulate possibilities, <br /> to make success guaranteed.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:top-24 right-0 md:right-[23%] relative" data-aos="flip-down" data-aos-delay="200">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4"
                                onMouseEnter={() => handleMouseEnter(5)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Optimize Strategies</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 ${
                                    hoveredCard === 5 ? "opacity-100 my-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300"> Test different strategies to <br /> find the best-performing set-up. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
