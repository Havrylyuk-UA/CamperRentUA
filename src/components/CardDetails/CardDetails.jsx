import styles from './CardDetails.module.scss';
import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectDetails, selectIsLoading } from '../../redux/selectors';

const CardDetails = () => {
  const car = useSelector(selectDetails);

  const loading = useSelector(selectIsLoading);

  return (
    <div className={styles.modal_backdrop}>
      <div className={styles.card_container}>
        {loading ? (
          'Loading....'
        ) : (
          <>
            <div className={styles.about}>
              <div className={styles.head}>
                <p>{car.name}</p>
                <svg className={styles.cross} width="32" height="32">
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
