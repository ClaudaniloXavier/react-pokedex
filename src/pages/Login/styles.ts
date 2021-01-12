import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #1e272e;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0 16px;
  width: 100%;
  max-width: 720px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  animation: ${appearFromLeft} 1s;

  form {
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
    }
  }

  span {
    font-size: 14px;
    a {
      color: #1e90ff;
      text-decoration: none;
      margin-left: 6px;
      font-weight: bold;
    }
  }
`;

export { Container, Content, AnimationContainer };
