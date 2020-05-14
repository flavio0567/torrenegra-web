import React from 'react';
// import * as Yup from 'yup';

import { FiLogOut } from 'react-icons/fi';
import logoImg from '../../../assets/logo.png';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, Text } from './styles';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('email format not valid')
//     .required('email is required'),
//   password: Yup.string()
//     .required('password is required')
//     .min(6, 'password min 6 chars'),
// });

const User: React.FC = () => (
  <Container>
    <img src={logoImg} alt="Torrenegra" />
    <Content>
      <form>
        <h1>Cadastro de usuário</h1>
        <Input name="first_name" placeholder="Nome" />
        <Input name="last_name" placeholder="Sobrenome" />
        <Input name="email" placeholder="Email" />
        <Input name="position" placeholder="Função" />
        <Input name="hourly_cost" placeholder="Custo hora" />
        <Input name="password" placeholder="Senha provisória" />
        <Text>
          <input type="checkbox" />
          <h4>Adminstrador</h4>
        </Text>
        <Button>Confirmar</Button>
      </form>

      <a href="/">
        <FiLogOut />
        Sair
      </a>
    </Content>
  </Container>
);

export default User;
