import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 32px 16px;

  form {
    .search {
      display: flex;
      align-items: center;

      button {
        margin: 0 0 0 16px;
        max-width: 160px;
      }
    }
  }
`;

export { Container, Content };
