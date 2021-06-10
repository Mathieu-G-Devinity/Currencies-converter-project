import React from 'react';
//import PropTypes from 'prop-types';

//import Currency from './Currency';

import './converter.scss';

const Converter = ({names}) => (
  <footer className="converter">
  <h1 className="converter__title">1.09</h1>
  <h2 className="converter__titlesmall">{names[30].name}</h2>
  </footer>
);


export default Converter;
