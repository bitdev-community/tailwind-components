import type { ReactNode, MouseEvent } from 'react';

export type ButtonProps = {
  /**
   * Sets the component children.
   */
  children?: ReactNode;
  /**
   * Function to call when the button is clicked.
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
