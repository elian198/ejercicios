
import './App.css';
import Testimonios from './componentes/Testimonios';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de nuestros alumnos</h1>
         <Testimonios
         imagen = 'jamon'
         titulo = 'jamon'
         descripcion = 'Jamon de primera'
         />
         <Testimonios
         imagen = 'matambre'
         titulo = 'Matambre'
         descripcion = 'El mejor matambre'
         />
         <Testimonios
         imagen = 'jamonCrudo'
         titulo = 'jamon crudo'
         descripcion = 'El mejor crudo'
         />
    </div>
  </div>);
}

export default App;
