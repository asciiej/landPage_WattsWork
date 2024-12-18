import React from "react";
import evolua from "../../img/img-parceiros/evolua.png";
import tambore from "../../img/img-parceiros/tambore.png";
import redeXodo from "../../img/img-parceiros/rede-xodo.png";
import ibiti from "../../img/img-parceiros/ibiti.png";

import styles from "./Parceiros.module.css";

const Parceiros = () => {
  return (
    <div className={styles.parceiros}>
      <div className={styles.parceirosContainer}>
        <h1>
          Garantia de economia, <br/>segurança e sustentabilidade
        </h1>
        <h2>
          Frase sobre como a empresa WattWorks é confiável e reconhecida pelos parceiros abaixo:
        </h2>
        <div className={styles.parceirosLista}>
          <div className={styles.parceirosLogo}>
            <img src={evolua} alt="Evolua Energia" />
          </div>
          <div className={styles.parceirosLogo}>
            <img src={tambore} alt="Tamboré Urbanismo" />
          </div>
          <div className={styles.parceirosLogo}>
            <img src={redeXodo} alt="Rede Xodó" />
          </div>
          <div className={styles.parceirosLogo}>
            <img src={ibiti} alt="Ibiti" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parceiros;
