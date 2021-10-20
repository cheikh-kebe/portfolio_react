import React from "react";
import { Navbar } from "../Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Pages
import { Contact } from "../Pages/Contact";
import { Projects } from "../Pages/Projects";
import { Skills } from "../Pages/Skills";
import { Testimonials } from "../Pages/Testimonials";
import { Home } from "../Pages/Home";
//Styles

export const App = () => {
  return (
    <>
      <main className="h-screen box-content text-gray-400 bg-gray-900 body-font">
        <div className="container"></div>
        <Router>
          <Link to="/" exact>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Cheikh Kebe
            </h1>
          </Link>
          <Navbar />
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/skills" render={() => <Skills />} />
            <Route path="/testimonials" render={() => <Testimonials />} />
            <Route path="/contact" render={() => <Contact />} />
          </Switch>
        </Router>
      </main>
    </>
  );
};
