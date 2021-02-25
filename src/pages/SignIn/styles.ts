import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const OtherLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  p {
    margin: 10px;
  }

  hr {
    flex: 1;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  h1 {
    width: 340px;
    text-align: right;

    @media (min-width: 700px) {
      width: 550px;
    }
  }

  form {
    margin: 40px;
    width: 340px;
    text-align: center;

    h2 {
      color: var(--color-primary);
      margin-bottom: 24px;
    }

    a {
      color: var(--color-primary);
      display: block;
      margin-top: 10px;
      text-align: right;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: var(--color-primary-dark);
      }
    }
  }

  > a {
    color: var(--color-primary);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: var(--color-live) 0% 0% no-repeat padding-box;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 35rem;

    @media (min-width: 1920px) {
      width: 55rem;
    }
  }

  h3,
  p {
    text-align: center;
    color: var(--color-base);
  }

  li {
    margin-bottom: -3rem;
    background-color: var(--color-base);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const FooterPage = styled.div`
  color: var(--color-primary);
  display: block;
  text-align: center;
  font-size: var(--font-size-footers);
  margin-bottom: 40px;

  p {
    margin-top: 20px;
  }

  a {
    color: var(--color-live);
    &:hover {
      color: var(--color-live-dark);
    }
  }
`;
