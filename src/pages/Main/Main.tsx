import React from 'react';
import styles from './Main.module.css'
import { useSelector } from "react-redux";

const Main: React.FC = () => {
  const card = useSelector((state: any) => state.card);
  console.log('CARD', card);
  return (
    <>
      {card.name !== 'none'
        ? <div className={styles.fullContainer}>
            <div>
              <img width="484px" height="286px" src="/img/big_no_photo.png" alt="avatar" />
            </div>
            <div className={styles.text}>
              <p className={styles.boldName}>{card.name}</p>
              <p><span className={styles.boldName}>email:</span> {card.email}</p>
              <p><span className={styles.boldName}>phone:</span> {card.phone}</p>
              <h2 className={styles.boldName}>О себе:</h2>
              <p>{card.about}</p>
          </div>
        </div>
        : <div className={styles.emptyContainer}>
          <p className={styles.text}>Выберите сотрудника, чтобы посмотреть его профиль</p>
        </div>
      }
    </>

  );
};

export default Main;
