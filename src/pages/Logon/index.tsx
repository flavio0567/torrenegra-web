import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

interface SingInFormData {
  email: string;
  password: string;
}

const Logon: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Formato do e-mail invalido.')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Torrenegra" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
      </Content>
      <Background />
    </Container>
  );
};
export default Logon;
