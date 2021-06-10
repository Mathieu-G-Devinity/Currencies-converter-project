import React from 'react';
//import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ names }) => (
    <main className="currencies">
     <ul>
     {names.map(
      (currency) => <li key={currency.name} className="currencies__list">{currency.name}</li>,
    )}
     </ul> 
    </main>
);


export default Currencies;

