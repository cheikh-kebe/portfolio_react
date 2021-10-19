import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <ul>
          <li>
            <Link to="/projects">Projets</Link>
          </li>
          <li>
            <Link to="/skills">Compétences</Link>
          </li>
          <li>
            <Link to="/testimonials">Recommendations</Link>
          </li>
          <li>
            <Link to="/contact">Contactons-nous!</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
