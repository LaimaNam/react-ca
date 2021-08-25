import React from 'react';
import styles from './HomePage.module.css';

//Assets
import RivileĮrenginiai from './assets/RivileĮrenginiai.png';
//Components
import Button from '../../components/buttons/Button';

const HomePage = () => {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.textContentWrapper}>
          <h1>Rivile GAMA</h1>
          <p>
            Labai populiari buhalterinės apskaitos, finansų ir verslo valdymo
            sistema augti norinčiam verslui.
          </p>
          <div className={styles.callToActionContentWrapper}>
            <div className={styles.callToActionContent}>
              <Button text="IŠBANDYTI NEMOKAMAI" />
              <a href="/">KONSULTACIJA ĮSIGIJIMUI</a>
            </div>
            <div className={styles.callToActionContent}>
              <Button text="IŠMOKTI NEMOKAMAI" />
              <a href="/">KONSULTACIJA NUOMAI</a>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={RivileĮrenginiai} alt="" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
