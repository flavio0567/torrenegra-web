import React from 'react';
// import * as Yup from 'yup';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('email format not valid')
//     .required('email is required'),
//   password: Yup.string()
//     .required('password is required')
//     .min(6, 'password min 6 chars'),
// });

const Logon: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Torrenegra" />

      <form>
        <h1>Faça seu Logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">
          <FiLogIn />
          Esqueci minha senha
        </a>
      </form>
    </Content>
    <Background />
  </Container>
);

export default Logon;
