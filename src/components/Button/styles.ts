import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #1e90ff;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #f0f0f0;
  width: 100%;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#1e90ff')};
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }
`;
