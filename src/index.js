import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './components/Banner/Banner'; // Caminho para o componente Banner
import Beneficios from './components/Beneficios/Beneficios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <Beneficios />
  </React.StrictMode>
);