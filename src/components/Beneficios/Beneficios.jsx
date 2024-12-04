import React from 'react';

// Importa estilos locais
import './Beneficios.css';

//importando icones dos cards

import iconEconomia from '../../img/icons-beneficios/Coin in Hand.png';
import iconDinheiro from '../../img/icons-beneficios/Money Box.png';
import iconSustentabilidade from '../../img/icons-beneficios/Green Earth.png';
import iconImovel from '../../img/icons-beneficios/Mortgage.png';


function Beneficios() {
    return(
        <div className='container-beneficios'>

            <h2 className='titulo-beneficios'>POR QUE INSTALAR <span>ENERGIA SOLAR</span>?</h2>

            <div className='grid-beneficios'>
                <div className="card-beneficio">
                    <div className="texto-beneficio">
                        <h3>Economia de energia</h3>
                        <p>Redução de até 95% nas contas de luz. Ao gerar sua própria eletricidade, você se torna menos dependente da rede elétrica convencional e pode até mesmo gerar um excedente de energia para compensação.</p>
                    </div>
                    <img src={iconEconomia} alt="Icone" />
                </div>

                <div className="card-beneficio">
                    <div className="texto-beneficio">
                        <h3>Proteja seu dinheiro</h3>
                        <p>Com a redução das contas de energia, você pode recuperar o investimento em um período curto e ficar protegido do aumento das tarifas da concessionária de energia.</p>
                    </div>
                    <img src={iconDinheiro} alt="Icone" />
                </div>
                
                <div className="card-beneficio">
                    <div className="texto-beneficio">
                        <h3>Sustentabilidade Ambiental</h3>
                        <p>A energia solar é uma fonte limpa e renovável, contribuindo para a redução das emissões de gases de efeito estufa e ajudando a preservar o meio ambiente. Abrace a sustentabilidade no seu negócio!</p>
                    </div>
                    <img src={iconSustentabilidade} alt="Icone" />
                </div>

                <div className="card-beneficio">
                    <div className="texto-beneficio">
                        <h3>Valorização do Imóvel</h3>
                        <p>Propriedades com sistemas de energia solar são valorizadas no mercado imobiliário.</p>
                    </div>
                    <img src={iconImovel} alt="Icone" />
                </div>

            </div>

            <h4>Energia para você, benefícios para o seu bolso!</h4>

        </div>

    );
}

export default Beneficios;