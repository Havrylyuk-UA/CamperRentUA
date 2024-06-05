import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBtn.module.scss';
import {
  selectFilterDetails,
  selectForm,
  selectLocation,
} from '../../../redux/selectors';
import { getCardByFilter } from '../../../redux/operations';

const SearchBtn = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const form = useSelector(selectForm);
  const details = useSelector(selectFilterDetails);

  const handleSearch = () => {
    const filter = {};

    if (location) {
      filter.location = location;
    }

    if (form) {
      filter.form = form;
    }

    details.forEach(detail => {
      if (detail === 'automatic') {
        filter.transmission = detail;
      } else {
        filter.details = {
          ...filter.details,
          [detail]: 1,
        };
      }
    });

    if (!form && !location && !details) {
      return alert('You need to select at least one filter');
    }
    dispatch(getCardByFilter(filter));
  };

  return (
    <>
      <button
        type="button"
        className={styles.search_btn}
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  );
};

export default SearchBtn;
