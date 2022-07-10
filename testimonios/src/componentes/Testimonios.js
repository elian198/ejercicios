import React from 'react';
import './hojas-de-estilos/testimonios.css';
function Testimonios(props){
    return(
     <div className='contenedor-testimonio'>
        <img className='imagen'src={require(`../imagenes/${props.imagen}.jpg`)}/>
    <div className='contenedor-texto'>
        <h2 className='texto-testimonio'>{props.titulo}</h2>
        <p className='descripcion-testimonio'>{props.descripcion}</p>
    </div>
     </div>
    );
}
export default Testimonios;