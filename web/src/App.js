import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {

  const [beers, setBeers] = useState({"left": "..."})

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://api.enriquegomez.me/beers/")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.log(error))
    }, 1000)

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <header className="App-header">
        <span style={{fontSize: "50px"}}>Cervezas restantes</span>
        <span style={{fontSize: "80px"}}>{beers["left"]}</span>
      </header>
    </div>
  );
}

export default App;
