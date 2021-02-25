import React, { useCallback, useRef } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
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
  Container,
  OtherLogin,
  Content,
  AnimationContainer,
  Background,
  FooterPage,
} from './styles';

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
            <h2>Getting Started</h2>

            <Input name="name" icon={FiUser} placeholder="Full Name" />
            <Input
              name="email"
              icon={FiMail}
              placeholder="Users name or Email"
            />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Create Password"
            />

            <Button type="submit">Sign up</Button>

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
            By signing up, you agree to <b>Invision</b>
            <br />
            <Link to="/">Terms of Conditions</Link> and{' '}
            <Link to="/">Privacy Policy</Link>
            <p>
              Already on Invision?{' '}
              <Link to="/">
                <b>Log in</b>
              </Link>
            </p>
          </FooterPage>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
