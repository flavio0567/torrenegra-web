import React from 'react';
// import * as Yup from 'yup';
import { FiLogOut } from 'react-icons/fi';
import logoImg from '../../../assets/logo.png';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, Text, Left, Side } from './styles';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('email format not valid')
//     .required('email is required'),
//   password: Yup.string()
//     .required('password is required')
//     .min(6, 'password min 6 chars'),
// });

const Client: React.FC = () => (
  <Container>
    <img src={logoImg} alt="Torrenegra" />
    <Content>
      <form>
        <Left>
          <h1>Dados básicos</h1>
          <Input name="cnpj" placeholder="Cnpj" />
          <Input name="corporate_name" placeholder="Razão social" />
          <Input name="trading_name" placeholder="Nome fantasia" />
          <Input name="address1" placeholder="Endereço" />
          <Input name="address2" placeholder="Complemento" />
          <Input name="city" placeholder="Cidade" />
          <Input name="state" placeholder="Estado" />
          <Input name="zip_code" placeholder="Cep" />
        </Left>
        <Side>
          <h1>Dados comerciais</h1>
          <Input name="hourly_cost" placeholder="Valor hh" />
          <Input name="payment_deadline" placeholder="Prazo para pagamento" />
          <h1>Contatos</h1>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="skype" placeholder="Skype" />
          <Text>
            <input type="checkbox" name="main_contact" />
            <h4>Contato principal</h4>
          </Text>
          <Button>Confirmar</Button>
          <a href="/">
            <FiLogOut />
            Sair
          </a>
        </Side>
      </form>
    </Content>
  </Container>
);

export default Client;
