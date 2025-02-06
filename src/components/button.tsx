import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ComponentProps<'button'> & {
  className?: string;
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
        { ...props }
        className={ clsx('rounded-md px-3 py-2 bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600', className) }>
      { children }
    </button>
  );
}
