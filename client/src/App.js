import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BondCard from './BondCard';

function App() {

  // Need to hit API to get priceObj. 
  // Use whatever React method for state and whatever ajax method you wish.


  return (
    <div>
      {priceObj && <BondCard priceObj={priceObj} />}
    </div>
  );
}

export default App;
