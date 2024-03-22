import React, { useState } from 'react';
import InputMain from '../../UI/Input/InputMain';
import '../../Global/ModalCotizar/modaCotizar.css'
export function ModalGamaBaja(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <h2>{props.title}</h2>
    <div className="modal">
      <h4>Estado Físico General:</h4>
      <InputMain type="text" name="" id="" label='Igrese el nombre/marca del dispositivo' placeholder={'Ingresar'} />
       <div className='modal-container'>
        
      {props.options.map(option => (
        <div key={option}>
          <InputMain className="radio-opton" type="radio" id={option} name="options" value={option} checked={selectedOption === option} onChange={() => handleRadioChange(option)} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>   
      <button onClick={() => props.onClose(selectedOption)}>Siguiente</button>
    </div>
  
    </>

  );
}

 
