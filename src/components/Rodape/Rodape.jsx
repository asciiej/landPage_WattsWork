import React from 'react';
import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img 
          src="../../img/img-rodape//logo_rodape.png" 
          alt="Logo" 
          className="footer-logo" 
        />
        <span className="footer-texto">Wattworks</span>
      </div>
    </footer>
  );
};

export default Rodape;
