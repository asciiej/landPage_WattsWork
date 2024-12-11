import React from 'react';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';
import styles from './Banner.module.css'; // Importando o CSS Module
import image1 from '../../img/img-banner/banner-img1.png';
import image2 from '../../img/img-banner/banner-img2.png';
import image3 from '../../img/img-banner/banner-img3.png';

// Registra o Swiper (necessário para Swiper/Element)
register();

function Banner() {
    const data = [
        { id: 1, img: image1 },
        { id: 2, img: image2, focus: "left center" },
        { id: 3, img: image3 },
    ];

    return (
        <div className={styles.containerBanner}>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={styles.slideContent}>
                            <img
                                src={item.img}
                                alt={`Slide ${item.id}`}
                                className={`${styles.slideItem} ${item.focus ? styles[`${item.focus.split(" ")[0]}Focus`] : ""}`}
                            />
                            <div className={styles.textoSobrepostoBanner}>
                                <h1 className={styles.tituloBanner}>O <span className={styles.corDiferente}>poder do sol</span> ao seu alcance <br/> com a Wattworks Energia <br/>Inteligente!</h1>
                                <p className={styles.subtextoBanner}>Instalação de sistemas on-grid e off-grid gerando redução <br/> no consumo de energia e segurança energética.</p>
                                <div className={styles.buttonsBanner}>

                                    <Link
                                        to="###"  // ID do destino no componente NossasSolucoes
                                        smooth={true}  // Ativa o efeito de scroll suave
                                        duration={500}  // Duração do efeito (em ms)
                                        className={styles.btnPrimaryBanner}
                                    >
                                        Entre em contato
                                    </Link>

                                    <Link
                                        to="nossas-solucoes"  // ID do destino no componente NossasSolucoes
                                        smooth={true}  // Ativa o efeito de scroll suave
                                        duration={500}  // Duração do efeito (em ms)
                                        className={styles.btnSecondaryBanner}
                                    >
                                        Nossas soluções
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
