import React from "react";
import { Navbar } from "../Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Projects } from "../Pages/Projects";
import { Skills } from '../Pages/Skills';
import { Testimonials } from '../Pages/Testimonials'
export const App = () => {
  return (
    <main>
      <h1>Portfolio</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/skills" render={() => <Skills />} />
          <Route path="/testimonials" render={() => <Testimonials />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
      </Router>
    </main>
  );
};
