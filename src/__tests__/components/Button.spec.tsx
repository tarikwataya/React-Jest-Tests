import React from 'react';

import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render an button', () => {
    const { getByText } = render(
      <Button type="submit">Sign In</Button>,
    );

    expect(getByText('Sign In')).toBeTruthy();
  });
});
