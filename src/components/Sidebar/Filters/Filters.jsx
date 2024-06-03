import { useState } from 'react';
import styles from './Filters.module.scss';
import sprite from '../../../assets/sprite.svg';

const Filters = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  return (
    <div className={styles.container}>
      <p className={styles.filters}>Filters</p>
      <p className={styles.equipment}>Vehicle equipment</p>
      <p className={styles.line}></p>
      <form>
        <label
          className={`${styles.label} ${checkedItems.ac && styles.checked}`}
        >
          <input type="checkbox" name="ac" onChange={handleCheckboxChange} />
          <svg className={styles.filter_equipment} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-ac`}></use>
          </svg>
          AC
        </label>
        <label
          className={`${styles.label} ${
            checkedItems.automatic && styles.checked
          }`}
        >
          <input
            type="checkbox"
            name="automatic"
            onChange={handleCheckboxChange}
          />
          <svg className={styles.filter_equipment} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-automatic`}></use>
          </svg>
          Automatic
        </label>
        <label
          className={`${styles.label} ${
            checkedItems.kitchen && styles.checked
          }`}
        >
          <input
            type="checkbox"
            name="kitchen"
            onChange={handleCheckboxChange}
          />
          <svg className={styles.filter_equipment} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-kitchen`}></use>
          </svg>
          Kitchen
        </label>
        <label
          className={`${styles.label} ${checkedItems.tv && styles.checked}`}
        >
          <input type="checkbox" name="tv" onChange={handleCheckboxChange} />
          <svg className={styles.filter_equipment} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-tv`}></use>
          </svg>
          TV
        </label>
        <label
          className={`${styles.label} ${checkedItems.shower && styles.checked}`}
        >
          <input
            type="checkbox"
            name="shower"
            onChange={handleCheckboxChange}
          />
          <svg className={styles.filter_equipment} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-shower`}></use>
          </svg>
          Shower
        </label>
      </form>
    </div>
  );
};

export default Filters;
