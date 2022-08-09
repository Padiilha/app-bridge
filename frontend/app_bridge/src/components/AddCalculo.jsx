import React, { useState } from 'react';
import Button from './Button';

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
        <>
            <input
                onChange={handleInputChange}
                value={inputData}
                type="int"
            />
            <div>
                <Button onClick={handleAddCalculoClick}>Adicionar</Button>
            </div>
        </>
    );
}
 
export default AddCalculo;