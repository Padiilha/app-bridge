import React, { useState } from 'react';
import AddCalculo from './components/AddCalculo';
import ListaCalculo from './components/ListaCalculo';
import {v4 as uuidv4} from 'uuid';
import './App.css';

const App = () => {
  const [lista_calculo, setListaCalculo] = useState([]);

  const handleCalculoAddition = (entrada, resultado, tempo_exec) => {
    const novoCalculo = [
      {
        id: uuidv4(),
        calc_entrada: entrada,
        calc_resultado: resultado,
        calc_tempo_exec: tempo_exec
      }, ...lista_calculo
    ];

    setListaCalculo(novoCalculo);
  };

  return (
    <div className='container'>
      <AddCalculo handleCalculoAddition={handleCalculoAddition} />
      <ListaCalculo lista_calculo={lista_calculo} />
    </div>
  );
}

export default App;
