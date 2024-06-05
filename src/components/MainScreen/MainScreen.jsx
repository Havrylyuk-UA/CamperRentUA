import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card.jsx';
import styles from './MainScreen.module.scss';
import LoadMoreBtn from './ShowMoreBtn/LoadMoreBtn.jsx';
import {
  selectCards,
  selectFavorite,
  selectLimit,
  selectPage,
} from '../../redux/selectors.js';
import { useEffect } from 'react';
import { fetchCard, fetchAllCard } from '../../redux/operations.js';
import {
  addFavorite,
  addLimit,
  goToFirst,
  removeFavorite,
} from '../../redux/cardsSlice.js';

const MainScreen = () => {
  const data = useSelector(selectCards);

  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCard());
    dispatch(fetchCard({ page, limit }));
  }, [dispatch, limit, page]);

  const handleLoadMore = () => {
    dispatch(addLimit());
  };

  const handleGoFirst = () => {
    dispatch(goToFirst());
  };

  const favorite = useSelector(selectFavorite);

  const handleToggleFavorite = advert => {
    if (favorite.some(item => item._id === advert._id)) {
      return dispatch(removeFavorite(advert));
    }
    dispatch(addFavorite(advert));
  };

  const endOfCard = data.length % limit === 0;

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data.map(camper => (
          <Card
            key={camper._id}
            camper={camper}
            handleToggleFavorite={() => handleToggleFavorite(camper)}
          />
        ))}
      </div>
      <LoadMoreBtn
        name={endOfCard ? 'Load more' : 'Back to start'}
        onClick={endOfCard ? handleLoadMore : handleGoFirst}
      />
    </div>
  );
};

export default MainScreen;
