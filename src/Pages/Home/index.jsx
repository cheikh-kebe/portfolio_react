import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import Typewriter from "typewriter-effect";

export const Home = () => {
  const container = useRef("");

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Svg/lottiesvg.json"),
    });
  }, []);
  return (
    <section id="about">
      <div className="xl:h-screen mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Bienvenue sur mon portfolio.
            <br className="mb-8 lg:inline-block" />
          </h1>
          <p className=" xl:text-xl md:text-md sm:text-sm mb-8 leading-relaxed">
            Salut je m'appelle Cheikh Kebe et j'ai 34 ans. Tout juste sorti de la
            formation 
            <br /><a className="text-2xl text-green-300 underline" href="https://www.thehackingproject.org/?locale=fr">«The Hacking Project»</a>, j'ai le désir de continuer ma
            reconversion professionnelle. J’aspire, à débuter ma nouvelle carrière de Développeur Web 
              <Typewriter
                options={{
                  strings: ["Ambitieux!", "Stimulants!", "Fun!"],
                  autoStart: true,
                  deleteSpeed: 100,
                  loop: true,
                  wrapperClassName: 'xl:text-5xl md:text-2xl sm:text-xl'
                }}
              />
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="ml:2 inline-flex text-white bg-green-500 border-0 lg:py-2 lg:px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Travaillons ensemble!
            </Link>
            <Link
              to="/projects"
              exact="true"
              className="ml-2 inline-flex text-gray-400 bg-gray-800 border-0 lg:py-2 lg:px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Voir mes projets
            </Link>
          </div>
        </div>
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 sm:"
          ref={container}
        ></div>
      </div>
    </section>
  );
};
