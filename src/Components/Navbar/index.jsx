import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <ul>
      <li><Link to='/about'>À Propos</Link></li>
      <li><Link to='/projects'>Projets</Link></li>
      <li><Link to='/skills'>Compétences</Link></li>
      <li><Link to='/testimonials'>Recommendations</Link></li>
      <li><Link to='/contact'>Contactons-nous!</Link></li>
      </ul>
    </div>
  );
};
