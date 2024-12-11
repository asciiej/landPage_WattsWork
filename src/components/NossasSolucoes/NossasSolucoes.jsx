import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './NossasSolucoes.module.css';

import seta from '../../img/NossasSolucoes/seta.png';

// Importa imagens ícones
import usinas from '../../img/NossasSolucoes/UsinasSolares.png';
import GD from '../../img/NossasSolucoes/GD.png';
import mercado from '../../img/NossasSolucoes/mercadoLivre.png';
import agro from '../../img/NossasSolucoes/agronegócio.png';
import financiamento from '../../img/NossasSolucoes/financiamento.png';
import planos from '../../img/NossasSolucoes/planos.png';
import investimento from '../../img/NossasSolucoes/investimento.png';
import exclusivos from '../../img/NossasSolucoes/exclusivos.png';

// Importa imagem da seta do botão
import setaBotao from '../../img/NossasSolucoes/setaBotao.png';

function NossasSolucoes() {
  const [isMobile, setIsMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1); // Estado para armazenar a quantidade de slides visíveis

  const solutions = [
    { id: 1, img: usinas, text: 'Usinas solares para auto consumo' },
    { id: 2, img: GD, text: 'Energia solar por assinatura GD' },
    { id: 3, img: mercado, text: 'Mercado livre de Energia' },
    { id: 4, img: agro, text: 'Soluções de energia para o agronegócio' },
    { id: 5, img: financiamento, text: 'Melhores opções de financiamento com menores taxas' },
    { id: 6, img: planos, text: 'Planos de Manutenção de usinas solares e O&M' },
    { id: 7, img: investimento, text: 'Usinas de investimento' },
    { id: 8, img: exclusivos, text: 'Projetos solares exclusivos' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 768) {
        setSlidesPerView(2.2);
      } else {
        setSlidesPerView(1.5);
      }

      setIsMobile(width <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="nossas-solucoes" className={styles.container}>
      <header>
        <h2>CONHEÇA <span>NOSSO TRABALHO</span></h2>
        <p>Soluções em energia solar para <br /><span>todas</span> as suas necessidades</p>
      </header>

      <div className={styles.containerCardsPrincipais}>
        <div
          className={`${styles.cardsPrincipais} ${styles.offgrid}`}
          onClick={() => window.open('/docs/Portfolio Wattswork.pdf', '_blank')}
        >
          <img src={seta} alt="seta" className={styles.seta} />
          <div className={styles.cardsPrincipaisTexto}>
            <h3>Instalação Off-grid</h3>
            <p>Sistemas independentes da rede, com <br />armazenamento em baterias.</p>
          </div>
        </div>

        <div
          className={`${styles.cardsPrincipais} ${styles.ongrid}`}
          onClick={() => window.open('/docs/Portfolio Wattswork.pdf', '_blank')}
        >
          <img src={seta} alt="seta" className={styles.seta} />
          <div className={styles.cardsPrincipaisTexto}>
            <h3>Instalação On-grid</h3>
            <p>Sistemas conectados à rede elétrica, com <br />troca de energia com a concessionária.</p>
          </div>
        </div>
      </div>

      {isMobile ? (
        <Swiper
          slidesPerView={slidesPerView}   // Quantidade de slides visíveis proporcional ao tamanho da tela
          centeredSlides={true}            // Centraliza o slide ativo
          spaceBetween={10}                // Espaço entre os slides
          loop={true}                         // Habilita o loop
          autoplay={{                      // Configura o autoplay
          delay: 3000,                   // Define o tempo de delay entre as transições de slide (3000ms = 3 segundos)
          disableOnInteraction: false,   // Permite que o autoplay continue mesmo após interação do usuário
  }}                  // Habilita o loop
        >
          {solutions.map((solution) => (
            <SwiperSlide key={solution.id}>
              <div className={styles.sliderItem}>
                <img src={solution.img} alt={solution.text} />
                <p>{solution.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.containerSlider}>
          {solutions.map((solution) => (
            <div className={styles.sliderItem} key={solution.id}>
              <img src={solution.img} alt={solution.text} />
              <p>{solution.text}</p>
            </div>
          ))}
        </div>
      )}

      <div className={styles.botao}>
        <button>
          Seja nosso cliente
          <img src={setaBotao} alt="Botão" />
        </button>
      </div>
    </div>
  );
}

export default NossasSolucoes;
