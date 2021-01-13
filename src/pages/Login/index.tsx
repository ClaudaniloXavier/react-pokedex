import React, { useCallback, useRef, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container, Content, AnimationContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

interface LoginFormData {
  trainer: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    (data: LoginFormData) => {
      if (!data.trainer && !data.password) return;

      setLoading(true);
      setTimeout(() => {
        login({
          trainer: data.trainer,
          password: data.password,
        })
          .then(() => {
            history.push('home');
          })
          .catch(() => {
            addToast({
              type: 'error',
              title: 'Authentication error',
              description: 'Invalid credentials. Trainer not found.',
            });
          })
          .finally(() => setLoading(false));
      }, 2000);
    },
    [login, addToast, history],
  );

  return (
    <Container>
      {loading && <Loading />}
      <Content>
        <AnimationContainer>
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

            <Button disabled={loading} type="submit">
              Login
            </Button>
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
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
