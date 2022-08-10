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
      <h1 align='center'>Desafio Bridge | Desenvolvimento Web Full Stack</h1>
      <p align='justify'>Este aplicativo calcula o número de inteiros positivos n menores que k, para os quais n e n + 1 têm o mesmo número de divisores positivos.</p>
      <hr />
      <p>Insira um número inteiro entre 0 e 50000</p>
      <AddCalculo handleCalculoAddition={handleCalculoAddition} />
      <ListaCalculo lista_calculo={lista_calculo} />
    </div>
  );
}

export default App;
