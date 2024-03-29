import React, { useState } from 'react';
import './App.css';
import { getText } from 'number-to-text-vietnamese';

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const inputNumber = parseInt(event.target.value);
    setNumber(inputNumber);
    const convertedText = getText(inputNumber);
    setText(convertedText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="number"
          value={number}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <p>
          Number {number} 
        </p>
        <p>
        in Vietnamese text: {text}
        </p>
      </header>
    </div>
  );
}

export default App;
