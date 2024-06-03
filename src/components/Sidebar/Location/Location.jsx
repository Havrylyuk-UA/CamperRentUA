import styles from './Location.module.scss';
import sprite from '../../../assets/sprite.svg';

const Location = () => {
  return (
    <div className={styles.container}>
      <p>Location</p>
      <div className={styles.location_input}>
        <svg className={styles.location_icon} width="20" height="20">
          <use xlinkHref={`${sprite}#icon-map-pin`}></use>
        </svg>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Choose your city"
        />
      </div>
    </div>
  );
};

export default Location;
