import React from "react";
import styles from "./Feedbacks.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import icon from "../../img/aspas.png"

function Feedbacks() {
    return (
    <div className={styles.container}>
        <header>
            <h2>NOSSOS <span>FEEDBACKS</span></h2>
            <h3>Seja mais um de nossos clientes satisfeitos</h3>
        </header>

        <div className={styles.containerFeedbacks}>
            <div className={styles.card}>
                <img src={icon}></img>
                <h2> Leonardo</h2>
                <p>Quero aqui deixar meu depoimento sobre toda a jornada de compra e instalação do sistema solar!</p>
                <p>Desde o primeiro contato, a equipe técnica e vendas prestou esclarecimentos sobre a.capacidade necessária para atender a demanda aqui de casa.<br/>
                Transparentes na negociação, apoio no processo legal junto à CEMIG, e rápida entrega dos materiais e instalação dos equipamentos e todo acompanhamento ao longo dessa jornada. Parabéns a WattWorks e toda equipe!</p>
            </div>
            <div className={styles.card}>
                <img src={icon}></img>  
                <h2> Maeve</h2>
                <p>Ágeis no atendimento e na colocação durante todo o tempo!</p>
                <p>A Wattworks foi escolhida por nós pela agilidade no atendimento e pela atenção dada por todas as pessoas envolvidas desde o início do contato até a instalação das placas. </p>
            </div>
            <div className={styles.card}>
                <img src={icon}></img>
                <h2>Lucas</h2>
                <p>Com certeza indicarei mais pessoas.</p>
                <p>Quando me foi passado o contato do whatsapp da Wattworks, o atendimento por parte da Débora foi excelente e digo o mesmo do atendimento presencial do Samir. Já indiquei o Flavio e com certeza indicarei mais pessoas.</p>
            </div>
        </div>
    </div>
    )
}

export default Feedbacks;