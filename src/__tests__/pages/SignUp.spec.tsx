import React from 'react';
import { render } from '@testing-library/react';
import SignUp from '../../pages/SignUp';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignUp Page', () => {
  it('should be able to sign up', () => {
    const { debug } = render(<SignUp />);

    debug();
  });
});
