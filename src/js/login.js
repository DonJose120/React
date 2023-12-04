import React from "react";
import mia from "../img/mia.png";
function Login (){
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
          <li className="navitem"><a href="SobreNosotros">SobreNosotros</a></li>

      

          </ul>
        </div>
      </nav>
      <div className="container">
  <div className="form">
    <h2>Iniciar Sesion</h2>
<label for="correo">Correo:</label>
<input type="email" name="correo" id="correo" placeholder="username@gmail.com"></input>

<label for="contraseña">Contraseña:</label>
<input type="password" name="contraseña" id="contraseña" placeholder="*********"></input>

<button type="submit" class="Bottom" >Iniciar</button>
<p>No tienes cuenta? <a href="Registrate">  Registrate</a> </p>

  </div>
</div>
    </div>

  );
};

export default Login;