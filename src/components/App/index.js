// == Import npm
import React from 'react';

// == Imports Locaux
// On importe lescomposants nécessaires depuis le module où
// ils sont définis
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Converter from 'src/components/Converter';

//On importe nos données :
import currencies from 'src/data/currencies';
//console.log(Object.values(currencies[30]));
console.log(currencies);

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    
    <Header/>

    <Currencies names={currencies}/>

    <Converter names= {currencies}/>

  </div>
);

// == Export
export default App;
