import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/camper_logo.png';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
  const location = useLocation();

  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <ul className={styles.header_table}>
        <li>
          <Link
            to="/"
            className={clsx({ [styles.active]: location.pathname === '/' })}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/catalog"
            className={clsx({
              [styles.active]: location.pathname === '/catalog',
            })}
          >
            Catalog
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className={clsx({
              [styles.active]: location.pathname === '/favorites',
            })}
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
