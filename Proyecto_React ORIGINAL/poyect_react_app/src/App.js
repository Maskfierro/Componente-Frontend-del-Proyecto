import logo from './logo.svg';// Se importa el componente del logo (la imagen que se agrego)
import './App.css';// Se importan el css el cual contiene los estilos, colores y demas que comlementan la pagina

function App() {// 
  return (//retornara lo siguiente
    <div className="App"> {/*Un bloque Div el cual tendra la clase llamada "App" para agregarle estilos en css*/}
      <header className="App-header">{/*Y un bloque header el cual tendra la clase llamada "App-header" para agregarle estilos*/}
        <img src={logo} className="App-logo" alt="logo" />{/*Se inserta la imagen del logo con el nombre que se importo
        y que se mostrara en pantalla*/}
        <p>
          Edit <code>src.App.js</code> and save to reload
        </p>
        <a
          className="App-link" 
          href="https://react.dev/"  /*ahora se abre una etiqueta la cual tendra un link que dirigira a la pagina de React*/
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {/*El link se guardara dentro de esta frase (Learn React) el cual aparecera de otro color ya que es un link*/}
        </a> 
      </header>
    </div>
  );
}

export default App;//Al final se hara el llamado de la funcion 
