import React from 'react';
// import * as Yup from 'yup';
import { Form } from '@unform/web';

import {
  AiOutlineCalendar,
  AiOutlineDollarCircle,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FaRegBuilding, FaRegAddressBook } from 'react-icons/fa';
import { MdPlace, MdDevicesOther } from 'react-icons/md';
import { FiLogOut, FiPlus, FiBriefcase, FiFlag, FiPhone } from 'react-icons/fi';

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

const Client: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <img src={logoImg} alt="Torrenegra" />
      <Content>
        <Form onSubmit={handleSubmit}>
          <Left>
            <h1>Dados básicos</h1>
            <Input name="cnpj" icon={FaRegBuilding} placeholder="Cnpj" />
            <Input
              name="corporate_name"
              icon={FiBriefcase}
              placeholder="Razão social"
            />
            <Input
              name="trading_name"
              icon={FiFlag}
              placeholder="Nome fantasia"
            />
            <Input
              name="address1"
              icon={FaRegAddressBook}
              placeholder="Endereço"
            />
            <Input
              name="address2"
              icon={FaRegAddressBook}
              placeholder="Complemento"
            />
            <Input name="city" icon={MdPlace} placeholder="Cidade" />
            <Input name="state" icon={MdPlace} placeholder="Estado" />
            <Input name="zip_code" icon={MdPlace} placeholder="Cep" />
          </Left>
          <Side>
            <h1>Dados comerciais</h1>
            <Input
              name="hourly_cost"
              icon={AiOutlineDollarCircle}
              placeholder="Valor hh"
            />
            <Input
              name="payment_deadline"
              icon={AiOutlineCalendar}
              placeholder="Prazo para pagamento"
            />
            <h1>Contatos</h1>
            <Input name="name" icon={BsPerson} placeholder="Nome" />
            <Input name="email" icon={AiOutlineMail} placeholder="E-mail" />
            <Input name="phone" icon={FiPhone} placeholder="Fone" />
            <Input name="other" icon={MdDevicesOther} placeholder="outro" />
            <Text>
              <input type="checkbox" name="main_contact" />
              <h4>Contato principal</h4>
            </Text>
            <Button type="submit">Confirmar</Button>
            <a href="/">
              <FiLogOut />
              Sair
            </a>
          </Side>
        </Form>
        <div>
          <table>
            <td>
              <FiPlus />
            </td>
            <td>principal</td>
            <td>nome</td>
            <td>e-mail</td>
            <td>fone</td>
            <td>outro</td>
          </table>
        </div>
      </Content>
    </Container>
  );
};

export default Client;
