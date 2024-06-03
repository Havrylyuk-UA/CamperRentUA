import { useState } from 'react';
import styles from './FilterTypes.module.scss';
import sprite from '../../../assets/sprite.svg';

const FilterTypes = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = value => {
    setSelectedOption(value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.type}>Vehicle type</p>
      <p className={styles.line}></p>
      <form>
        <label
          className={`${styles.label} ${
            selectedOption === 'van' && styles.checked
          }`}
        >
          <input
            type="radio"
            onChange={() => handleRadioChange('van')}
            checked={selectedOption === 'van'}
          />
          <svg className={styles.vehicle} width="40" height="28">
            <use xlinkHref={`${sprite}#icon-camper`}></use>
          </svg>
          Van
        </label>
        <label
          className={`${styles.label} ${
            selectedOption === 'fully' && styles.checked
          }`}
        >
          <input
            type="radio"
            onChange={() => handleRadioChange('fully')}
            checked={selectedOption === 'fully'}
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
