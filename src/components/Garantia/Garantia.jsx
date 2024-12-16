import React from 'react';
import styles from './Garantia.module.css';
import garantiaIcon from '../../img/img-garantia/garantia-icon.png'; // Atualize o caminho conforme necessário
import suporteIcon from '../../img/img-garantia//suporte-icon.svg';  // Atualize o caminho conforme necessário
import fundo from '../../img/img-garantia//fundo.png';  // Atualize o caminho conforme necessário

export default function Garantia() {
    return (
        <div className={styles.garantiaContainer}>
            <h2>VOCÊ EM <span>BOAS MÃOS</span></h2>
            <h3>Nossos compromissos</h3>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <img src={garantiaIcon} alt="Ícone de garantia" className={styles.icon} />
                    <h4>Garantia</h4>
                    <p>Oferecemos até 25 anos de garantia em nossos equipamentos e 12 meses em nossas instalações, proporcionando <strong>segurança e confiança</strong> aos nossos clientes.</p>
                </div>
                <div className={styles.card}>
                    <img src={suporteIcon} alt="Ícone de suporte" className={styles.icon} />
                    <h4>Suporte ao Cliente</h4>
                    <p>Garantimos um suporte pós-venda prestativo e humanizado, assegurando que nossos clientes se sintam <strong>atendidos e satisfeitos</strong> mesmo após a instalação.</p>
                </div>
            </div>
        </div>
    );
}
