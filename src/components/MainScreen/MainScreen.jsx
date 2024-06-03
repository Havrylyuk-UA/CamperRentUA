import Card from './Card/Card.jsx';
import styles from './MainScreen.module.scss';
import data from '../../assets/data.json';
import LoadMoreBtn from './ShowMoreBtn/LoadMoreBtn.jsx';
import PopUp from '../PopUp/PopUp.jsx';
import { useState } from 'react';

const MainScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cardDetails, setCardDetails] = useState();

  const showModal = camper => {
    setModalOpen(true);
    setCardDetails({
      camper,
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    setCardDetails();
  };

  return (
    <div className={styles.container}>
      {data.map(camper => (
        <Card key={camper._id} camper={camper} showModal={showModal} />
      ))}
      <LoadMoreBtn />
      {modalOpen && <PopUp close={closeModal} camper={cardDetails} />}
    </div>
  );
};

export default MainScreen;
