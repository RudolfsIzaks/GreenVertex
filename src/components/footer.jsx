import React from "react";
import '../index.css';
import { NavLink } from "react-router-dom";
import vertex from '../assets/vertexLogo.png';

function Footer() {

    return(
        <>
          <div className="flex items-center justify-between h-[40vh] md:px-24 bg-black mt-32">
            <div>
                <img src={vertex} alt="vertex logo" className="md:w-64" />
            </div>
            <div>
            <ul className="md:flex items-center gap-8 font-inter font-bold text-sm text-white">
                    <li className="">
                        <NavLink to="/clients" className="hover:text-green duration-200">
                          CLIENTS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-green duration-200">
                          ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className="hover:text-green duration-200">
                          BLOG
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-green duration-200">
                          CONTACT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/qualify" className="py-2 px-8 bg-green text-white mt-5 rounded-md text-lg font-inter font-semibold border border-green hover:bg-transparent hover:scale-110 hover:text-green duration-200">
                         Qualify & Boost Your Effeciency
                        </NavLink>
                    </li>
                </ul>
            </div>
          </div>
        </>
    )
}

export default Footer;