import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './components/Banner/Banner'; // Caminho para o componente Banner
import Beneficios from './components/Beneficios/Beneficios';
import Dados from './components/Dados/Dados';
import NossaHistoria from './components/NossaHistoria/NossaHistoria'
import NossasSolucoes from './components/NossasSolucoes/NossasSolucoes';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Parceiros from './components/Parceiros/Parceiros';
import Garantias from './components/Garantia/Garantia';
import Rodape from './components/Rodape/Rodape';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Contato from './components/Contatos/Contatos';
import Orcamento from './components/Orcamento/Orcamento';
import PerguntasFrequentes from './components/PerguntasFrequentes/PerguntasFrequentes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Banner />
    <Beneficios />
    <NossasSolucoes />
    <Dados />
    <NossaHistoria />
    <Feedbacks />
    <Parceiros />
    <Orcamento />
    <PerguntasFrequentes />
    <Garantias />
    <Contato />
    <Rodape />
  </React.StrictMode>
);