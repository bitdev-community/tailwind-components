// Import the TextField component from where it is defined
import { TextField } from './textfield.js';
import { useState } from 'react';

export const BasicTextField = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      placeholder="Enter your text here"
      value={value}
      onChange={handleChange}
    />
  );
}
