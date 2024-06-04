import { useSelector } from 'react-redux';
import styles from './Categories.module.scss';
import { selectDetails } from '../../../redux/selectors';
import sprite from '../../../assets/sprite.svg';

const Categories = () => {
  const camper = useSelector(selectDetails);

  const renderCategoryItem = (svg, text) => (
    <div className={styles.cat_item}>
      <svg className={styles[`icon_${svg}`]} width="20" height="20">
        <use xlinkHref={`${sprite}#icon-${svg}`}></use>
      </svg>
      {text}
    </div>
  );

  return (
    <div className={styles.categories}>
      {camper.adults > 0 &&
        renderCategoryItem('adults', `${camper.adults} adults`)}
      {camper.transmission &&
        renderCategoryItem('automatic', camper.transmission)}
      {camper.engine && renderCategoryItem('petrol', camper.engine)}
      {camper.details.airConditioner > 0 && renderCategoryItem('ac', 'AC')}
      {camper.details.kitchen > 0 && renderCategoryItem('kitchen', 'Kitchen')}
      {camper.details.beds > 0 &&
        renderCategoryItem('beds', `${camper.details.beds} beds`)}
      {camper.details.TV > 0 && renderCategoryItem('tv', 'TV')}
      {camper.details.CD > 0 && renderCategoryItem('cd', 'CD')}
      {camper.details.radio > 0 && renderCategoryItem('radio', 'Radio')}
      {camper.details.shower > 0 && renderCategoryItem('shower', 'Shower')}
      {camper.details.toilet > 0 && renderCategoryItem('toilet', 'Toilet')}
      {camper.details.freezer > 0 && renderCategoryItem('freezer', 'Freezer')}
      {camper.details.hob > 0 &&
        renderCategoryItem('hob', `${camper.details.hob} hob(s)`)}
      {camper.details.microwave > 0 &&
        renderCategoryItem('microwave', 'Microwave')}
      {camper.details.gas &&
        renderCategoryItem('gas', `${camper.details.gas} gas`)}
      {camper.details.water &&
        renderCategoryItem('water', `${camper.details.water} water`)}
    </div>
  );
};

export default Categories;
