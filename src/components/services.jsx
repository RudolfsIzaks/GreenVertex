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
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center text-center md:w-2/3">
                    <p className="text-subheadline-4 font-inter text-green">
                        Experience risk-free testing across all facets of your business…
                    </p>
                    <h1 className="font-inter text-headline-2 font-black text-white">
                        Simulate Any Process: From Production to Customer Service to Future Strategies
                    </h1>
                    <p className="font-inter text-subheadline-4 text-white font-light mt-2 md:w-2/3">
                        With Digital Twin Simulation, you can run simulations for nearly any aspect of your business. Whether it's planning a future campaign, optimizing a complex process, or testing a new strategy.{" "}
                        <i className="font-inter font-bold text-green">If you can map it out, you can simulate it.</i>
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center w-full md:mt-32">
                    <div className="py-20 relative w-full flex-col flex justify-center items-center">
                        <div className="absolute w-64 h-64 bg-green rounded-full z-0 blur-2xl animate-pulse" data-aos="flip-right"></div>
                        <div className="z-10 relative w-64 h-64 bg-background rounded-full flex justify-center items-center" data-aos="flip-right">
                            <img src={vertex} alt="logo vertex" className="md:w-48" />
                        </div>
                        <div className="md:absolute md:top-0" data-aos="flip-down" data-aos-delay="1000">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4 relative bottom-12"
                                onMouseEnter={() => handleMouseEnter(0)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Production Line Efficiency</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 relative bottom-12 ${
                                    hoveredCard === 0 ? "opacity-100 mt-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Test changes to improve throughput.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:top-24 left_align" data-aos="flip-down" data-aos-delay="1000">
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
                                    hoveredCard === 1 ? "opacity-100 mt-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Optimize routing and inventory.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-12 left_align_1" data-aos="flip-down" data-aos-delay="1000">
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
                                    hoveredCard === 2 ? "opacity-100 mt-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Maximize the use of <br /> labor and equipment.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-0" data-aos="flip-down" data-aos-delay="1000">
                            <div
                                className="flex items-center gap-3 bg-card border border-stone-700 rounded-md py-2 px-4 relative top-16"
                                onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <FontAwesomeIcon icon={faEye} className="text-green" />
                                <p className="text-stone-300">Customer Service</p>
                            </div>
                            <div
                                className={`bg-card border border-stone-700 rounded-md py-2 px-4 overflow-hidden duration-200 relative top-16 ${
                                    hoveredCard === 3 ? "opacity-100 mt-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Enhance service <br /> quality and satisfaction.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:bottom-12 right_align_1" data-aos="flip-down" data-aos-delay="1000">
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
                                    hoveredCard === 4 ? "opacity-100 mt-2" : "opacity-0"
                                }`}
                            >
                                <p className="text-stone-300">Simulate possibilities, <br /> to make success guaranteed.</p>
                            </div>
                        </div>
                        <div className="md:absolute md:top-24 right_align" data-aos="flip-down" data-aos-delay="1000">
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
                                    hoveredCard === 5 ? "opacity-100 mt-2" : "opacity-0"
                                }`}
                            >
                                <p  className="text-stone-300"> Test different strategies to <br /> find the best-performing set-up. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
