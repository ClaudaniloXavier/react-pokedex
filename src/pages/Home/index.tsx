import React, { useCallback, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

import Toolbar from '../../components/Toolbar';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Pokemon from '../../components/Pokemon';

import api from '../../services/api';

interface SearchFormData {
  search: string;
}

interface PokemonState {
  abilities: [];
  baseExperience: number;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [pokemon, setPokemon] = useState<PokemonState>({} as PokemonState);

  const handleSubmit = useCallback((data: SearchFormData) => {
    api.get(`pokemon/${data.search}`).then((res) => {
      setPokemon(res.data);
    });
  }, []);

  return (
    <Container>
      <Toolbar />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className="search">
            <Input
              name="search"
              type="text"
              placeholder="Pokémon"
              icon={FaSearch}
            />
            <Button type="submit">Search</Button>
          </div>
        </Form>

        <Pokemon pokemon={pokemon} />
      </Content>
    </Container>
  );
};

export default Home;
