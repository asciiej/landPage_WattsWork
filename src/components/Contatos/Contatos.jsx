import React from 'react';
import  styles from './Contatos.module.css'

import endereco from '../../img/img-contato/local.png';
import wpp from '../../img/img-contato/wpp.png';
import telefone from '../../img/img-contato/telefone.png';

const Contato = () => {
  return (
    <div className={styles.contato}>
      <h1>Ficou alguma dúvida?</h1>
        <div className={styles.containerContato}>
          {/* Coluna da esquerda (endereço) */}
          <div className={styles.endereco}>
            <div className={styles.enderecoTop}>
              <img src={endereco} alt="Endereço"/>
              <h3>Endereço</h3>
            </div>
            <div className={styles.enderecoBottom}>
              <div className={styles.sedeInfo}>
                <h3>Sede em Juiz de Fora</h3>
                <p>Rua Ataliba de Barros, Nº 182, Sala 509, Bairro São Mateus, Juiz de Fora.</p>
                <br />
                <h3>Filial em Uberlândia</h3>
                <p>Rua do Feirante, Nº 11, Bairro Planalto, Uberlândia.</p>
              </div>
            </div>
          </div>

          {/* Coluna da direita (informações de contato) */}
          <div className={styles.contatoInfo}>
            <div className={styles.contatoCard}>
              <img src={wpp} alt="WhatsApp"/>
              <div>
                <h3>WhatsApp</h3>
                <p>(32) 99979-9600 <br /> </p> <p>(21) 99526-0389</p>
              </div>
            </div>
            <div className={styles.contatoCard}>
              <img src={telefone} alt="Telefone"/>
              <div>
                <h3>Telefone</h3>
                <p>(32) 99979-9600 <br /> </p> <p> (21) 99526-0389</p>
              </div>
            </div>
          </div>

        </div>

    </div>
  );
}

export default Contato;
