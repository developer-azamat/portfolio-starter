import React, { useState } from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Soon from "./pages/Soon";
import Thanks from "./pages/Thanks";

const App = () => {
  const [isSubmit, setSubmit] = useState(false);
  return (
    <BrowserRouter>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Nav />
        <Header />
        <Thanks isSubmit={isSubmit} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact setSubmit={setSubmit} />} />
          <Route path="*" element={<Soon />} />
        </Routes>
        {/* <div className='h-[4000px]'></div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
