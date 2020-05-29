import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Link } from 'react-router-dom';

import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineDollarCircle,
} from 'react-icons/ai';
import { BsPerson, BsPersonPlus } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { FaHatCowboy } from 'react-icons/fa';

import { useToast } from '../../../hooks/toast';

import getValidationErrors from '../../../utils/getValidationErrors';
import logoImg from '../../../assets/logo.png';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, Text } from './styles';

const User: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          first_name: Yup.string().min(2, 'First name min 2 chars'),
          last_name: Yup.string().min(2, 'Last name min 2 chars'),
          email: Yup.string()
            .email('E-mail format not valid')
            .required('E-mail is required'),
          position: Yup.string()
            .required('Position is required')
            .min(6, 'Last name min 6 chars'),
          hourly_cost: Yup.string().required('Hourly cost is required'),
          password: Yup.string().min(6, 'Password min 6 chars'),
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
          title: 'Erro no cadastro de usuário',
          description: 'Ocorreu erro ao cadastrar o usuário, tente novamente.',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <img src={logoImg} alt="Torrenegra" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastro de usuário</h1>
          <Input name="first_name" icon={BsPerson} placeholder="Nome" />
          <Input name="last_name" icon={BsPersonPlus} placeholder="Sobrenome" />
          <Input name="email" icon={AiOutlineMail} placeholder="Email" />
          <Input name="position" icon={FaHatCowboy} placeholder="Função" />
          <Input
            name="hourly_cost"
            icon={AiOutlineDollarCircle}
            placeholder="Custo hora"
          />
          <Input
            name="password"
            icon={AiOutlineLock}
            type="password"
            placeholder="Senha provisória"
          />
          <Text>
            <input type="checkbox" />
            <h4>Adminstrador</h4>
          </Text>
          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiLogOut />
          Sair
        </Link>
      </Content>
    </Container>
  );
};

export default User;
