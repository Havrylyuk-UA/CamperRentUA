import styles from './PopUp.module.scss';
import sprite from '../../assets/sprite.svg';
import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';

const PopUp = ({ camper, close }) => {
  const { camper: car } = camper;
  const modalRoot = document.getElementById('modal-root');

  const closeModal = useCallback(
    event => {
      if (event.target === event.currentTarget || event.code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    const handleKeyDown = event => closeModal(event);
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  if (!modalRoot) return null;

  return createPortal(
    <div className={styles.modal_backdrop} onClick={closeModal}>
      <div className={styles.card_container}>
        <div className={styles.about}>
          <div className={styles.head}>
            <p>{car.name}</p>
            <svg
              className={styles.cross}
              width="32"
              height="32"
              onClick={closeModal}
            >
              <use
                xlinkHref={`${sprite}#icon-cross`}
                onClick={closeModal}
              ></use>
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
      </div>
    </div>,
    modalRoot
  );
};

export default PopUp;
