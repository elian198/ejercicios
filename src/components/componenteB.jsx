import React from 'react';
import PropTypes from 'prop-types';
import { ComponenteA } from './componenteA';

const ComponenteB = ( {props} ) => {
    return (
        <div>
            <p> nombre = {props.nombre}</p>
            <p> apellido = {props.apellido}</p>
            <p> email = {props.email}</p>
            <p> estado = {props.conectado ? 'conectado en linea' : 'contacto desconectado'}</p>
        </div>
    );
};


ComponenteB.propTypes = {
props : PropTypes.instanceOf(ComponenteA)
};


export default ComponenteB;



