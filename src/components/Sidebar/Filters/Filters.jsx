import { useState } from 'react';
import styles from './Filters.module.scss';
import sprite from '../../../assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { setFilterDetails } from '../../../redux/filterSlice';

const Filters = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const dispatch = useDispatch();

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;

    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
    dispatch(setFilterDetails(name));
  };

  return (
    <div className={styles.container}>
      <p className={styles.filters}>Filters</p>
      <p className={styles.equipment}>Vehicle equipment</p>
      <p className={styles.line}></p>
      <form>
        <label
          className={`${styles.label} ${
            checkedItems.airConditioner && styles.checked
          }`}
        >
          <input
            type="checkbox"
            name="airConditioner"
            onChange={handleCheckboxChange}
          />
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
          className={`${styles.label} ${checkedItems.TV && styles.checked}`}
        >
          <input type="checkbox" name="TV" onChange={handleCheckboxChange} />
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
