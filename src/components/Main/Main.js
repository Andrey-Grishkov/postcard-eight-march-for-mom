import React from "react";
import './Main.css';
import Navigation from "../Navigation/Navigation";

function Main({handleClickNavigation}) {
  return (
    <section className="main">
          <Navigation handleClickNavigation={handleClickNavigation}/>
      <div className="main__content">
        <div className="main__img">
          <p className="main__heart-text">С восьмым
            <br></br>марта!!!</p>
        </div>
        <div className="main__img-eight-march"></div>
        <div className='main__text-container'>
          <h3 className='main__title'>Дорогая Мама!!</h3>
          <p className="main__text">С восьмым марта поздравляю<br></br>
            Шлю тебе цветы из далека <br></br>
            И всем сердцем я желаю <br></br>
            Чтоб была здорова, молода
          </p>
          <p className="main__text">
            Желаю сдать экзамен на права<br></br>
            Чтоб с легкость машину ты водила<br></br>
            И с Папой чтоб была ты не черства <br></br>
            И чтоб его болезнь взяла и отступила
          </p>
          <p className="main__text">
            Желаю счастья, мира и любви<br></br>
            Но чтоб не скучной жизнь казалась<br></br>
            И если в чем не прав, то ты меня прости<br></br>
            Ты лучшей Мамой оказалась!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
