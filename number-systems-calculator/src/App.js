// React
// App.js
import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [base, setBase] = useState(10);
  const [result, setResult] = useState({
    binary: '-',
    octal: '-',
    decimal: '-',
    hexadecimal: '-',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://localhost:8000/convert/${number}/${base}/`);
    setResult(response.data);
  };

  return (
    <div className="app">
      <h1>Number Systems Calculator</h1>
      <form onSubmit={handleSubmit}>
        Converting from
        <select className="dropdown-field" value={base} onChange={(e) => setBase(e.target.value)}>
          <option value="2">Binary</option>
          <option value="8">Octal</option>
          <option value="10">Decimal</option>
          <option value="16">Hexadecimal</option>
        </select>:
        <input className="input-field" type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className="button" type="submit">Convert</button>
      </form>
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th>Binary</th>
              <th>Octal</th>
              <th>Decimal</th>
              <th>Hexadecimal</th>
            </tr>
            <tr>
              <td>{result.binary}</td>
              <td>{result.octal}</td>
              <td>{result.decimal}</td>
              <td>{result.hexadecimal}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer">
        <p>Created by <a href="https://github.com/tahmid-chowdhury">Tahmid Chowdhury</a></p>
      </div>
    </div>
  );
}

export default App;