import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Footer, Navbar } from './Containers';
import {Home, About, Gallery, Contact, NoPage, Health} from "./Pages"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hse" element={<Health />} />
      <Route path="/*" element={<NoPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
