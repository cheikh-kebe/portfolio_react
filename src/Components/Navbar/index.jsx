import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";

export const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <li className="mr-5 hover:text-white">
            <Link to="/projects">Projets</Link>
          </li>
          <li className="mr-5 hover:text-white">
            <Link to="/skills">Compétences</Link>
          </li>
          <li className="mr-5 hover:text-white">
            <Link to="/testimonials">Recommendations</Link>
          </li>
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          <li className="mr-5 hover:text-white">
            <Link to="/contact">Contactons-nous!</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
