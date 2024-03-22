import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectDetailPage from "./ProjectDetailPage";

import "./style/App.css"; // Import CSS file for styling

function App() {
  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([
    {
      name: "LinkedIn",
      label: "LinkedIn ",
      link: "https://www.linkedin.com/in/jacob-m-livingston/",
    },
    { name: "ItchIo", label: "Itch.io", link: "https://jakeliv.itch.io" },
    { name: "Github", label: "Github", link: "https://github.com/jacobliv" },
  ]);

  useEffect(() => {
    const footerHeight = document.querySelector(".footer").offsetHeight;
    const app = document.querySelector(".app");
    app.style.paddingBottom = `${footerHeight}px`;
  }, []);
  // Create a context for the projectAssets folder
  const projectAssetsContext = require.context(
    "../public/projectAssets",
    true,
    /\.(png|jpe?g|svg)$/
  );

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const projectsWithImagesAndMethod = data.map((project) => {
          // Get the safe name of the project
          const safeName = project.name.replace(/\s/g, "");

          // Get all images for this project
          // const images = projectAssetsContext
          //   .keys()
          //   .filter((path) => path.includes(`/${safeName}/`))
          //   .map((path) => projectAssetsContext(path));

          // Return the project with the images and the getSafeName method
          return {
            ...project,
            getSafeName: function () {
              return this.name.replace(/\s/g, "");
            },
          };
        });
        // projectsWithImagesAndMethod.forEach(project => {
        //   console.log(project);
        // });
        projectsWithImagesAndMethod.pop();

        setProjects(projectsWithImagesAndMethod);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header projects={projects} />
        <Routes>
          {/* Pass the JSON data as props to the child components */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact socials={socials} />} />{" "}
          {projects.map((project) => (
            <Route
              key={project.name.replace(/\s/g, "")}
              path={`/projects/${project.getSafeName()}`}
              element={<ProjectDetailPage project={project} />}
            />
          ))}
        </Routes>
        <Footer socials={socials} />
      </div>
    </Router>
  );
}
<Routes></Routes>;
export default App;
