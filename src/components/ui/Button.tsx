import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean | string;
}


export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  download
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors';

  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    secondary: 'border border-border text-text-primary hover:border-primary-30 hover:text-primary',
    ghost: 'text-text-secondary hover:text-text-primary',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

