import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */

  h2 {
    padding: 20px;
  }
`;

export const Header = styled.header`
  padding: 20px;
  background: #28262e;

  img {
    height: 80px;
    width: 210px;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;

  button {
    margin-left: auto;
    padding: 10px;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    font-size: 12px;
    color: #f4ede8;
  }

  strong {
    color: #ff9000;
  }
`;

export const ProjectList = styled.div`
  margin-top: 20px;

  a {
    background: #fff;
    border-radius: 8px;
    width: 100%;
    padding: 24px;
    /* display: block; */
    text-decoration: none;

    display: flex;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    ul {
      display: flex;
      flex-flow: row wrap;
      list-style: none;
      color: #3d3d4d;
    }

    li {
      display: flex;
      justify-content: space-between;
      min-width: 700px;

      div {
        p {
          color: #a8a8b3;
          font-size: 12px;
          margin: 0 8px;
        }

        strong {
          margin: 0 8px;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: end;
  /* margin-left: 20px; */

  a {
    display: block;
    padding: 1.2em;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }
`;
