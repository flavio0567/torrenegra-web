import styled from 'styled-components';
import { shade } from 'polished';

// import torreBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  img {
    height: 110px;
    width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: top;
    margin: 40px 0;
    width: 900px;
    text-align: center;
  }

  h1 {
    font-size: 22px;
    margin: 8px;
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 10px;
  }
`;

export const Left = styled.div`
  flex: 1;
  background: center 18vh;
  background-size: 500px 780px;
  margin-right: 10px;
`;

export const Side = styled.div`
  flex: 1;
  background: center 18vh;
  background-size: 500px 780px;
`;
