import styles from './Card.module.scss';
import sprite from '../../../assets/sprite.svg';

const Card = ({ camper, showModal }) => {
  const renderCategoryItem = (svg, text) => (
    <div className={styles.cat_item}>
      <svg className={styles[`icon_${svg}`]} width="20" height="20">
        <use xlinkHref={`${sprite}#icon-${svg}`}></use>
      </svg>
      {text}
    </div>
  );

  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={camper.gallery[0]} alt={camper.name} />
      </div>
      <div className={styles.content}>
        <div className={styles.head}>
          <div className={styles.name}>
            <p>{camper.name}</p>
          </div>
          <div className={styles.price}>
            <p>€{camper.price}</p>
            <svg className={styles.heart} width="24" height="24">
              <use xlinkHref={`${sprite}#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <div className={styles.rat_loc}>
          <div className={styles.rating}>
            <svg className={styles.star} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-rating`}></use>
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </div>
          <div className={styles.location}>
            <svg className={styles.map} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-map-pin`}></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p title={camper.description}>{camper.description}</p>
        </div>
        <div className={styles.categories}>
          {camper.adults > 0 &&
            renderCategoryItem('adults', `${camper.adults} adults`)}
          {camper.transmission &&
            renderCategoryItem('automatic', camper.transmission)}
          {camper.engine && renderCategoryItem('petrol', camper.engine)}
          {camper.details.kitchen && renderCategoryItem('kitchen', 'Kitchen')}
          {camper.details.beds > 0 &&
            renderCategoryItem('beds', `${camper.details.beds} beds`)}
          {camper.details.airConditioner > 0 && renderCategoryItem('ac', 'AC')}
        </div>
        <div>
          <button
            type="button"
            className={styles.btn}
            onClick={() => showModal(camper)}
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
