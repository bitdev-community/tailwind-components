import type { ReactNode } from 'react';

export type TextFieldProps = {
  /**
   * Sets the placeholder text for the text field.
   */
  placeholder?: string;
  /**
   * Sets the value for controlled components.
   */
  value?: string;
  /**
   * Event handler for when the text changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Optionally include children elements like icons inside the text field.
   */
  children?: ReactNode;
}

export function TextField({ placeholder, value, onChange, children, ...rest }: TextFieldProps) {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      {children && <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        {children}
      </div>}
      <input
        type="text"
        className="bg-white text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 focus:outline-none focus:bg-white focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest} // Spread remaining attributes to the input element
      />
    </div>
  );
}
