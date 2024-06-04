import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDetails, selectIsLoading } from '../../redux/selectors';
import styles from './CardDetails.module.scss';
import sprite from '../../assets/sprite.svg';

const CardDetails = () => {
  const car = useSelector(selectDetails);
  const loading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
            <div className={styles.btn}>
              <button>Features</button>
              <button>Reviews</button>
            </div>
            <p className={styles.line}></p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
