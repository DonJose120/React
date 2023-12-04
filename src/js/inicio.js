import mia from "../img/mia.png";
import mei from "../img/mei+.jpg"

function Inicio (){
  return (
    <div className="containes">
    <nav className="navbar">
      <div className="nav-left">
        <a href="#" className="brand">
          <img src={mia} alt="logo"></img>
        </a>
        <ul className="menu">
        <li className="navitem"><a href="Contacto">Contacto</a></li>
        <li className="navitem"><a href="informacion">Informacion</a></li>
        <li className="navitem"><a href="SobreNosotros">SobreNosotros</a></li>
        <li className="naviteme"><a href="Registrate">Registrate</a></li>
        <li className="navitema"><a href="Login">Iniciar Sesion</a></li>
        </ul>
      </div>
    </nav>
    <header className="header">
    <div className="redopacity">
        <h1>Desarrollo de Software</h1>
     
        <p className="desc">
            Esta es una empresa para solucionar <br/>
            Problemas de virus
        </p>
      

        <p className="conocercomo">Conoce como hacemos esto!</p>
        <a href="#procesoseleccion" className="arrow">
            <i className="fas fa-arrow-down"></i>
        </a>
    </div>
</header>
<div className="title-section" id="procesoseleccion">
    <h1>Proceso de Seleccion</h1>

</div>
<section className="seleccion">
    <article className="seleccion-item">
        <img src={mei} alt="icon" />
        <h3>Rigurosas Caracteristicas</h3>
        <p>Nuestras manzanas deben tener
            muchos aspectos satisfactorios <br></br>
            para cumplir con tus espectativas
        </p> 
    </article>
    <article className="seleccion-item">
        <img src={mei} alt="icon" />
        <h3>Rigurosas Caracteristicas</h3>
        <p>Nuestras manzanas deben tener
            muchos aspectos satisfactorios <br></br>
            para cumplir con tus espectativas
        </p>
    </article>
    <article className="seleccion-item">
        <img src={mei} alt="icon" />
        <h3>Rigurosas Caracteristicas</h3>
        <p>Nuestras manzanas deben tener
            muchos aspectos satisfactorios <br></br>
            para cumplir con tus espectativas
        </p>
    </article>
</section>
<div className="title-section">
    <h1>Produccion</h1>

</div>
    <section className="produccion">
        <article className="produccion-item">
            <img src={mei} alt="manzanas" />
            <p>
                Nuestras manzanas deben tener <br/>
                muchos aspectos satisfactorios para cumplir con <br/>
                tus espectativas.
            </p>
            <a href="SobreNosotros">Ver como se hace</a>
        </article>
        <article className="produccion-item">
            <img src={mei} alt="manzanas" />
            <p>
                Nuestras manzanas deben tener <br/>
                muchos aspectos satisfactorios para cumplir con <br/>
                tus espectativas.
            </p>
            <a href="SobreNosotros">Ver como se hace</a>
        </article>
        <article className="produccion-item">
            <img src={mei} alt="manzanas" />
            <p>
                Nuestras manzanas deben tener <br/>
                muchos aspectos satisfactorios para cumplir con <br/> 
                tus espectativas.
            </p>
            <a href="SobreNosotros">Ver como se hace</a>
        </article>
    </section>
    <div className="title-section">
       
       
    </div>

    </div>
  )
}

export default Inicio;
