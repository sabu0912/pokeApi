import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./pokemon.css";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`;

  const getPokemons = async () => {
    const response = await axios.get(url);
    // console.log(response)
    setPokemons(response.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  const next = () => {
    if (offset >= 1100) {
      setOffset(1100);
    } else {
      setOffset(offset + 50);
    }
  };

  const back = () => {
    if (offset <= 0) {
      setOffset(0);
    } else {
      setOffset(offset - 50);
    }
  };

  return (
    <>
      <h1 className="title">Poke-api</h1>
      <div className="btns">
        <button className="btn" onClick={back}>
          Back
        </button>
        <button className="btn" onClick={next}>
          Next
        </button>
      </div>
      <div className="list_pokemon">
        {pokemons.length > 0 &&
          pokemons.map((pokemon) => <Card key={pokemon.url} poke={pokemon} />)}
      </div>
    </>
  );
};

export default Pokemon;
