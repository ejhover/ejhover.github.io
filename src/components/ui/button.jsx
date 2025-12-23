import React from 'react';
import clsx from 'clsx';

export default function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium gap-2';
  const variants = {
    default: 'bg-gray-800 text-white',
    outline: 'bg-transparent border border-current',
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
