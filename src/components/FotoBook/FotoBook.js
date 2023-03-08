import React, {useEffect} from "react";
import './FotoBook.css';
import {FOTO_ALBOM_DACHA} from '../../utils/constants';
import {FOTO_ALBOM_TURIZM} from '../../utils/constants';
import {FOTO_ALBOM_FAMILY} from '../../utils/constants';
import Foto from "../Foto/Foto";

function FotoBook({onCardClick, flag}) {
  const [fotographMass, setFotographMass] = React.useState([]);
  const [titleFoto, setTitleFoto] = React.useState('');
  const [textFoto, setTextFoto] = React.useState('');

  useEffect(() => {if (flag==='Turizm') {
    setFotographMass(FOTO_ALBOM_TURIZM.foto);
    setTitleFoto(FOTO_ALBOM_TURIZM.title)
    setTextFoto(FOTO_ALBOM_TURIZM.text)
  }
  else if (flag==='Dacha') {
    setFotographMass(FOTO_ALBOM_DACHA.foto);
    setTitleFoto(FOTO_ALBOM_DACHA.title)
    setTextFoto(FOTO_ALBOM_DACHA.text)
  }
    else {
    setFotographMass(FOTO_ALBOM_FAMILY.foto);
    setTitleFoto(FOTO_ALBOM_FAMILY.title)
    setTextFoto(FOTO_ALBOM_FAMILY.text)
  }
  }, [])

  return (
    <section className="foto-book">
      <h3 className="foto-book__title">{titleFoto}</h3>
      <p className="foto-book__text">{textFoto}.</p>
      <ul className="foto-book__container">
          {fotographMass.map((fotograph, item) => (
            <Foto
              fotograph={fotograph}
              onCardClick={onCardClick}
              key={item}
            />
          ))
          }
      </ul>
    </section>
  );
}

export default FotoBook;
