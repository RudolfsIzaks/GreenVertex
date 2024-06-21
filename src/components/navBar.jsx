import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';
import vertex from '../assets/vertexLogo.png';

function NavBar() {
    return(
        <>
          <div className="absolute top-0 left-0 w-full">
          <div className="flex justify-between px-20 my-5 items-center">
            <div>
                <img src={vertex} width={150} alt="Vertex Logo" />
            </div>
            <div>
                <ul className="md:flex gap-8 font-inter font-bold text-md text-white">
                    <li>
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
                </ul>
            </div>
          </div>
          <hr className="hr_grad"/>
          </div>
        </>
    )
}

export default NavBar;