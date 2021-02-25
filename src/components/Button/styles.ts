import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-primary);
  height: 56px;
  border-radius: 100px;
  border: 0;
  padding: 0 16px;
  color: var(--color-base);
  width: 50%;
  font-weight: var(--font-size-primary);
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-primary-dark);
  }
`;
