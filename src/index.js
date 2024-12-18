import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './components/Banner/Banner'; // Caminho para o componente Banner
import Beneficios from './components/Beneficios/Beneficios';
import Dados from './components/Dados/Dados';
import NossaHistoria from './components/NossaHistoria/NossaHistoria'
import Parceiros from './components/Parceiros/Parceiros';
import Garantia from './components/Garantia/Garantia'
import NossasSolucoes from './components/NossasSolucoes/NossasSolucoes';
import Rodape from './components/Rodape/Rodape';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <Beneficios />
    <NossasSolucoes />
    <Dados />
    <NossaHistoria />
    <Parceiros />
    <Garantia />
    <Rodape />
  </React.StrictMode>
);