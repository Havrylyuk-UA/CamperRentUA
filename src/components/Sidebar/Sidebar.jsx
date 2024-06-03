import styles from './Sidebar.module.scss';
import FilterTypes from './FilterTypes/FilterTypes';
import Filters from './Filters/Filters';
import Location from './Location/Location';
import SearchBtn from './SearchBtn/SearchBtn';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Location />
      <Filters />
      <FilterTypes />
      <SearchBtn />
    </div>
  );
};

export default Sidebar;
