import React from 'react';
import styles from "./Rodape.module.css";
import logoRodape from "../../img/logo_rodape.png"

const Rodape = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img 
          src={logoRodape}
          alt="Logo" 
          className={styles.footerLogo}
        />
        <span className={styles.footerTexto}>2024   |   Desenvolvido por <a href="https://asciiej.com.br/">ASCII Empresa Junior</a></span>
      </div>
    </footer>
  );
};

export default Rodape;