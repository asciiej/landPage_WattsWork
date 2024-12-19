import React, { useState } from "react";
import './PerguntasFrequentes.css';


function PerguntasFrequentes() {
  
  const [openQuestion, setOpenQuestion] = useState(null);

  
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  
  const faqData = [
    {
      question: "Depois de instalar minha usina fotovoltaica, eu ainda pago conta de energia?",
      answer:
        "Depende do tipo de sistema. No off-grid (com baterias), você não pagará conta de energia, pois estará desconectado da rede elétrica. Já no on-grid, que é conectado à rede, você ainda pagará a tarifa mínima, mas pode reduzir até 95% da sua conta de energia.",
    },
    {
      question: "Eu posso compensar a energia que eu produzi em outros locais?",
      answer:
        "Sim! Você pode compensar a energia em diferentes locais, desde que estejam registrados sob o mesmo CPF ou CNPJ. Isso permite que você use créditos de energia gerada em um endereço para abater o consumo de outro.",
    },
    {
      question: "Quanto tempo demora para ter o retorno do investimento em energia solar?",
      answer:
        "O retorno do investimento varia entre 3 e 7 anos, dependendo do seu consumo de energia e das características da instalação. Depois desse período, a economia é praticamente total, pois o sistema continua gerando energia por mais de 25 anos.",
    },
    {
      question: "O que acontece com a energia que minha usina gera a mais?",
      answer:
        "A energia excedente é enviada para a rede elétrica e convertida em créditos que podem ser usados para abater futuras contas de energia. Esses créditos são válidos por até 60 meses.",
    },
    {
      question: "Preciso de autorização da concessionária de energia para instalar painéis solares?",
      answer:
        "Sim, a instalação de um sistema de energia solar exige a aprovação da concessionária de energia. Nós cuidamos de todo o processo de homologação para que você tenha tranquilidade.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Perguntas <span>Frequentes</span></h1>
      <h2>Como podemos te ajudar hoje?</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span className="faq-toggle">
                {openQuestion === index ? "-" : "+"}
              </span>
            </button>
            {openQuestion === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerguntasFrequentes;



