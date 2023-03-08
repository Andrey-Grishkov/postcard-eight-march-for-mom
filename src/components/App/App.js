import React from "react";
import './App.css';
import Main from "../Main/Main"
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FotoBook from "../FotoBook/FotoBook";
import ImagePopup from "../ImagePopap/ImagePopap";

function App() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isOpenImage, setIsOpenImage] = React.useState(false);
  const [flag, setFlag] = React.useState(null);



  function handleClickNavigation(foto) {
    console.log(foto);
    setFlag(foto);
  };


  function handleCardClick(foto) {
    setSelectedCard(foto);
    setIsOpenImage(true);
  };

  const closeAllPopups = () => {
    setIsOpenImage(false);
  };

  return (
    <div className="page">
      <div className="area">
        <Header/>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Routes>
          <Route exact path="/" element={
            <Main
              handleClickNavigation={handleClickNavigation}
            />}></Route>
          <Route exact path="/foto-albom" element={
            <FotoBook
              onCardClick={handleCardClick}
              flag={flag}
            />}></Route>
        </Routes>
        <Footer/>
        <ImagePopup
          isOpen={isOpenImage}
          name={selectedCard && selectedCard.description}
          link={selectedCard && selectedCard.img}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
