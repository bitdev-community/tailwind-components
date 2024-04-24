import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DemoDemo } from './demo.js';

it('should render with the correct text', () => {
  const { getByText } = render((
    <MemoryRouter>
      <DemoDemo />
    </MemoryRouter>
  ));
  const rendered = getByText('Hello Bit and Vite!');
  expect(rendered).toBeTruthy();
});
