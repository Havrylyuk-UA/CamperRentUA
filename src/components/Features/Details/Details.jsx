import { useSelector } from 'react-redux';
import styles from './Details.module.scss';
import { selectDetails } from '../../../redux/selectors';

const Details = () => {
  const camper = useSelector(selectDetails);

  return (
    <div className={styles.container}>
      <div className={styles.head}>Vehicle details</div>
      <div className={styles.desc}>
        <div className={styles.desc_item}>
          <p>Form</p>
          <p>{camper.form}</p>
        </div>
        <div className={styles.desc_item}>
          <p>Length</p>
          <p>{camper.length}</p>
        </div>
        <div className={styles.desc_item}>
          <p>Width</p>
          <p>{camper.width}</p>
        </div>
        <div className={styles.desc_item}>
          <p>Height</p>
          <p>{camper.height}</p>
        </div>
        <div className={styles.desc_item}>
          <p>Tank</p>
          <p>{camper.tank}</p>
        </div>
        <div className={styles.desc_item}>
          <p>Consumption</p>
          <p>{camper.consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
