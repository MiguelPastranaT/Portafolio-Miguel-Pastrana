import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import UnderConstruction from "./pages/UnderConstruction";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;