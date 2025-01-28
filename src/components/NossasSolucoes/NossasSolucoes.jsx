import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './NossasSolucoes.module.css';

//importa imagem seta dos cards principais
import seta from '../../img/img-nossasSolucoes/seta.png';

// Importa imagens ícones
import usinas from '../../img/img-nossasSolucoes/UsinasSolares.png';
import GD from '../../img/img-nossasSolucoes/GD.png';
import mercado from '../../img/img-nossasSolucoes/mercadoLivre.png';
import agro from '../../img/img-nossasSolucoes/agronegócio.png';
import financiamento from '../../img/img-nossasSolucoes/financiamento.png';
import planos from '../../img/img-nossasSolucoes/planos.png';
import investimento from '../../img/img-nossasSolucoes/investimento.png';
import exclusivos from '../../img/img-nossasSolucoes/exclusivos.png';

// Importa imagem da seta do botão
import setaBotao from '../../img/img-nossasSolucoes/setaBotao.png';

function NossasSolucoes() {
  const [isMobile, setIsMobile] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1); 

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
          slidesPerView={slidesPerView}   
          centeredSlides={true}            
          spaceBetween={10}                
          loop={true}                         
          autoplay={{                      
          delay: 3000,                   
          disableOnInteraction: false,   
  }}                  
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

      <div className={styles.containerBotao}>
        <Link onClick={() => window.open('/docs/Portfolio Wattswork.pdf', '_blank')}
          className={styles.botao}
        >
          Veja nosso portfolio
          <img src={setaBotao} alt="Botão" />
        </Link>
      </div>


    </div>

    
    
  );
}

export default NossasSolucoes;
