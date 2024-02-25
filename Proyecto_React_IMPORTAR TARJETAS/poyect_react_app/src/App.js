import logo from './logo.svg';
import './App.css';

import Titulo, { Tarjetas } from './componentes/Titulo.js';
import Card from './componentes/imagenes/Card.jsx';

function App() {
  return (
    <div className="App">
      
      <p><img src={logo} className="App-logo" alt="logo" width='300px' /></p>
      
      <h1> <Titulo /> </h1>   {/*Inserro en esta etiqueta, el link que importe de mi componente*/}
      <h2><Tarjetas/></h2> {/* Importo la tarjeta del componente "Tarjetas" */}
      <h3 className='cubo-tarjeta'><Card/></h3> {/*Se importa el componente card el cual es el que tiene las tarjetas*/}
      
    </div>
  );
}


export default App;
