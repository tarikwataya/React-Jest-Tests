import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-base);
  padding: 16px;
  width: 100%;

  border-bottom: 2px solid var(--color-primary);
  color: var(--color-primary);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-input-error) !important;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-base-dark);
      border-color: var(--color-base-dark);
    `}

  ${props =>
    props.isField &&
    css`
      color: var(--color-base-dark);
      border-color: var(--color-base-dark);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-base-dark);

    &::placeholder {
      color: var(--color-primary);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: var(--color-input-error);
    color: var(--color-base);

    &::before {
      border-color: var(--color-input-error) transparent;
    }
  }
`;
