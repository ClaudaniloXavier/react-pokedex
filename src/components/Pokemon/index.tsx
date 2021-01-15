import React, { useCallback } from 'react';

import PokeType from '../PokeType';

import { Container, PokemonImage, PokemonDetails } from './styles';

interface PokemonProps {
  pokemon: object;
}

const Pokemon: React.FC<any> = ({ pokemon }) => {
  console.log(pokemon);

  const capitalize = useCallback((str): string => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
  }, []);

  return (
    <Container>
      <PokemonImage>
        <img
          src={pokemon?.sprites?.other['official-artwork'].front_default}
          alt="Nome"
        />
      </PokemonImage>

      <PokemonDetails>
        <h3>{capitalize(pokemon?.name)}</h3>

        <PokeType>Type</PokeType>
      </PokemonDetails>
    </Container>
  );
};

export default Pokemon;
