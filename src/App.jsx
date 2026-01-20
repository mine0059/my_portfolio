import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import MoreAboutMe from "./components/MoreAboutMe";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import Intro from "./components/Intro";
import Mine from "./components/Mine";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              {/* <Navbar /> */}
              <Intro />
              <Mine />
              <Projects />
              <AboutMe />
              <ContactMe />
            </>
          }
        />
        <Route
          path="/more-about-me"
          element={
            <>
              <Navigation />
              <MoreAboutMe />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navigation />
              <AllProjects />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
