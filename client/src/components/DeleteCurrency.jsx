import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteCurrency = () => {
  const [currencyCode, setCurrencyCode] = useState('');
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

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Find the currency object with the provided currency code
      const currency = currencies.find(curr => curr.currencyCode === currencyCode);
      if (!currency) {
        console.error('Currency not found');
        return;
      }
      
      // Delete the currency using its ID
      const response = await axios.delete(`http://localhost:3003/api/currency/${currency.id}`);
      console.log('Currency deleted successfully');
      
      // Reset form fields after successful deletion
      setCurrencyCode('');
    } catch (error) {
      console.error('Error deleting currency:', error);
    }
  };

  
  return (
    <div className='Form'>
      <h1>Delete Currency</h1>
      <form onSubmit={handleDelete}>
        <input type="text" placeholder="Currency Code" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
        <button type="submit">Delete Currency</button>
      </form>
    </div>
  );
};

export default DeleteCurrency;
