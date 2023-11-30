

function Inicio (){
  return (

    <div className="containes">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#" className="brand">

          </a>
          <ul className="menu">
          <li className="navitem"><a href="/">Inicio</a></li>
          <li className="navitem"><a href="SobreNosotros">SobreNosotros</a></li>
          <li className="navitem"><a href="Contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
  <div className="form">
    <h2>Iniciar Sesion</h2>
<label for="correo">Correo:</label>
<input type="correo" name="correo" id="correo" placeholder="username@gmail.com"></input>

<label for="contraseña">Contraseña:</label>
<input type="password" name="contraseña" id="contraseña" placeholder="*********"></input>

<button type="submit" class="Bottom" >Iniciar</button>
  </div>
</div>
    </div>
    
    
  );
};

export default Inicio;
