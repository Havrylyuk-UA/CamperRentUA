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
    const equipment = [];

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
        equipment.push(detail);
      }
    });

    if (!form && !location && details.length === 0) {
      return alert('You need to select at least one filter');
    }

    if (equipment.length > 0) {
      return dispatch(getCardByFilter({ filter, equipment }));
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
