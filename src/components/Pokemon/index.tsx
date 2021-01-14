import React from 'react';

import { Container } from './styles';

interface PokemonProps {
  pokemon: object;
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Container>
      <p>Pokemon</p>
    </Container>
  );
};

export default Pokemon;
