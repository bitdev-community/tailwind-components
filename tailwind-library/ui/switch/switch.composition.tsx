// Import the Switch component from where it is defined
import { Switch } from './switch.js';
import { useState } from 'react';

export const BasicSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked) => {
    setIsChecked(checked);
  };

  return (
    <Switch checked={isChecked} onChange={handleToggle} label="Enable Feature" />
  );
}
