import React, { useState } from 'react';
import './App.css';

function App() {
  const [ika, setIka] = useState('')
  const [heart, setHeart] = useState('')
  const [bmi, setBmi] = useState(0)

  const laske = (e) => {
    e.preventDefault()
    const tulos = (220 - ika) * 0.65 + '-' + (220 - ika) * 0.85
    setBmi(tulos)
  }

  return (
    <div classname='tausta'>
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
        <div>
         <label>Age</label> 
         <input type="number" value={ika} onChange={e => setIka(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits</label>
          <input type="number" value={heart} onChange={e => setHeart(e.target.value)} />
        </div>
        <div>
          <label>HRL</label>
          <output>{bmi.toFixed(1)}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
