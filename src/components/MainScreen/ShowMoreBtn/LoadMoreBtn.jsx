import styles from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
