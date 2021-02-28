import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){

    const {level} = useContext(ChallengesContext);


    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/48499527?s=460&u=6ee57e083595d84c49ab1210011df67b00d6185c&v=4" alt="Marcos Mulinari" />
            <div>
                <strong>Marcos Mulinari</strong>

              
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}