import { useState } from 'react';
import styles from './FilterTypes.module.scss';
import sprite from '../../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { setFilterForm } from '../../../redux/filterSlice';

const FilterTypes = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();

  const handleRadioChange = value => {
    setSelectedOption(value);
    dispatch(setFilterForm(value));
  };

  return (
    <div className={styles.container}>
      <p className={styles.type}>Vehicle type</p>
      <p className={styles.line}></p>
      <form>
        <label
          className={`${styles.label} ${
            selectedOption === 'panelTruck' && styles.checked
          }`}
        >
          <input
            type="radio"
            onChange={() => handleRadioChange('panelTruck')}
            checked={selectedOption === 'panelTruck'}
          />
          <svg className={styles.vehicle} width="40" height="28">
            <use xlinkHref={`${sprite}#icon-camper`}></use>
          </svg>
          Van
        </label>
        <label
          className={`${styles.label} ${
            selectedOption === 'fullyIntegrated' && styles.checked
          }`}
        >
          <input
            type="radio"
            onChange={() => handleRadioChange('fullyIntegrated')}
            checked={selectedOption === 'fullyIntegrated'}
          />
          <svg className={styles.vehicle} width="40" height="28">
            <use xlinkHref={`${sprite}#icon-camper-1`}></use>
          </svg>
          Fully
          <br /> Integrated
        </label>
        <label
          className={`${styles.label} ${
            selectedOption === 'alcove' && styles.checked
          }`}
        >
          <input
            type="radio"
            onChange={() => handleRadioChange('alcove')}
            checked={selectedOption === 'alcove'}
          />
          <svg className={styles.vehicle} width="40" height="28">
            <use xlinkHref={`${sprite}#icon-camper-2`}></use>
          </svg>
          Alcove
        </label>
      </form>
    </div>
  );
};

export default FilterTypes;
