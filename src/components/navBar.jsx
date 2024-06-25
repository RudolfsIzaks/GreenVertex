import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import '../index.css';
import vertex from '../assets/vertexLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const navRef = useRef();

    const showNavBar = () => {
      navRef.current.classList.toggle('responsive_nav');
    }

    return(
        <>
          <div className="absolute top-0 left-0 w-full">
          <div className="flex justify-between md:px-20 px-5 md:my-5 my-2 items-center">
            <div>
                <img src={vertex} className="md:w-32 w-24" alt="Vertex Logo" />
            </div>
            <div ref={navRef} className="navbar">
                <ul className="md:flex gap-8 font-inter font-bold text-md text-white">
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
                </ul>
                <button className="md:hidden md:opacity-0 nav_close text-3xl text-white" onClick={showNavBar}>
                  <FontAwesomeIcon
                     icon={faTimes}
                  />
                </button>
            </div>
            <button className="md:hidden md:opacity-0" onClick={showNavBar}>
                  <FontAwesomeIcon
                     icon={faBars}
                      className="text-white text-2xl"
                  />
                </button>
          </div>
          <hr className="hr_grad"/>
          </div>
        </>
    )
}

export default NavBar;