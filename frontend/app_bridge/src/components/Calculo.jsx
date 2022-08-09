import React from 'react';

const Calculo = ({calculo}) => {
    return (
        <>
            entrada: {calculo.calc_entrada} <br />
            resultado: {calculo.calc_resultado} <br />
            tempo de execução: {calculo.calc_tempo_exec}
        </>
    );
}
 
export default Calculo;