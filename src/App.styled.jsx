import styled from '@emotion/styled';

export const MainSection = styled.div`
  padding: 50px 20px;
  margin: 0 auto;

  width: 100%;
  height: 100vh;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 50px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 50px 100px;
  }
`;