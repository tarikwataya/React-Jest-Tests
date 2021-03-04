import React, { useCallback, useRef } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, AnimationContainer, FooterPage } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Este campo não pode ser vazio'),
          email: Yup.string()
            .required('Este campo não pode ser vazio')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
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
          <h2>Getting Testing</h2>

          <Input name="name" icon={FiUser} placeholder="Full Name" />
          <Input name="email" icon={FiMail} placeholder="Users name or Email" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Create Password"
          />

          <Button type="submit">Sign up</Button>
        </Form>

        <FooterPage>
          <p>
            Already?{' '}
            <Link to="/">
              <b>Log in</b>
            </Link>
          </p>
        </FooterPage>
      </AnimationContainer>
    </Container>
  );
};

export default SignUp;
