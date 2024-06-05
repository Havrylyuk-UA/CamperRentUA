import { useState } from 'react';
import styles from './BookForm.module.scss';
import MyDatePicker from './DatePicker/MyDatePicker.jsx';

const BookForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !validateName(name) ||
      !validateEmail(email) ||
      !validateBookingDate(bookingDate)
    ) {
      return;
    }

    window.location.reload();
  };

  const validateName = name => {
    if (name.trim() === '') {
      alert('Please enter your name');
      return false;
    }
    return true;
  };

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const validateBookingDate = bookingDate => {
    if (!bookingDate) {
      alert('Please select a booking date');
      return false;
    }
    return true;
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p>Book your campervan now</p>
        <p className={styles.head_second}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.name}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          autoComplete="off"
        />
        <input
          className={styles.email}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
        <MyDatePicker
          required
          selected={bookingDate}
          onChange={date => setBookingDate(date)}
        />
        <textarea
          className={styles.comment}
          name="comment"
          id=""
          placeholder="Comment"
          autoComplete="off"
        ></textarea>

        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
