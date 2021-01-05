import styled from 'styled-components';
import backgroundImg from '../../assets/mega-charizard-wallpaper.jpg';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  background-color: #2c2a2b;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 120px 0 24px;
  width: 100%;
  max-width: 720px;

  form {
    margin: 80px 0;
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

const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

export { Container, Content, Background };
