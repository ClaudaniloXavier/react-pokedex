import styled, { css } from 'styled-components';

interface ContainerProps {
  type?:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy';
}

const ContainerTypeVariations = {
  normal: css`
    background: #a8a878;
  `,
  fighting: css`
    background: #c03028;
  `,
  flying: css`
    background: #a890f0;
  `,
  poison: css`
    background: #a040a0;
  `,
  ground: css`
    background: #e0c068;
  `,
  rock: css`
    background: #b8a038;
  `,
  bug: css`
    background: #a8b820;
  `,
  ghost: css`
    background: #705898;
  `,
  steel: css`
    background: #b8b8d0;
  `,
  fire: css`
    background: #f08030;
  `,
  water: css`
    background: #6890f0;
  `,
  grass: css`
    background: #78c850;
  `,
  electric: css`
    background: #f8d030;
  `,
  psychic: css`
    background: #f85888;
  `,
  ice: css`
    background: #98d8d8;
  `,
  dragon: css`
    background: #7038f8;
  `,
  dark: css`
    background: #705848;
  `,
  fairy: css`
    background: #ee99ac;
  `,
};

const Container = styled.div<ContainerProps>`
  padding: 4px;
  border-radius: 4px;
  ${(props) => ContainerTypeVariations[props.type || 'normal']}
`;

export { Container };
