import React, { useState } from 'react';
import axios from 'axios';

const DeleteCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch the currency details based on the provided currency code
      const response = await axios.get(`http://localhost:3003/api/currency/${currencyCode}`);
      const currency = response.data;

      // Check if the currency exists
      if (currency) {
        // Delete the currency using its ID
        await axios.delete(`http://localhost:3003/api/currency/${currencyCode}`);
        console.log('Currency deleted successfully');
      } else {
        console.error('Currency not found');
      }

      // Reset form fields after successful submission
      setCurrencyCode('');
    } catch (error) {
      console.error('Error deleting currency:', error);
    }
  };

  
  return (
    <div className='Form'>
      <h1>Delete Currency</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Currency Code" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
        <button type="submit">Delete Currency</button>
      </form>
    </div>
  );
};

export default DeleteCurrency;
