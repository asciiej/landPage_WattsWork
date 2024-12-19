import React from 'react';
import './Cabecalho.css';
import logoheader from '../../img/LogoHeader.png';
import insta from '../../img/Logo Instagram.png';
import youtube from '../../img/Logo YouTube.png';
import linkedin from '../../img/LinkedIn.png';
import botao from '../../img/Button.png';


function Cabecalho() {
  return (
    <header className="header">
      {/* Logo e Nome */}
      <div className="logo-container">
        <img src={logoheader} alt="Logo da Empresa" className="logo" />
        <h1 className="company-name">Wattworks</h1>
      </div>
      <div className="menu" >
        <img src={botao} alt="botao menu" />
      </div>
      {/* Links de Navegação */}
      <nav className="nav-links">
        <a href="#sobre-nos">Sobre Nós</a>
        <a href="#solucoes">Soluções</a>
        <a href="#contato">Contato</a>
        <a href="#duvidas">Dúvidas Frequentes</a>
      </nav>

      {/* Ícones de Redes Sociais */}
      <div className="social-icons">
        <a href="https://www.instagram.com/wattworks.energia/?hl=pt-br" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="" />
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="" />
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="" />
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;

