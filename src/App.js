import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import News from "../src/components/pages/News";
import Services from "../src/components/pages/Services";
import Schools from "../src/components/pages/Schools";
import Contact from "../src/components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
