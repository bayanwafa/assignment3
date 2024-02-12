import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [newConversionRate, setNewConversionRate] = useState('');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Fetch the list of currencies from the backend
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/currency');
        setCurrencies(response.data);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Find the currency object with the provided currency code
      const currency = currencies.find(curr => curr.currencyCode === currencyCode);
      if (!currency) {
        console.error('Currency not found');
        return;
      }
      
      // Update the currency using its ID
      const response = await axios.put(`http://localhost:3003/api/currency/${currency.id}/${newConversionRate}`);
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
      <form onSubmit={handleUpdate}>
        <input type="text" placeholder="Currency Code" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
        <input type="number" placeholder="New Conversion Rate" value={newConversionRate} onChange={(e) => setNewConversionRate(e.target.value)} />
        <button type="submit">Update Currency</button>
      </form>
    </div>
  );
};

export default UpdateCurrency;



