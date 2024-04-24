import type { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button">
      {children}
    </button>
  );
}
