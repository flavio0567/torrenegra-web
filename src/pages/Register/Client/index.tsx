import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Link } from 'react-router-dom';

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

import { useToast } from '../../../hooks/toast';

import getValidationErrors from '../../../utils/getValidationErrors';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, Text, Left, Side } from './styles';

const Client: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        cnpj: Yup.string().required(),
        corporate_name: Yup.string().required(),
        trading_name: Yup.string().required(),
        address1: Yup.string().required(),
        address2: Yup.string().required(),
        city: Yup.string().required(),
        state: Yup.string().required(),
        zip_code: Yup.string().required(),
        hourly_cost: Yup.number().required(),
        payment_deadline: Yup.number().required(),
        name: Yup.string().required(),
        email: Yup.string()
          .email('E-mail format not valid')
          .required('E-mail is required'),
        phone: Yup.number().required(),
        other: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro de clientes',
        description: 'Ocorreu erro ao cadastrar o cliente, tente novamente.',
      });
    }
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="Torrenegra" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
            <Link to="/">
              <FiLogOut />
              Sair
            </Link>
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
