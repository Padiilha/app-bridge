import React from 'react';
import './Calculo.css';

const Calculo = ({calculo}) => {
    return (
        <div className='container_calc'>
            <div className='elemento'>
                Entrada: {calculo.calc_entrada}
            </div>
            <div className='elemento'>
                Resultado: {calculo.calc_resultado}
            </div>
            <div className='elemento'>
                Tempo de Execução: {calculo.calc_tempo_exec} ms
            </div>
        </div>
    );
}
 
export default Calculo;