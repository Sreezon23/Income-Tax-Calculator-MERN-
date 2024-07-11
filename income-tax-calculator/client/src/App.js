import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = async () => {
    try {
      const response = await fetch('http://localhost:5000/calculate-tax', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ income: parseFloat(income) }),
      });

      const data = await response.json();
      setTax(data.tax);
    } catch (error) {
      console.error('Error calculating tax:', error);
    }
  };

  return (
    <div className="App">
      <h1>Income Tax Calculator</h1>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Enter your income"
      />
      <button onClick={calculateTax}>Calculate Tax</button>
      {tax !== null && (
        <div>
          <h2>Your Tax: ${tax.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
