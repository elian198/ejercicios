import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import './App.css';
import logo from './imagenes/logo.png'

function App() {
  const manejarClic = () =>{
    console.log("click");
  }
  const contadorReniciar = () =>{
    console.log("reniciar");
  }
  return (
    <div className="App">
    <div className="contenedor">
          <img className="imagen-botones" src={logo} alt="logo"></img>
       </div>
        <Contador>
          
        </Contador>
       <div className="contenedor-botones">
         <Boton
         texto = "Clic" 
         esBotonClick = {true}
         manejarClic={manejarClic}
         />
          <Boton
         texto = "Reniciar" 
         esBotonClick = {false}
         manejarClic={contadorReniciar}
         />
       </div>
    </div>
  );
}

export default App;
