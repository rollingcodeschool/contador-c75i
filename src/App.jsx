import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";

function App() {
  // aqui agregamos la logica del componente

  return (
    // aqui puedo agregar un poquito mas de logica
    <section className="container my-4">
      <h1 className="text-center display-3">
        {/* aqui agrego todo el maquetado del componente */}
        Contador
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        voluptate totam natus eum <br/> iste illo excepturi tempora placeat nesciunt
        eos?
      </p>
      <TituloSecundario></TituloSecundario>
      {/* <TituloSecundario/> */}
    </section>
  );
}

export default App;
