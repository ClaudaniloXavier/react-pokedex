import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`
  height: 64px;
  border-bottom: 2px solid ${shade(0.3, '#1e272e')};
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    fill: #1e90ff;

    &:hover {
      fill: ${shade(0.2, '#1e90ff')};
    }
  }
`;

const Trainer = styled.div`
  display: flex;
  align-items: center;

  .photo {
    height: 36px;
    width: 36px;

    img {
      width: 100%;
      border-radius: 18px;
      border: 2px solid #1e90ff;
    }
  }

  .text {
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;

    span {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.64);
      font-weight: bold;
    }
  }
`;

export { Container, Trainer };
