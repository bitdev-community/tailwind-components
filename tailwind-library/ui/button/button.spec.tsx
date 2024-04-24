import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
