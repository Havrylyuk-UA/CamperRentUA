import { useSelector } from 'react-redux';
import BookForm from '../BookForm/BookForm.jsx';
import styles from './Reviews.module.scss';
import { selectDetails } from '../../redux/selectors.js';
import sprite from '../../assets/sprite.svg';

const Reviews = () => {
  const advert = useSelector(selectDetails);

  return (
    <div className={styles.container}>
      <div className={styles.comment_cont}>
        {advert.reviews.map(camper => (
          <div key={camper.reviewer_name} className={styles.reviews_item}>
            <div className={styles.head}>
              <div className={styles.circle}>
                {camper.reviewer_name.charAt(0)}
              </div>
              <div className={styles.name_rat}>
                <p className={styles.name}>{camper.reviewer_name}</p>
                <div className={styles.rating_cont}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      className={`${styles.rating} ${
                        camper.reviewer_rating > index
                          ? styles.rating_orange
                          : ''
                      }`}
                      width="16"
                      height="16"
                    >
                      <use xlinkHref={`${sprite}#icon-rating`}></use>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.comment}>{camper.comment}</div>
          </div>
        ))}
      </div>
      <div>
        <BookForm />
      </div>
    </div>
  );
};

export default Reviews;
