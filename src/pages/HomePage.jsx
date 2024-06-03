import styles from './HomePage.module.scss';

import MainScreen from '../components/MainScreen/MainScreen';
import Sidebar from '../components/Sidebar/Sidebar';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainScreen />
    </div>
  );
};

export default HomePage;
