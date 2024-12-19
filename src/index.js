import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './components/Banner/Banner'; // Caminho para o componente Banner
import Beneficios from './components/Beneficios/Beneficios';
import Dados from './components/Dados/Dados';
import NossaHistoria from './components/NossaHistoria/NossaHistoria'
import NossasSolucoes from './components/NossasSolucoes/NossasSolucoes';
import Contatos from './components/Contatos/Contatos';
import Cabecalho from './components/Cabecalho/Cabecalho';
import PerguntasFrequentes from './components/PerguntasFrequentes/PerguntasFrequentes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Banner />
    <Beneficios />
    <NossasSolucoes />
    <Dados />
    <NossaHistoria />
    <PerguntasFrequentes />
    <Contatos />
  </React.StrictMode>
);