import React, { useState } from 'react';
import axios from 'axios';

const CurrencyForm = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [conversionRate, setConversionRate] = useState('');
  const [currencyId, setCurrencyId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/currency', {
        currencyCode,
        conversionRate,
        currencyId,
      });
      console.log('Currency added:', response.data);
      // Reset form fields after successful submission
      setCurrencyCode('');
      setConversionRate('');
      setCurrencyId('');
    } catch (error) {
      console.error('Error adding currency:', error);
    }
  };

  return (
    <div>
      <h1>Add Currency</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Currency Code" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
        <input type="number" placeholder="Currency ID" value={currencyId} onChange={(e) => setCurrencyId(e.target.value)} />
        <input type="number" placeholder="Conversion Rate" value={conversionRate} onChange={(e) => setConversionRate(e.target.value)} />
        <button type="submit">Add Currency</button>
      </form>
    </div>
  );
};

export default CurrencyForm;
