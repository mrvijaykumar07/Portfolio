import React from "react";
import "./index.css";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skillssection from "./Components/Skillssection";


const App = () => {
  return (
    <>
  <Router>
      <Header />

      <Routes>

      <Route path="/resume" element={<Resume/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/skill" element={<Skillssection/>} />
      <Route path="/contact" element={<About/>} />

      <Route path="/" element={<Main />} />
       
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
