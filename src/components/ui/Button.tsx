import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean | string; // 👈 add this
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
    'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all';

  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    secondary: 'bg-primary-10 text-primary border border-primary-30 hover:bg-primary-20',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download} // 👈 key line
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

