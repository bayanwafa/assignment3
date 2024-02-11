import React, { useState } from 'react';

const Conversion = () => {
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [amount, setAmount] = useState('');

  const handleConvert = () => {
    console.log('Converting:', { currencyFrom, amount, currencyTo });
  };

  return (
    <div className='Form'>
      <h1>Convert</h1>
      <input type="text" placeholder="Currency Code From" value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)} />
      <input type="text" placeholder="Currency Code To" value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default Conversion;
