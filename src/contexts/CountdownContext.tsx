import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountdownContextData{
            minutes: number;
            seconds: number;
            hasFinished: boolean;
            isActive: boolean;
            startCountdown: ()=>void;
            resetCountdown: ()=>void;

}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}: CountdownProviderProps ){


    const {startNewChallenge} = useContext(ChallengesContext);
  


    const [time, setTime] = useState(1 * 60) // Definido estado inicial do Countdown.
    const [isActive, setIsactive] =  useState(false) // Ativador do Countdown iniciado em Falso.
    const [hasFinished, setHasFinished] =  useState(false);
    const minutes = Math.floor(time / 60); // Definido Minutos (Time/60) -> Arredondando ao valor de inteiro.
    const seconds = (time % 60); // Resultado da divisão do Time por 60. 


    function startCountdown(){
        setIsactive(true);

    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsactive(false);
        setTime(0.05 * 60);
        setHasFinished(false);

    }

    useEffect( () => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=> {
                 setTime(time - 1);
            }, 1000) 
        } else if(isActive && time == 0 ){
            setHasFinished(true);
            setIsactive(false);
            startNewChallenge();
        }

    }, [isActive, time] )



    return( 
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    );


}

