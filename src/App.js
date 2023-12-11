// import logo from './logo.svg';
import Titulo from './componentes/Titulo';
import Ejemplo from './componentes/Ejemplo';
import Bucle from './componentes/Bucle';
import GrillaProductos from './componentes/GrillaProductos';
import './App.css';

function App() {
  return (
    <>
      {/* La importamos usandola como una etiqueta de cierre */}
      <Titulo
        titulo="Hola mundo"
        subtitulo="Cómo vas?"
      />
      <GrillaProductos />
      <Bucle />
      {/* Le pasamos las propiedades
      como si fueran atributos
      de HTML */}
      <Titulo
        titulo="Segunda sección"
        subtitulo="de mi sitio web!"
      />
      <Ejemplo />
      {/* <img src={logo} className="App-logo" alt="logo" />
      Si el archivo está en /public la ruta se tiene que escribir como si nosotros
      estuvieramos en /public también
      */}
      <img src="imagenes/gatito.avif" alt="Gatito" />
    </>
  );
}

export default App;