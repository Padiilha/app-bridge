import React from 'react';
import './Calculo.css';

const Calculo = ({calculo}) => {
    return (
        <div className='container_calc'>
            entrada: {calculo.calc_entrada} resultado: {calculo.calc_resultado} tempo de execução: {calculo.calc_tempo_exec}
        </div>
    );
}
 
export default Calculo;