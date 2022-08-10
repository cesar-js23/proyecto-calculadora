import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = ({ children }) => {
    return (
        <div className='boton-clear'>
            { children }
        </div>
    );
}

export default BotonClear;
