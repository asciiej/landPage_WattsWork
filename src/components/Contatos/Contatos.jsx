import React from 'react';
import styles from './Contatos.module.css';

import endereco from '../../img/img-contato/local.png';
import wpp from '../../img/img-contato/wpp.png';
import telefone from '../../img/img-contato/telefone.png';

const Contato = () => {
  return (
    <div className={styles.contato}>
      <h2 className={styles.titulo}>Ficou alguma dúvida?</h2>
      <section className={styles.centro}>
        <div className={styles.containerContato}>
          {/* Coluna da esquerda (endereço) */}
          <div className={styles.endereco}>
            <div className={styles.enderecoTop}>
              <img src={endereco} alt="Endereço" className={styles.imagemEndereco} />
              <h1 className={styles.titulo}>Endereço</h1>
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
            <div className={styles.wpp}>
              <img src={wpp} alt="WhatsApp" className={styles.imagemWpp} />
              <div className={styles.contatoTexto}>
                <h1 className={styles.titulo}>WhatsApp</h1>
                <p className={styles.numero}>(32) 99979-9600 <br /> </p> <p>(21) 99526-0389</p>
              </div>
            </div>
            <div className={styles.telefone}>
              <img src={telefone} alt="Telefone" className={styles.imagemTelefone} />
              <div className={styles.contatoTexto}>
                <h1 className={styles.titulo}>Telefone</h1>
                <p>(32) 99979-9600 <br /> </p> <p>(21) 99526-0389</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contato;
