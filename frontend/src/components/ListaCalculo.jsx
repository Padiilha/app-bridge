import React from 'react';
import Calculo from './Calculo';

const ListaCalculo = ({lista_calculo}) => {
    return (
        <>
            {lista_calculo.map(calculo => (
                <Calculo calculo={calculo} />
            ))}
        </>
    );
};
 
export default ListaCalculo;