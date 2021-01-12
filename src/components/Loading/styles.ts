import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const indeterminateShort = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  overflow: hidden;
  background: ${lighten(0.35, '#1e90ff')};

  div {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 100%;
      background-color: #1e90ff;
      animation: ${indeterminateShort} 1.5s infinite ease-out;
    }

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      left: 0;
      right: 0;
      background-color: #1e90ff;
      animation: ${indeterminateShort} 1.5s infinite ease-out;
    }
  }
`;
