import styles from './FavoritePage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../redux/selectors';
import Card from '../components/MainScreen/Card/Card';
import { addFavorite, removeFavorite } from '../redux/cardsSlice';
import { Link } from 'react-router-dom';

const FavoritePage = () => {
  const dispatch = useDispatch();

  const favorite = useSelector(selectFavorite);

  const handleToggleFavorite = advert => {
    if (favorite.some(item => item._id === advert._id)) {
      return dispatch(removeFavorite(advert));
    }
    dispatch(addFavorite(advert));
  };

  return (
    <div className={styles.container}>
      {favorite.length === 0 ? (
        <div className={styles.favorite_cont}>
          <h1 className={styles.favorite_title}>
            Hello <span className={styles.favorite_desc_color}>traveler</span>!
          </h1>
          <p className={styles.favorite_desc}>
            Sorry, your favorites list is{' '}
            <span className={styles.favorite_desc_color_red}>empty</span>,
            change it by adding an ad!
          </p>
          <Link to="/catalog" className={styles.favorite_btn}>
            Catalog
          </Link>
        </div>
      ) : (
        favorite.map(camper => (
          <Card
            key={camper._id}
            camper={camper}
            handleToggleFavorite={() => handleToggleFavorite(camper)}
          />
        ))
      )}
    </div>
  );
};

export default FavoritePage;
