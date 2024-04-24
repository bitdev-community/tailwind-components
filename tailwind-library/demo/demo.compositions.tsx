import { MemoryRouter } from 'react-router-dom';
import { DemoDemo } from './demo.js';

export const DemoBasic = () => {
  return (
    <MemoryRouter>
      <DemoDemo />
    </MemoryRouter>
  );
};
