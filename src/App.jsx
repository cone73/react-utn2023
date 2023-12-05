// import logo from './logo.svg';
import Titulo from './componentes/Titulos';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo!!!</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> 
        si el archivo esta en /public la ryta se tiene que escribir 
        como se estuveramos en /public tambien */}
        <img src='imagenes/imagen.1.jpg' alt='gatitos' />
    </div>
  );
}

export default App;
