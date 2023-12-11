// import logo from './logo.svg';
import Titulo from './componentes/Titulo';
import Ejemplo from './componentes/Ejemplo';
import Producto from './componentes/Producto';
import Bucle from './componentes/Bucle';
import './App.css';

function App() {
  return (
    <>
      {/* La importamos usandola como una etiqueta de cierre */}
      <Titulo titulo="Hola mundo" subtitulo="Como vas?"/>
      <Titulo titulo="Segunda seccion" subtitulo="de mi sitio web!"/>
      <Bucle />
        {/* Le pasamos las propiedades
      como si fueran atributos
      de HTML */}
      <Ejemplo />
      <Producto />
      
      {/* <img src={logo} className="App-logo" alt="logo" />
      Si el archivo está en /public la ruta se tiene que escribir como si nosotros
      estuvieramos en /public también
      */}
      <img src="imagenes/gatito.avif" alt="Gatito" />
    </>
  );
}

export default App;

