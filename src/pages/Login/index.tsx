import React, { useCallback, useRef, useContext } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { AuthContext } from '../../context/AuthContext';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface LoginFormData {
  trainer: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { trainer, login } = useContext(AuthContext);

  console.log(trainer);

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      login({
        trainer: data.trainer,
        password: data.password,
      });
    },
    [login],
  );

  return (
    <Container>
      <Content>
        <h1>React Pokédex</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Welcome trainer!</h2>

          <Input
            name="trainer"
            type="text"
            placeholder="Trainer"
            icon={FaUser}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            icon={FaLock}
          />

          <Button type="submit">Login</Button>
        </Form>

        <span>
          Made with ❤️ by
          <a
            href="https://github.com/ClaudaniloXavier"
            rel="noreferrer"
            target="_blank"
          >
            Claudanilo Xavier
          </a>
        </span>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;
