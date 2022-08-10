import React from 'react';
import '../hojas-de-estilo/Boton.css';

const Boton = ({ children, manejarClic }) => {
    
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
      };

    return (
        <div 
        className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trimEnd()}
        // classNanme={}
        onClick={() => manejarClic(children)}>
            { children }
        </div>
    );
}

export default Boton;
