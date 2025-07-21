// Input.jsx
import React from 'react';

const Input = React.forwardRef(({ type = 'text', className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition ${className}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
