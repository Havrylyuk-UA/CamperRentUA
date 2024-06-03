import Card from '../Card/Card.jsx';
import styles from './MainScreen.module.scss';
import data from '../../assets/data.json';

const MainScreen = () => {
  const campersData = data;
  return (
    <div className={styles.container}>
      {campersData.map(camper => (
        <Card key={camper._id} camper={camper} />
      ))}
    </div>
  );
};

export default MainScreen;
