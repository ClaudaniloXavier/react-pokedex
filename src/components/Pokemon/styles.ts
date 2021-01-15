import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  border: 2px solid ${shade(0.3, '#1e272e')};
  border-radius: 10px;
  max-height: 480px;
  height: 100%;

  margin-top: 84px;
  display: flex;
`;

const PokemonImage = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0;
  max-width: 420px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const PokemonDetails = styled.div`
  padding: 32px 0;
`;

export { Container, PokemonImage, PokemonDetails };
