import React, { useState } from 'react';
import styles from './Dados.module.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Dado({ textoEncima, textoMeio, textoEmbaixo }) {
  return (
    <div className={styles.dado}>
      <p className={styles.textoEncima}>{textoEncima}</p>
      <p className={styles.textoMeio}>{textoMeio}</p>
      <p className={styles.textoEmbaixo}>
        {typeof textoEmbaixo === 'string' ? (
          <span dangerouslySetInnerHTML={{ __html: textoEmbaixo }} />
        ) : (
          textoEmbaixo
        )}
      </p>
    </div>
  );
}

function Dados() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className={styles.containerDados}>
        <Dado 
          textoEncima="até"
          textoMeio={
            counterOn 
              ? <><CountUp start={0} end={95} duration={2} delay={0}/><span className={styles.percentSymbol}>%</span></> 
              : '95%'
          }
          textoEmbaixo="de redução na <br> conta de luz"
        />
        
        <Dado 
          textoEncima="financiamento em"
          textoMeio={counterOn ? <CountUp start={0} end={84} duration={2} delay={0}/> : '84'}
          textoEmbaixo="parcelas<br/>sem entradas"
        />
        <Dado 
          textoEncima="mais de"
          textoMeio={counterOn ? <CountUp start={0} end={100} duration={2} delay={0}/> : '100'}
          textoEmbaixo="serviços<br/>finalizados"
        />
      </div>
    </ScrollTrigger>
  );
}

export default Dados;
