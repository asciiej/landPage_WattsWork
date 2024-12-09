// Importa bibliotecas externas
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Importa os módulos EffectFade e Autoplay
import { EffectFade, Autoplay } from 'swiper';

// Importa estilos locais
import './Banner.css';

// Importa imagens
import image1 from '../../img/img-banner/banner-img1.png';
import image2 from '../../img/img-banner/banner-img2.png';
import image3 from '../../img/img-banner/banner-img3.png';

// Registra o Swiper (necessário para Swiper/Element)
register();

function Banner() {
    // Cria uma lista com as imagens
    const data = [
        { id: 1, img: image1,},
        { id: 2, img: image2, focus: "left center"},
        { id: 3, img: image3 },
    ];

    return (
        <div className="container-banner">
            
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                effect="fade" // Aplica o efeito fade
                loop={true} // Ativa o looping
                autoplay={{
                    delay: 3000, // Define o intervalo em milissegundos entre os slides (3 segundos neste caso)
                    disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
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
                                    <button className="btn-secondary-banner">Nossas soluções</button>
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