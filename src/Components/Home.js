import React, { useState } from "react";
import EditorFinal from "./Editor/EditorFinal";
import "./Homestyle.css";
import Chatbot from "./Chatbot/Chatbot";
import Projects from "./Projects/Projects";
import Roadmap from "./Roadmap/Roadmap";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div className="home-nav">
        <h2>ALT-F4</h2>
        <div className="right">
          <Link exact to="/EditorFinal" className="EditorLink">
            Editor
          </Link>
          <Link exact to="/Roadmap" className="EditorLink">
            Roadmap
          </Link>
          <Link exact to="/Projects" className="EditorLink">
            Projects
          </Link>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Home;
