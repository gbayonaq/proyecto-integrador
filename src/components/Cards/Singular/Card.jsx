import React from "react";
import style from "./Card.module.css";

export default function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  id,
}) {
  //   console.log(props, "props"); cardInfo

  return (
    <div className={style.cardContainer}>
      <button className={style.closeButton} onClick={() => onClose(id)}>
        X
      </button>
      <h2 className={style.cardInfo}>{name}</h2>
      <h2 className={style.cardInfo}>{species}</h2>
      <h2 className={style.cardInfo}>{gender}</h2>
      <h2 className={style.cardInfo}>{status}</h2>
      <h2 className={style.cardInfo}>{origin}</h2>
      <img className={style.cardImage} src={image} alt={name} />
    </div>
  );
}
