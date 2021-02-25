import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';

import {
  OtherLogin,
  Container,
  Content,
  AnimationContainer,
  Background,
  FooterPage,
} from './styles';

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
      <Background>
        <Carousel nextIcon={false} prevIcon={false}>
          <Carousel.Item>
            <img className="d-block w-80" src="Data.png" alt="First slide" />
            <h3>First Marcenas mattis egestas</h3>
            <p>
              Erdum et malesuada fames ac ante ileum primmer in faucibus
              uspendisse porta.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-80" src="data2.png" alt="First slide" />
            <h3>Second Marcenas mattis</h3>
            <p>
              Erdum et malesuada fames ac ante ileum primmer in faucibus
              uspendisse porta.
            </p>
          </Carousel.Item>
        </Carousel>
      </Background>

      <Content>
        <AnimationContainer>
          <h1>Invision</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Welcome to Invision</h2>
            <Input
              name="email"
              icon={FiMail}
              placeholder="Users name or Email"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />
            <a href="forgot">Forgot password?</a>
            <Button type="submit">Sign In</Button>

            <OtherLogin>
              <hr />
              <p>Or</p>
              <hr />
            </OtherLogin>

            <ButtonIcon type="submit" icon={FcGoogle}>
              Sign in with Google
            </ButtonIcon>
          </Form>

          <FooterPage>
            New Invision? <Link to="/signup">Create Account</Link>
          </FooterPage>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
