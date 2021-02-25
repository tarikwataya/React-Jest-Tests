import styled from 'styled-components';

export const Container = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--color-base);
  height: 56px;
  border-radius: 100px;
  border: 0;
  box-shadow: 0px 3px 5px var(--color-shadows);
  padding: 0 16px;
  color: var(--color-base-dark);
  width: 80%;
  font-weight: var(--font-size-primary);
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-primary);
    color: var(--color-base);
  }
`;
