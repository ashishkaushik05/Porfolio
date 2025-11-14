/**
 * Button.jsx
 * Reusable button component
 */

import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const fullClass = `${baseClass} ${variantClass} ${className}`;

  return (
    <button
      className={fullClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
