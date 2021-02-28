import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";
// import {useState, useEffect, useContext} from 'react';
// import { ChallengesContext } from "../contexts/ChallengesContext";


// let countdownTimeout: NodeJS.Timeout; 



export function Countdown(){

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);
  

    /* 
    Minutos do Lado Esquerdo e Minutos do Lado Direito = convertido o valor de minuto em string, 
    completando 1º posição com 0 e desestruturando a 1º posição para minutesLeft e a 2º posição 
    para minutesRight. (Mesma lógica se aplica para segundos) */
    const [minutesLeft , minutesRight] = String(minutes).padStart(2, '0').split(''); 
    const [secondLeft , secondRight] = String(seconds).padStart(2, '0').split('');

   

    return(
        <div> 
            <div className={styles.CountdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}
             
                >
                    Ciclo encerrado
                </button>
            ):(
                <>
                {isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                        Abandonar ciclo
                        <img src="icons/close.svg" alt="abandonar ciclo" />
                    </button>


                ):(

                    <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                    >
                        Iniciar ciclo
                    </button>

                )}
                
                </>



            )}

            
            
           
        </div>

    );
}