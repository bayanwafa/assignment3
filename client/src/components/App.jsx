import React from 'react';
import LoginForm from './LoginForm';
import Conversion from './Conversion';
import CurrencyForm from './CurrencyForm';
import UpdateCurrency from './UpdateCurrency';
import DeleteCurrency from './DeleteCurrency';


const App = () => {
  return (
    <div>
      <LoginForm />
      <Conversion />
      <CurrencyForm />
      <UpdateCurrency />
      <DeleteCurrency />
    </div>
  );
};

export default App;
