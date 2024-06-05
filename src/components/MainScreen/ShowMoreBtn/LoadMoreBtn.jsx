import styles from './LoadMoreBtn.module.scss';

const LoadMoreBtn = ({ onClick, name }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {name}
    </button>
  );
};

export default LoadMoreBtn;
