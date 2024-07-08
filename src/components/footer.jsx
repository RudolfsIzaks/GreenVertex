import React from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import vertex from "../assets/vertexLogo.png";

function Footer() {
  return (
    <>
      <div className="flex sm:flex-col items-center justify-between md:h-[40vh] md:px-24 bg-background mt-32">
        <div>
          <img src={vertex} alt="vertex logo" className="md:w-64 sm:w-48" />
        </div>
        <div>
          <ul className="flex sm:flex-wrap sm:justify-center sm:my-5 items-center gap-8 font-inter font-bold text-sm text-white">
            <li className="">
              <NavLink to="https://www.greenvertex.dev/about" className="bg-black hover:bg-green text-white duration-200 rounded-full px-8 py-2">
                CLIENTS
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.greenvertex.dev/blog" className="bg-black hover:bg-green text-white duration-200 rounded-full px-8 py-2">
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="/qualify" className="bg-black hover:bg-green text-white duration-200 rounded-full px-8 py-2">
                QUALIFY
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
