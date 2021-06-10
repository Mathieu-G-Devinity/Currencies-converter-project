// Pour définir un composant React :

// On importe React depuis la bibliothèque react
import React from 'react';

// Pour valider les props de nos composant, on utilise
// la bibliothèque prop-types
//import PropTypes from 'prop-types';

// On importe notre feuille de style
import './header.scss';

// On définit notre composant
// Un composant est une fonction qui retourne une portion de l'UI
// Ici, on décompose l'objet reçu en paramètre pour en extraire al valeur des propriétés
// image, title, author, difficulty et les stocker dans des variables de même nom
const Header = () => (
  <header className="header">
    <div className="header__content">
      <h1 className="header__title">Converter</h1>
      <p className="header__description">1 euro</p>
    </div>
  </header>
);

// On vient mettre à disposition notre composant
// au monde exterieur
export default Header;
