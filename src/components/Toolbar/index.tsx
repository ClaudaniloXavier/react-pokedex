import React from 'react';

import { FaSignOutAlt } from 'react-icons/fa';

import { Container, Trainer } from './styles';

import { useAuth } from '../../hooks/auth';

const Toolbar: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('@pokedex:user') as string);
  const { logout } = useAuth();

  return (
    <Container>
      <Trainer>
        <div className="photo">
          <img src={user.photo} alt="Trainer" />
        </div>

        <div className="text">
          <p>{user.trainer}</p>
          <span>{user.city}</span>
        </div>
      </Trainer>
      <FaSignOutAlt size={24} onClick={() => logout()} />
    </Container>
  );
};

export default Toolbar;
