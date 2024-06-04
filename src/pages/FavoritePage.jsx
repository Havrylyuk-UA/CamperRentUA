import styles from './FavoritePage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../redux/selectors';
import Card from '../components/MainScreen/Card/Card';
import { addFavorite, removeFavorite } from '../redux/cardsSlice';

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
      {favorite.map(camper => (
        <Card
          key={camper._id}
          camper={camper}
          handleToggleFavorite={() => handleToggleFavorite(camper)}
        />
      ))}
    </div>
  );
};

export default FavoritePage;
