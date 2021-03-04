import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
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

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 20px;
    width: 340px;
    text-align: center;

    h2 {
      color: var(--color-primary);
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
