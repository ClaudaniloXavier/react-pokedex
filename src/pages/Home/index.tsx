import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useToast } from '../../hooks/toast';

import { Container, Content } from './styles';

import Toolbar from '../../components/Toolbar';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Pokemon from '../../components/Pokemon';
import Loading from '../../components/Loading';

import api from '../../services/api';

interface SearchFormData {
  search: string;
}

interface PokemonState {
  id: number;
  height: number;
  name: string;
  order: number;
  weight: number;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [pokemon, setPokemon] = useState<PokemonState>({} as PokemonState);
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const getPokemon = useCallback(
    (data) => {
      setLoading(true);
      api
        .get(`pokemon/${data.search}`)
        .then((res) => {
          setPokemon(res.data);
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Pokémon not found.',
            description: 'Pokémon not found or not exists',
          });
        })
        .finally(() => setLoading(false));
    },
    [addToast],
  );

  const handleSubmit = useCallback(
    (data: SearchFormData) => {
      getPokemon(data);
    },
    [getPokemon],
  );

  useEffect(() => {
    getPokemon({ search: 'squirtle' });
  }, [getPokemon]);

  return (
    <Container>
      {loading && <Loading />}
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

        {!loading && pokemon && <Pokemon pokemon={pokemon} />}
      </Content>
    </Container>
  );
};

export default Home;
