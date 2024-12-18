import React from "react";
import "./Parceiros.css"; 
import evolua from "./img/evolua.png";
import tambore from "./img/tambore.png";
import redeXodo from "./img/rede-xodo.png";
import ibiti from "./img/ibiti.png";

const Parceiros = () => {
  return (
    <div className="parceiros">
      <div className="parceiros-container">
        <h1 className="fonte-titulo">
          Garantia de economia, segurança e sustentabilidade
        </h1>
        <p className="fonte-texto">
          Frase sobre como a empresa WattWorks é confiável e reconhecida pelos parceiros abaixo:
        </p>
        <div className="parceiros-lista">
          <div className="parceiros-logo">
            <img src={evolua} alt="Evolua Energia" />
          </div>
          <div className="parceiros-logo">
            <img src={tambore} alt="Tamboré Urbanismo" />
          </div>
          <div className="parceiros-logo">
            <img src={redeXodo} alt="Rede Xodó" />
          </div>
          <div className="parceiros-logo">
            <img src={ibiti} alt="Ibiti" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parceiros;
