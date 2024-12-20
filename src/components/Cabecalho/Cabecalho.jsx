import React, { useState } from 'react';
import styles from './Cabecalho.module.css';
import logoheader from '../../img/LogoHeader.png';
import insta from '../../img/Logo Instagram.png';
import youtube from '../../img/Logo YouTube.png';
import linkedin from '../../img/LinkedIn.png';
import botao from '../../img/Button.png';

function Cabecalho() {
  // Estado para controlar o menu
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      {/* Logo e Nome */}
      <div className={styles.logoContainer}>
        <img src={logoheader} alt="Logo da Empresa" className={styles.logo} />
        <h1 className={styles.companyName}>Wattworks</h1>
      </div>

      {/* Botão do Menu */}
      <div className={styles.menu} onClick={toggleMenu}>
        <img src={botao} alt="botao menu" />
      </div>

      {/* Links de Navegação */}
      <nav className={`${styles.navLinks} ${menuAberto ? styles.show : ''}`}>
        <a href="#sobre-nos">Sobre Nós</a>
        <a href="#solucoes">Soluções</a>
        <a href="#contato">Contato</a>
        <a href="#duvidas">Dúvidas Frequentes</a>
      </nav>

      {/* Ícones de Redes Sociais */}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/wattworks.energia/?hl=pt-br" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;
