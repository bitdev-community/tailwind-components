import React from 'react';

export type SwitchProps = {
  /**
   * Current state of the switch.
   */
  checked: boolean;
  /**
   * Function to call when the switch is toggled.
   */
  onChange: (checked: boolean) => void;
  /**
   * Optional label for accessibility.
   */
  label?: string;
};

export function Switch({ checked, onChange, label }: SwitchProps ) {
  return (
    <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ right: '4px', top: '4px' }} // Adjust these values based on the size of the switch
        aria-label={label || 'Toggle Switch'}
      />
      <span
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        style={{ padding: '0' }}
      ></span>
    </label>
  );
};
