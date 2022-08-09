import React, { useState } from 'react';
import Button from './Button';
import './AddCalculo.css';

const AddCalculo = ({handleCalculoAddition}) => {
    const backend = () => {};

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