import styles from './SearchBtn.module.scss';

const SearchBtn = () => {
  return (
    <>
      <button type="button" className={styles.search_btn}>
        Search
      </button>
    </>
  );
};

export default SearchBtn;
