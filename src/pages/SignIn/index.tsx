import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, AnimationContainer, FooterPage } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Este campo não pode ser vazio')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Este campo não pode ser vazio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Login realizado!',
          description: 'Agora você já pode utilizar nosso sistema!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <AnimationContainer>
        <h1>Tests</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Welcome to Tests</h2>
          <Input name="email" icon={FiMail} placeholder="Users name or Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <a href="forgot">Forgot password?</a>
          <Button type="submit">Sign In</Button>
        </Form>

        <FooterPage>
          New? <Link to="/signup">Create Account</Link>
        </FooterPage>
      </AnimationContainer>
    </Container>
  );
};

export default SignIn;
