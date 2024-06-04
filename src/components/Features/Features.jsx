import styles from './Features.module.scss';
import BookForm from '../BookForm/BookForm';
import Categories from './Categories/Categories';
import Details from './Details/Details';

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <Categories />
        <Details />
      </div>
      <div className={styles.book}>
        <BookForm />
      </div>
    </div>
  );
};

export default Features;
