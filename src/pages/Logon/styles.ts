import styled from 'styled-components';
import { shade } from 'polished';

import torreBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 480px;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    font-size: 22px;
    margin-bottom: 24px;
  }

  img {
    height: 110px;
    width: 300px;
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

export const Background = styled.div`
  flex: 1;
  background: url(${torreBackground}) no-repeat center 18vh;
  background-size: 300px 480px;
`;
