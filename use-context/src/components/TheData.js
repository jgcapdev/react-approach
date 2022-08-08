import { useContext } from 'react';

import StaticContext from '../context/StaticContext.js';
import PokemonsContext from '../context/PokemonsContext.js';

const TheData = () => {
  const staticConfig = useContext(StaticContext);
  console.log(staticConfig);

  const pokemonContext = useContext(PokemonsContext);
  console.log(pokemonContext);

  return <h1>Usando context</h1>;
};

export default TheData;
