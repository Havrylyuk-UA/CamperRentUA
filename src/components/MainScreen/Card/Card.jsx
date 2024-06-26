import styles from './Card.module.scss';
import sprite from '../../../assets/sprite.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../../../redux/operations';
import clsx from 'clsx';
import { selectFavorite } from '../../../redux/selectors';
import { openDetails } from '../../../redux/cardsSlice';

const Card = ({ camper, handleToggleFavorite }) => {
  const renderCategoryItem = (svg, text) => (
    <div className={styles.cat_item}>
      <svg className={styles[`icon_${svg}`]} width="20" height="20">
        <use xlinkHref={`${sprite}#icon-${svg}`}></use>
      </svg>
      {text}
    </div>
  );

  const dispatch = useDispatch();

  const favorite = useSelector(selectFavorite);

  const openDetailsWindow = () => dispatch(openDetails());

  const isFavorite = favorite.some(item => item._id === camper._id);

  const getDetails = cardId => {
    dispatch(getCardById(cardId));
  };

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
            <svg
              className={clsx(styles.heart, {
                [styles.heart_active]: isFavorite,
              })}
              width="24"
              height="24"
              onClick={handleToggleFavorite}
            >
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
          {camper.details.airConditioner > 0 && renderCategoryItem('ac', 'AC')}
          {camper.details.kitchen > 0 &&
            renderCategoryItem('kitchen', 'Kitchen')}
          {camper.details.beds > 0 &&
            renderCategoryItem('beds', `${camper.details.beds} beds`)}
          {camper.details.TV > 0 && renderCategoryItem('tv', 'TV')}
          {camper.details.CD > 0 && renderCategoryItem('cd', 'CD')}
          {camper.details.radio > 0 && renderCategoryItem('radio', 'Radio')}
          {camper.details.shower > 0 && renderCategoryItem('shower', 'Shower')}
          {camper.details.toilet > 0 && renderCategoryItem('toilet', 'Toilet')}
          {camper.details.freezer > 0 &&
            renderCategoryItem('freezer', 'Freezer')}
          {camper.details.hob > 0 &&
            renderCategoryItem('hob', `${camper.details.hob} hob(s)`)}
          {camper.details.microwave > 0 &&
            renderCategoryItem('microwave', 'Microwave')}
          {camper.details.gas &&
            renderCategoryItem('gas', `${camper.details.gas} gas`)}
          {camper.details.water &&
            renderCategoryItem('water', `${camper.details.water} water`)}
        </div>
        <div>
          <button
            type="button"
            className={styles.btn}
            onClick={() => getDetails(camper._id)}
          >
            <NavLink
              to={`${camper._id}`}
              className={styles.btn_link}
              onClick={openDetailsWindow}
            >
              Show more
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
