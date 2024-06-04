import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  selectDetails,
  selectIsLoading,
  selectOpen,
} from '../../redux/selectors';
import { closeDetails } from '../../redux/cardsSlice';
import styles from './CardDetails.module.scss';
import sprite from '../../assets/sprite.svg';

const CardDetails = () => {
  const car = useSelector(selectDetails);
  const loading = useSelector(selectIsLoading);
  const isOpen = useSelector(selectOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const currentLocation = useLocation();

  const handleClose = () => {
    dispatch(closeDetails());
    if (currentLocation.pathname.startsWith('/catalog')) {
      navigate('/catalog');
    }
    if (currentLocation.pathname.startsWith('/favorites')) {
      navigate('/favorites');
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.card_container} onClick={e => e.stopPropagation()}>
        {loading ? (
          'Loading....'
        ) : (
          <>
            <div className={styles.about}>
              <div className={styles.head}>
                <p>{car.name}</p>
                <svg
                  className={styles.cross}
                  width="32"
                  height="32"
                  onClick={handleClose}
                >
                  <use xlinkHref={`${sprite}#icon-cross`}></use>
                </svg>
              </div>
              <div className={styles.rat_loc}>
                <div className={styles.rating}>
                  <svg className={styles.star} width="16" height="16">
                    <use xlinkHref={`${sprite}#icon-rating`}></use>
                  </svg>
                  {car.rating}({car.reviews.length} Reviews)
                </div>
                <div className={styles.location}>
                  <svg className={styles.map} width="16" height="16">
                    <use xlinkHref={`${sprite}#icon-map-pin`}></use>
                  </svg>
                  <p>{car.location}</p>
                </div>
              </div>
              <div className={styles.price}>
                <p>€{car.price}</p>
              </div>
            </div>
            <div className={styles.car_info}>
              <div className={styles.gallery}>
                {car.gallery.map(item => (
                  <div className={styles.gallery_img} key={item}>
                    <img src={item} alt={item} />
                  </div>
                ))}
              </div>
              <div className={styles.desc}>
                <p>{car.description}</p>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.tabList}>
                <Link
                  to="features"
                  className={`${styles.tab} ${
                    activeTab === 'features' ? styles.active : ''
                  }`}
                  onClick={() => handleTabClick('features')}
                >
                  Features
                </Link>
                <Link
                  to="reviews"
                  className={`${styles.tab} ${
                    activeTab === 'reviews' ? styles.active : ''
                  }`}
                  onClick={() => handleTabClick('reviews')}
                >
                  Reviews
                </Link>
              </div>
              <div className={styles.tabContent}>
                <Outlet />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
