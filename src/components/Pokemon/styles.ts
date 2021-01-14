import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  border: 2px solid ${shade(0.3, '#1e272e')};
  border-radius: 10px;
  max-height: 520px;
  height: 100%;
  padding: 32px;

  margin-top: 84px;
`;

export { Container };
