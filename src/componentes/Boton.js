import React from 'react';
import '../hojas-de-estilo/Boton.css';

const Boton = ({ children }) => {
    return (
        <div className='boton-contenedor'>
            { children }
        </div>
    );
}

export default Boton;
