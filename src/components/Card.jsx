import axios from "axios";
import React, { useEffect, useState } from "react";
import { coloresTypes } from "../data";
import "./card.css";

const Card = ({ poke }) => {
  const { name, url } = poke;
  const [img, setImg] = useState("");
  const [types, setTypes] = useState([]);

  const getDataPokemon = async () => {
    const { data } = await axios.get(url);
    setImg(data.sprites.front_default);
    setTypes(data.types);
  };

  useEffect(() => {
    getDataPokemon();
  }, []);

  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={img} />
      <div className="types">
        {types.length > 0 &&
          types.map((type) => (
            <span
              className="typesItem"
              style={{
                background: coloresTypes.find((elemento) => {
                  return elemento.name.toLocaleLowerCase() === type.type.name;
                }).color,
              }}
              key={type.slot}
            >
              {type.type.name}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
