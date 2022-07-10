import React , { useState,useEffect } from 'react';


const ClockF = () => {

    const state ={
        nombre: "Martin",
        apellido: "San Jose",
        hora : new Date()
    }
    const [hora, sethora] = useState(state.hora);
    const [edad, setedad] = useState(0);
   
    useEffect(() => {
        const intervalID = setInterval(() => {
            setedad(edad+1);
            sethora(new Date());
        }, 1000);
        return () =>{
            clearInterval(intervalID);
            
        }
      },);

    return (
        <div>
           <h4> Hora actual : { hora.toLocaleTimeString() } </h4>
           <h3>  Nombre { state.nombre } { state.apellido }</h3>
           <h4> Edad: { edad}</h4>
        </div>
    );
}


export default ClockF;

