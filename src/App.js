// import logo from './logo.svg';
import Titulo from './componentes/Titulo';
import Ejemplo from './componentes/Ejemplo';
import Producto from './componentes/Producto';
import './App.css';

function App() {
  return (
    <>
      {/* La importamos usandola como una etiqueta de cierre */}
      <Titulo />
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

