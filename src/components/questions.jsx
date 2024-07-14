import React, { useEffect } from "react";
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Questions() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    return(
        <>
          <div className="relative w-auto flex flex-col justify-center items-center question_tab md:gap-0 gap-5 mb-48 md:mt-12 px-10" id="down">
            <div className="absolute md:blur-3xl blur-2xl bg-emerald-400 md:w-80 w-20 md:h-96 h-48 top-1/2 rounded-full z-0"></div>
            <div className="absolute md:blur-3xl blur-2xl bg-lime-400 md:w-64 w-20 md:h-64 h-48 left-1/2 rounded-full z-0"></div>
            <div className="absolute md:blur-3xl blur-2xl bg-green md:w-64 w-20 md:h-64 h-48 right-1/2 rounded-full z-0"></div>
            <h1 className="relative text-white font-inter font-black md:text-headline-1 text-subheadline-3">Dear Business Leader…</h1>
            <div className="relative md:right-64 md:top-14 rounded-md bg-card border-2 border-zinc-500 text-white font-semibold p-3 hover:rotate-6 duration-150 hover:scale-110"><p>Are Inefficiencies Eating Up Your Profits?</p></div>
            <div className="relative md:left-64 rounded-md bg-card border-2 border-zinc-500 text-white font-semibold p-3 hover:rotate-6 duration-150 hover:scale-110" ><p>Tired of Double-Guessing Your Decisions?</p></div>
            <div className="relative rounded-md md:top-10 bg-card border-2 border-zinc-500 text-white font-semibold p-3 hover:rotate-6 duration-150 hover:scale-110" ><p>Looking for an Effortless Way to Drive Real Results?</p></div>
          </div>
        </>
    )
}

export default Questions;