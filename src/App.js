import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import '././css/Registre.css'
import '././css/Inicio.css'
import Inicio from "./js/inicio"
import Informacion from "./js/informacion"
import Contacto from "./js/Contactos"
import Login from "./js/login";
import Registrate from "./js/Registrate";
import SobreNosotros from "./js/SobreNosotros"

import './resect.css';




function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="informacion" element={ <Informacion /> } />
        <Route path="Contacto" element={ <Contacto /> } />
        <Route path="Registrate" element={ <Registrate /> } />
        <Route path="SobreNosotros" element={ <SobreNosotros /> } />
        <Route path="Login" element={ <Login /> } />
          <Route path="Inicio" element={ <Inicio /> } />
      </Routes>
  
      </Router>
   

  );
}

export default App;
