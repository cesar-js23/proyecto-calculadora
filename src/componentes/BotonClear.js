import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = ({ children, manejarClear }) => {
    return (
        <div className='boton-clear' onClick={manejarClear}>
            { children }
        </div>
    );
}

export default BotonClear;
