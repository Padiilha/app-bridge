import React, { useState } from 'react';
import Button from './Button';
import api from '../api.js';
import './AddCalculo.css';

const AddCalculo = ({handleCalculoAddition}) => {
    const backend = (entrada) => {
        const inicio = Date.now();
        api
        .get("/bridge?k="+entrada)
        .then((response) => {
            handleCalculoAddition(inputData, response.data, tempo_exec)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro " + err);
        })
        const tempo_exec = Date.now() - inicio;
    };

    const [inputData, setInputData] = useState();

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddCalculoClick = () => {
        backend(inputData);
        setInputData("");
    };

    return (
        <div className='add-calculo-container'>
            <input
                onChange={handleInputChange}
                value={inputData}
                type='int'
                className='add-calculo-input'
            />
            <div className='add-calculo-button-container'>
                <Button onClick={handleAddCalculoClick}>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddCalculo;