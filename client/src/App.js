import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BondCard from './BondCard';

function App() {

  // Need to hit API to get priceObj. 
  // Use whatever ajax method you wish.
  
  // URL: "https://bondcardapi-interviewcard.azurewebsites.net/api/BondCard?code=PsWBfs7/2h74WzScFAQPnWkmc7vCC5QjD/IBPVL6sp9M5ubquPtmBQ=="
  /*
  Example:
   {
      "bondName": "UMBS 30YR Fixed",
      "previousClose": "101.10",
      "currentPrice": "101",
      "nineThirtyPrice": "101.51",
      "tenPrice": "100.85",
      "tenThirtyPrice": "101",
      "elevenPrice": "101.10",
      "elevenThirtyPrice": "101.10"
    }
  */

  return (
    <div>
      {priceObj && <BondCard priceObj={priceObj} />}
    </div>
  );
}

export default App;
