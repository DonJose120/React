import React from "react";
import mia from "../img/mia.png"
 
function Registrate () {
  return (
    <div className="containes">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#" className="brand">
            <img src={mia} alt="logo"></img>
          </a>
          <ul className="menu">
          <li className="navitem"><a href="Inicio">Inicio</a></li>
          <li className="navitem"><a href="Contacto">Contacto</a></li>
          <li className="navitem"><a href="informacion">Informacion</a></li>
      

          </ul>
        </div>
      </nav>
      <div className="container">
  <div className="forma">
    <h2>Registrate</h2>
<label for="Nombre">Nombre:</label>
<input type="Nombre" name="Nombre" id="Nombre" placeholder="Nombre"></input>

<label for="Apellido">Apellido:</label>
<input type="Apellido" name="Apellido" id="Apellido" placeholder="Apellido"></input>

<label for="Correo">Correo:</label>
<input type="Correo" name="Correo" id="Correo" placeholder="Correo"></input>

<label for="contraseña">Contraseña:</label>
<input type="password" name="contraseña" id="contraseña" placeholder="*********"></input>

<label for="contraseña">Confiarma Contraseña:</label>
<input type="password" name="contraseña" id="contraseña" placeholder="*********"></input>

<button type="submit" class="Bottom" >Registrate</button>
<p>Ya tienes tu cuenta! <a href="Login">  Inicia Sesion</a> </p>

  </div>
</div>
    </div>
  )
}
export default Registrate