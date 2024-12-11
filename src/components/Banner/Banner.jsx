import React from 'react';
import { Link } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';
import './Banner.css';
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
        <div className="container-banner">
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
                        <div className="slide-content">
                            <img
                                src={item.img}
                                alt={`Slide ${item.id}`}
                                className={`slide-item ${item.focus ? item.focus.split(" ")[0] + "-focus" : ""}`}
                            />
                            <div className="texto-sobreposto-banner">
                                <h1 className="titulo-banner">O <span className="corDiferente">poder do sol</span> ao seu alcance <br/> com a Wattworks Energia <br/>Inteligente!</h1>
                                <p className="subtexto-banner">Instalação de sistemas on-grid e off-grid gerando redução <br/> no consumo de energia e segurança energética.</p>
                                <div className="buttons-banner">
                                    <button className="btn-primary-banner">Entre em contato</button>

                                    {/* Link para o componente NossasSolucoes */}
                                    <Link
                                        to="nossas-solucoes"  // ID do destino no componente NossasSolucoes
                                        smooth={true}  // Ativa o efeito de scroll suave
                                        duration={500}  // Duração do efeito (em ms)
                                        className="btn-secondary-banner"
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
