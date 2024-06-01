import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <>
      <div className={styles.welcome_container}>
        <div className={styles.welcome_desc_cont}>
          <h1 className={styles.welcome_title}>
            Hello <span className={styles.welcome_desc_color}>traveler</span>!
          </h1>
          <p className={styles.welcome_desc}>
            We are glad to welcome you, here you can choose and rent a{' '}
            <span className={styles.welcome_desc_color}>CAMPER</span> for your
            dream trip!
          </p>

          <Link to="/catalog" className={styles.welcome_btn}>
            Catalog
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
