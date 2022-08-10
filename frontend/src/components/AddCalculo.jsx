import React, { useState } from 'react';
import Button from './Button';
import api from '../api.js';
import './AddCalculo.css';

const AddCalculo = ({handleCalculoAddition}) => {
    const backend = (entrada) => {
        api
        .get("/bridge?k="+entrada)
        .then((response) => {
            handleCalculoAddition(inputData, response.data.resultado, response.data.tempoExec)
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro " + err);
        })
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
                type='number'
                max='50000'
                min='0'
                className='add-calculo-input'
            />
            <div className='add-calculo-button-container'>
                <Button onClick={handleAddCalculoClick}>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddCalculo;