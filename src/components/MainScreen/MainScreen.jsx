import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card.jsx';
import styles from './MainScreen.module.scss';
import LoadMoreBtn from './ShowMoreBtn/LoadMoreBtn.jsx';
import { selectCards } from '../../redux/selectors.js';
import { useEffect, useState } from 'react';
import { fetchCard } from '../../redux/operations.js';

const MainScreen = () => {
  const data = useSelector(selectCards);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 4,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCard(pagination));
  }, [dispatch, pagination]);

  const handleLoadMore = () => {
    const limit = (pagination.limit += 4);
    setPagination({ ...pagination, limit });
  };

  const endOfCard = data.length % pagination.limit === 0;

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data.map(camper => (
          <Card key={camper._id} camper={camper} />
        ))}
      </div>
      {endOfCard && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
};

export default MainScreen;
