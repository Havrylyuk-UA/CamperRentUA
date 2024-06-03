import { Link } from 'react-router-dom';
import logo from '../../../assets/camper_logo.png';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
