import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${shade(0.2, '#1e272e')};
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #1e272e;
  color: rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;

  transition: border-color 220ms;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #1e90ff;
      border-color: #1e90ff;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #1e90ff;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #ffffff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  svg {
    margin-right: 16px;
  }
`;
