import React from 'react';
import './Contatos.css';

import endereco from '../../img/img-contato/local.png';
import wpp from '../../img/img-contato/wpp.png';
import telefone from '../../img/img-contato/telefone.png';

const Contato = () => {
  return (
    <div className="contato">
      <h2 className="titulo">Ficou alguma dúvida?</h2>
      <section className="centro">
        <div className="container-contato">
          {/* Coluna da esquerda (endereço) */}
          <div className="endereco">
            <div className="endereco-top">
              <img src={endereco} alt="Endereço" className="imagem-endereco" />
              <h1 className="tituloo">Endereço</h1>
            </div>
            <div className="endereco-bottom">
              <div className="sede-info">
                <h3>Sede em Juiz de Fora</h3>
                <p>Rua Ataliba de Barros, Nº 182, Sala 509, Bairro São Mateus, Juiz de Fora.</p>
                <br />
                <h3>Filial em Uberlândia</h3>
                <p>Rua do Feirante, Nº 11, Bairro Planalto, Uberlândia.</p>
              </div>
            </div>
          </div>

          {/* Coluna da direita (informações de contato) */}
          <div className="contato-info">
            <div className="wpp">
              <img src={wpp} alt="WhatsApp" className="imagem-wpp" />
              <div className="contato-texto">
                <h1 className="tituloo">WhatsApp</h1>
                <p className="numero">(32) 99979-9600 <br /> </p> <p>(21) 99526-0389</p>
              </div>
            </div>
            <div className="telefone">
              <img src={telefone} alt="Telefone" className="imagem-telefone" />
              <div className="contato-texto">
                <h1 className="tituloo">Telefone</h1>
                <p>(32) 99979-9600 <br /> </p> <p> (21) 99526-0389</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contato;
