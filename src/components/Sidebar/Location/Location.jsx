import styles from './Location.module.scss';
import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCards } from '../../../redux/selectors';
import { setFilterLocation } from '../../../redux/filterSlice';

const Location = () => {
  const advert = useSelector(selectAllCards);
  const dispatch = useDispatch();

  const uniqueLocations = advert
    .map(item => item.location)
    .filter((value, index, self) => self.indexOf(value) === index);

  const handleFilterLocation = e => {
    const location = e.target.value;

    if (location.trim() !== '') {
      if (!uniqueLocations.some(item => item === location)) {
        return alert('Sorry, there are no campers in this location');
      }
      dispatch(setFilterLocation(location));
    }
  };

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
          onBlur={e => handleFilterLocation(e)}
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
