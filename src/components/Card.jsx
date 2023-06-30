import React from "react";
// import style from "./Card.module.css";
import style from "styled-components";

const DivConEstilos = style.div`
  background-color: gray;
  border-radius: 10px;
  color: "#FFFFFF";
  margin: auto;
  width: 50%;
  &:hover {
    background-color: pink;
  }
`;

export default function Card({
  name,
  species,
  onClose,
  gender,
  status,
  origin,
  image,
  key,
}) {
  //   console.log(props, "props");

  return (
    <DivConEstilos>
      <button onClick={onClose}> X </button>
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{status}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
    </DivConEstilos>
  );
}
