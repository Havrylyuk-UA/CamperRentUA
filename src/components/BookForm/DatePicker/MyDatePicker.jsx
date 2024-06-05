import { useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './MyDatePicker.module.scss';
import sprite from '../../../assets/sprite.svg';

const MyDatePicker = ({ selected, onChange }) => {
  const calendarRef = useRef(null);
  const startDate = new Date();

  const toggleCalendar = () => {
    if (calendarRef.current) {
      calendarRef.current.setOpen(true);
    }
  };

  return (
    <div className={styles.date}>
      <DatePicker
        className={styles.datepicker}
        ref={calendarRef}
        dateFormat={'dd-MM-yyyy'}
        selected={selected}
        onChange={onChange}
        startDate={startDate}
        minDate={startDate}
        calendarClassName="calendar"
        placeholderText="Booking date"
        calendarStartDay={1}
        required
      />
      <svg
        className={styles.ico}
        width="20"
        height="20"
        onClick={toggleCalendar}
      >
        <use xlinkHref={`${sprite}#icon-calendar`}></use>
      </svg>
    </div>
  );
};

export default MyDatePicker;
