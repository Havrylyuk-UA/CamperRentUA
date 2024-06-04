import styles from './BookForm.module.scss';

const BookForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p>Book your campervan now</p>
        <p className={styles.head_second}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={styles.form}>
        <input
          className={styles.name}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={styles.email}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className={styles.date}
          type="text"
          name="date"
          placeholder="Booking date"
        />
        <textarea
          className={styles.comment}
          name="comment"
          id=""
          placeholder="Comment"
        ></textarea>

        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
