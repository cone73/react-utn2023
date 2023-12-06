// import logo from './logo.svg';
import Titulo from './componentes/Tituloitulo';
import Ejemplo from './componentes/Ejemplojemplo';
import Producto from './componentes/Producto';
import './App.css';

function App() {
  return (
    <>
      {/* La importamos usandola como una etiqueta de cierre */}
      <Titulo />
      <Producto />
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

