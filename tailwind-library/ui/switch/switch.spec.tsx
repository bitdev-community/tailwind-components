import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom matchers
import { BasicSwitch } from './switch.composition.js'; // Update the import path if necessary

describe('BasicSwitch Component', () => {
  it('should render with the switch initially off', () => {
    render(<BasicSwitch />);
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).not.toBeChecked(); // Using toBeChecked from jest-dom
  });

  it('should toggle the switch state on user interaction', () => {
    render(<BasicSwitch />);
    const switchElement = screen.getByRole('checkbox');

    // Initially not checked
    expect(switchElement).not.toBeChecked();

    // Simulate user clicking the switch
    fireEvent.click(switchElement);

    // Now it should be checked
    expect(switchElement).toBeChecked();

    // Click again to toggle off
    fireEvent.click(switchElement);

    // Should not be checked anymore
    expect(switchElement).not.toBeChecked();
  });
});
