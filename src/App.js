import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Inicio from "./inicio"
import SobreNosotros from "./SobreNosotros"
import Contacto from "./Contactos"
import './resect.css';




function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="SobreNosotros" element={ <SobreNosotros /> } />
        <Route path="Contacto" element={ <Contacto /> } />
      </Routes>
  
      </Router>
   

  );
}

export default App;
