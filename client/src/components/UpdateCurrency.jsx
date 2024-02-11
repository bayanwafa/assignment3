import React, { useState } from 'react';
import axios from 'axios';

const UpdateCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch the currency details based on the provided currency code
      const response = await axios.get(`http://localhost:3003/api/currency/${currencyCode}`);
      const currency = response.data;

      // Check if the currency exists
      if (currency) {
        // Update the currency's conversion rate with the new value
        const updatedCurrency = { ...currency, amount: parseFloat(amount) };
        await axios.put(`http://localhost:3003/api/currency/${currency.id}`, updatedCurrency);
        console.log('Currency updated successfully');
      } else {
        console.error('Currency not found');
      }

      // Reset form fields after successful submission
      setCurrencyCode('');
      setAmount('');
    } catch (error) {
      console.error('Error updating currency:', error);
    }
  };

  return (
    <div className='Form'>
      <h1>Update Currency</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Currency Code" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Update Currency</button>
      </form>
    </div>
  );
};

export default UpdateCurrency;
