import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for more descriptive matchers
import { BasicTextField } from './textfield.composition.js'; // Ensure this import is correct

describe('BasicTextField', () => {
  it('should render with the correct placeholder', () => {
    render(<BasicTextField />);
    const inputElement = screen.getByPlaceholderText('Enter your text here');
    expect(inputElement).toBeInTheDocument(); // Checks if the element is in the document
    expect(inputElement).toBeVisible(); // Ensures the input is visible to the user
  });

  it('should update the input when changed', () => {
    render(<BasicTextField />);
    const inputElement = screen.getByPlaceholderText('Enter your text here');
    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(inputElement).toHaveValue('test input'); // jest-dom matcher to check the value
  });
});
