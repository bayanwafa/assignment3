import React, { useState } from 'react';
import axios from 'axios';

const UpdateCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [newConversionRate, setNewConversionRate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Fetch the currency ID based on the provided currency code
      const idResponse = await axios.get(`http://localhost:3003/api/currency/${currencyCode}`);
     const currencyId = idResponse.data.id;

      // Send PUT request to backend endpoint with currency ID and new rate
      const response = await axios.put(`http://localhost:3003/api/currency/${currencyId}/${newConversionRate}`);
      console.log('Currency updated successfully:', response.data);
      // Reset form fields after successful submission
      setCurrencyCode('');
      setNewConversionRate('');
    } catch (error) {
      console.error('Error updating currency:', error);
    }
  };


  return (
    <div className="Form">
      <h1>Update Currency</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Currency ID" id="currencyCode" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
        <input type="number" placeholder="Amount" id="newConversionRate" value={newConversionRate} onChange={(e) => setNewConversionRate(e.target.value)} />
        <button type="submit">Update Currency</button>
      </form>
    </div>
  );
};

export default UpdateCurrency;



