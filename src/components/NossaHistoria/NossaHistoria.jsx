import React from 'react';
import styles from './NossaHistoria.module.css';

import image1 from '../../img/img-historia/painel.jpeg';
import image2 from '../../img/img-historia/trabalhador.webp';

export default function NossaHistoria() {
    return (
        <div className={styles.historiaContainer} id="nossa-historia">
            <div className={styles.imagensContainer}>
                <div className={`${styles.imagemContainer} ${styles.imagemMaior}`}> 
                    <img src={image1} alt=""/>
                </div>
                <div className={styles.imagemContainer}> 
                    <img src={image2} alt=""/>
                </div>
            </div>
            <div className={styles.textoContainer}>
                <h2>NOSSA <span>HISTÓRIA</span></h2>
                <h3>Há mais de uma década trazendo energia limpa e eficiente </h3>
                <p>Somos uma empresa dedicada à promoção da energia limpa e sustentável. Nossa missão é capacitar nossos clientes a gerarem sua própria energia por meio de usinas fotovoltaicas, permitindo uma significativa economia em suas contas de energia.
                <br/><br />
                Ao invés de depender somente da energia fornecida pelas concessionárias, nossos clientes têm a oportunidade de investir em soluções que não só reduzem custos, mas também contribuem para um mundo mais sustentável.</p>
                <h4>Equipe Qualificada</h4>
                <p>Contamos com engenheiros, técnicos e instaladores especializados, além de um time comercial comprometido em oferecer um atendimento excepcional.</p>
                <h4>Soluções Inovadoras</h4>
                <p>Contamos com engenheiros, técnicos e instaladores especializados, além de um time comercial comprometido em oferecer um atendimento excepcional.</p>
            </div>
        </div>
    )
}