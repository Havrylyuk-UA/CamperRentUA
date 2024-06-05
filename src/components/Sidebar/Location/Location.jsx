import styles from './Location.module.scss';
import sprite from '../../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {} from '../../../redux/operations';
import { selectAllCards } from '../../../redux/selectors';

const Location = () => {
  const advert = useSelector(selectAllCards);
  const [location, setLocation] = useState(advert);

  const uniqueLocations = location
    .map(item => item.location)
    .filter((value, index, self) => self.indexOf(value) === index);

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
          list="locationSuggestions"
        />
        <datalist id="locationSuggestions">
          {uniqueLocations.map((location, index) => (
            <option key={index} value={location} />
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default Location;
